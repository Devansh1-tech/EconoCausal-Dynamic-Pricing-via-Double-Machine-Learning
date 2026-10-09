from pydantic import BaseModel, Field
from typing import Optional, List, Dict

class CustomerFeaturePayload(BaseModel):
    customer_id: Optional[str] = None
    recency: int
    history_segment: str
    history: float
    mens: int = Field(..., ge=0, le=1)
    womens: int = Field(..., ge=0, le=1)
    zip_code: str
    newbie: int = Field(..., ge=0, le=1)
    channel: str

class PredictTreatmentResponse(BaseModel):
    conversion: float
    spend: float

class PredictionResponse(BaseModel):
    customer_id: Optional[str]
    mens_email: PredictTreatmentResponse
    womens_email: PredictTreatmentResponse

class SegmentTreatmentResponse(BaseModel):
    conversion: str
    spend: str

class SegmentResponse(BaseModel):
    customer_id: Optional[str]
    mens_email: SegmentTreatmentResponse
    womens_email: SegmentTreatmentResponse

class RecommendationResponse(BaseModel):
    customer_id: Optional[str]
    recommended_campaign: str
    expected_uplift_conversion: float
    expected_uplift_spend: float
