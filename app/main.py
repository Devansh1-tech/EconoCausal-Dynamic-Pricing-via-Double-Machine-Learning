from contextlib import asynccontextmanager
from fastapi import FastAPI
from app.api.routes import router
from app.models.artifact_loader import artifacts

@asynccontextmanager
async def lifespan(app: FastAPI):
    # Load all models and metadata on startup
    artifacts.load_all()
    yield
    # Clean up if needed

app = FastAPI(
    title="EconoCausal API",
    description="Causal AI backend for personalized marketing campaign optimization",
    version="1.0.0",
    lifespan=lifespan
)

app.include_router(router)

if __name__ == "__main__":
    import uvicorn
    uvicorn.run("app.main:app", host="0.0.0.0", port=8000, reload=True)
