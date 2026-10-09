from fastapi import APIRouter, HTTPException
from typing import List

from app.schemas.payload import (
    CustomerFeaturePayload, PredictionResponse, SegmentResponse, RecommendationResponse
)
from app.services.inference import get_predictions, get_segments, get_recommendations
from app.models.artifact_loader import artifacts

router = APIRouter()

@router.get("/health")
def health_check():
    if artifacts.preprocessor is None:
        raise HTTPException(status_code=503, detail="Models not loaded")
    return {"status": "ok"}

@router.get("/metadata")
def metadata():
    return {
        "features": artifacts.feature_metadata,
        "segment_thresholds": artifacts.segment_thresholds,
        "ate_summary": artifacts.ate_summary
    }

@router.post("/predict", response_model=List[PredictionResponse])
def predict(payloads: List[CustomerFeaturePayload]):
    try:
        return get_predictions(payloads)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal server error during prediction: {str(e)}")

@router.post("/segment", response_model=List[SegmentResponse])
def segment(payloads: List[CustomerFeaturePayload]):
    try:
        return get_segments(payloads)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal server error during segmentation: {str(e)}")

@router.post("/recommend", response_model=List[RecommendationResponse])
def recommend(payloads: List[CustomerFeaturePayload]):
    try:
        return get_recommendations(payloads)
    except ValueError as e:
        raise HTTPException(status_code=400, detail=str(e))
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Internal server error during recommendation: {str(e)}")
