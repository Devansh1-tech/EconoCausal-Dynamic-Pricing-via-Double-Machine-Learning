import pandas as pd
import numpy as np
from typing import List

from app.models.artifact_loader import artifacts
from app.schemas.payload import (
    CustomerFeaturePayload, PredictionResponse, PredictTreatmentResponse, 
    SegmentResponse, SegmentTreatmentResponse, RecommendationResponse
)

# Features used for effect heterogeneity during model training
EFFECT_MODIFIER_COLS = ["history", "recency", "newbie"]

def _get_effect_modifiers(payloads: List[CustomerFeaturePayload]) -> np.ndarray:
    """
    Extract the raw effect modifiers required by the LinearDML .effect() method.
    The notebook training pipeline only used ['history', 'recency', 'newbie'] as X 
    (heterogeneity features) while the preprocessor was used for W (controls).
    For inference, we only need X.
    """
    df = pd.DataFrame([p.model_dump(exclude={'customer_id'}) for p in payloads])
    
    # Check for missing required columns just in case, though Pydantic should catch this
    missing = set(EFFECT_MODIFIER_COLS) - set(df.columns)
    if missing:
        raise ValueError(f"Missing required effect modifiers: {missing}")
        
    return df[EFFECT_MODIFIER_COLS].values.astype(float)

def get_predictions(payloads: List[CustomerFeaturePayload]) -> List[PredictionResponse]:
    # 1. We ONLY need the effect modifiers (X) for the .effect() call
    X_eff = _get_effect_modifiers(payloads)
    
    mens_conv_effects = np.ravel(artifacts.models["mens_conversion"].effect(X_eff))
    womens_conv_effects = np.ravel(artifacts.models["womens_conversion"].effect(X_eff))
    mens_spend_effects = np.ravel(artifacts.models["mens_spend"].effect(X_eff))
    womens_spend_effects = np.ravel(artifacts.models["womens_spend"].effect(X_eff))
    
    responses = []
    for i, payload in enumerate(payloads):
        resp = PredictionResponse(
            customer_id=payload.customer_id,
            mens_email=PredictTreatmentResponse(
                conversion=float(mens_conv_effects[i]),
                spend=float(mens_spend_effects[i])
            ),
            womens_email=PredictTreatmentResponse(
                conversion=float(womens_conv_effects[i]),
                spend=float(womens_spend_effects[i])
            )
        )
        responses.append(resp)
    return responses

def _assign_segment(effect: float, gamma_p: float, gamma_sd: float) -> str:
    if effect > gamma_p:
        return "Persuadable"
    elif effect < gamma_sd:
        return "Sleeping Dog"
    elif effect > 0:
        return "Sure Thing" 
    else:
        return "Lost Cause" 

def get_segments(payloads: List[CustomerFeaturePayload]) -> List[SegmentResponse]:
    preds = get_predictions(payloads)
    
    t = artifacts.segment_thresholds
    c_g_p = t["conversion"]["persuadable_gamma"]
    c_g_sd = t["conversion"]["sleeping_dog_gamma"]
    s_g_p = t["spend"]["persuadable_gamma"]
    s_g_sd = t["spend"]["sleeping_dog_gamma"]
    
    responses = []
    for p in preds:
        resp = SegmentResponse(
            customer_id=p.customer_id,
            mens_email=SegmentTreatmentResponse(
                conversion=_assign_segment(p.mens_email.conversion, c_g_p, c_g_sd),
                spend=_assign_segment(p.mens_email.spend, s_g_p, s_g_sd)
            ),
            womens_email=SegmentTreatmentResponse(
                conversion=_assign_segment(p.womens_email.conversion, c_g_p, c_g_sd),
                spend=_assign_segment(p.womens_email.spend, s_g_p, s_g_sd)
            )
        )
        responses.append(resp)
    return responses

def get_recommendations(payloads: List[CustomerFeaturePayload]) -> List[RecommendationResponse]:
    preds = get_predictions(payloads)
    
    responses = []
    for p in preds:
        options = {
            "No E-Mail": {"conversion": 0.0, "spend": 0.0},
            "Mens E-Mail": {"conversion": p.mens_email.conversion, "spend": p.mens_email.spend},
            "Womens E-Mail": {"conversion": p.womens_email.conversion, "spend": p.womens_email.spend}
        }
        
        best_campaign = "No E-Mail"
        best_spend = 0.0
        
        for camp, vals in options.items():
            if vals["spend"] > best_spend:
                best_spend = vals["spend"]
                best_campaign = camp
                
        responses.append(RecommendationResponse(
            customer_id=p.customer_id,
            recommended_campaign=best_campaign,
            expected_uplift_conversion=options[best_campaign]["conversion"],
            expected_uplift_spend=best_spend
        ))
    return responses
