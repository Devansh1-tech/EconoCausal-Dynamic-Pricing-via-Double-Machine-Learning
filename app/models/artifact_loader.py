import json
import joblib
import sys
import pandas as pd
from typing import Dict, Any, List
from sklearn.base import BaseEstimator, TransformerMixin

from app.core.config import settings

class CategoricalCleaner(BaseEstimator, TransformerMixin):
    """
    Custom scikit-learn transformer to clean up strings in categorical columns
    before they are passed to the OneHotEncoder.
    """
    def __init__(self, columns_to_clean: List[str]):
        self.columns_to_clean = columns_to_clean
        
    def fit(self, X: pd.DataFrame, y=None):
        return self
        
    def transform(self, X: pd.DataFrame, y=None) -> pd.DataFrame:
        X_cleaned = X.copy()
        for col in self.columns_to_clean:
            if col in X_cleaned.columns:
                # Remove prefixes like '1) ', '2) ' from history_segment
                X_cleaned[col] = X_cleaned[col].astype(str).str.replace(r'^\d+\)\s*', '', regex=True)
                X_cleaned[col] = X_cleaned[col].str.strip()
        return X_cleaned

# Patch __main__ so joblib can find CategoricalCleaner which was pickled in a notebook environment
setattr(sys.modules['__main__'], 'CategoricalCleaner', CategoricalCleaner)

class ArtifactRegistry:
    def __init__(self):
        self.preprocessor = None
        self.feature_metadata: Dict[str, Any] = {}
        self.segment_thresholds: Dict[str, Any] = {}
        self.ate_summary = None
        
        self.models = {}

    def load_all(self):
        # Load Preprocessor
        self.preprocessor = joblib.load(settings.PREPROCESSOR_PATH)
        
        # Load JSON Metadata
        with open(settings.FEATURE_METADATA_PATH, 'r') as f:
            self.feature_metadata = json.load(f)
            
        with open(settings.SEGMENT_THRESHOLDS_PATH, 'r') as f:
            self.segment_thresholds = json.load(f)
            
        with open(settings.ATE_SUMMARY_PATH, 'r') as f:
            self.ate_summary = json.load(f)
            
        # Load Models
        self.models = {
            "mens_conversion": joblib.load(settings.DML_MENS_CONVERSION_PATH),
            "womens_conversion": joblib.load(settings.DML_WOMENS_CONVERSION_PATH),
            "mens_spend": joblib.load(settings.DML_MENS_SPEND_PATH),
            "womens_spend": joblib.load(settings.DML_WOMENS_SPEND_PATH),
        }

artifacts = ArtifactRegistry()
