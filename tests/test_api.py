import pytest
from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

# Dummy payload matching CustomerFeaturePayload schema
dummy_payload = {
    "customer_id": "test_123",
    "recency": 10,
    "history_segment": "Mens E-Mail",
    "history": 100.5,
    "mens": 1,
    "womens": 0,
    "zip_code": "Urban",
    "newbie": 0,
    "channel": "Web"
}

def test_health_check():
    # Because lifespan runs the startup, test client will trigger load_all()
    with TestClient(app) as client:
        response = client.get("/health")
        assert response.status_code == 200
        assert response.json() == {"status": "ok"}

def test_metadata():
    with TestClient(app) as client:
        response = client.get("/metadata")
        assert response.status_code == 200
        data = response.json()
        assert "features" in data
        assert "segment_thresholds" in data
        assert "ate_summary" in data

def test_predict():
    with TestClient(app) as client:
        response = client.post("/predict", json=[dummy_payload])
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        assert len(data) == 1
        
        pred = data[0]
        assert pred["customer_id"] == "test_123"
        assert "mens_email" in pred
        assert "womens_email" in pred
        assert "conversion" in pred["mens_email"]
        assert "spend" in pred["mens_email"]

def test_segment():
    with TestClient(app) as client:
        response = client.post("/segment", json=[dummy_payload])
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        assert len(data) == 1
        
        seg = data[0]
        assert seg["customer_id"] == "test_123"
        assert "mens_email" in seg
        assert "conversion" in seg["mens_email"]
        assert seg["mens_email"]["conversion"] in ["Persuadable", "Sleeping Dog", "Sure Thing", "Lost Cause"]

def test_recommend():
    with TestClient(app) as client:
        response = client.post("/recommend", json=[dummy_payload])
        assert response.status_code == 200
        data = response.json()
        assert isinstance(data, list)
        assert len(data) == 1
        
        rec = data[0]
        assert rec["customer_id"] == "test_123"
        assert "recommended_campaign" in rec
        assert "expected_uplift_conversion" in rec
        assert "expected_uplift_spend" in rec
