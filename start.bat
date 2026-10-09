@echo off
echo Starting EconoCausal...

echo Starting FastAPI Backend...
start cmd /k "python -m uvicorn app.main:app --host 0.0.0.0 --port 8000 --reload"

echo Starting React Frontend...
cd frontend
start cmd /k "npm run dev"

echo EconoCausal services are booting up!
echo Backend API available at: http://127.0.0.1:8000/docs
echo Frontend Dashboard available at: http://localhost:5173 (check frontend terminal for exact port if occupied)
pause
