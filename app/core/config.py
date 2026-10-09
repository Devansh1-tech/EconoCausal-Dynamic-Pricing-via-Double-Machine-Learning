import os
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parent.parent.parent
MODELS_DIR = BASE_DIR / "models"

class Settings:
    MODELS_DIR: Path = MODELS_DIR
    PREPROCESSOR_PATH: Path = MODELS_DIR / "preprocessor.joblib"
    FEATURE_METADATA_PATH: Path = MODELS_DIR / "feature_metadata.json"
    SEGMENT_THRESHOLDS_PATH: Path = MODELS_DIR / "segment_thresholds.json"
    ATE_SUMMARY_PATH: Path = MODELS_DIR / "ate_summary.json"
    
    # Models
    DML_MENS_CONVERSION_PATH: Path = MODELS_DIR / "dml_linear_mens_conversion.joblib"
    DML_WOMENS_CONVERSION_PATH: Path = MODELS_DIR / "dml_linear_womens_conversion.joblib"
    DML_MENS_SPEND_PATH: Path = MODELS_DIR / "dml_linear_mens_spend.joblib"
    DML_WOMENS_SPEND_PATH: Path = MODELS_DIR / "dml_linear_womens_spend.joblib"
    
settings = Settings()
