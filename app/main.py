import os
from pathlib import Path

from dotenv import load_dotenv
from fastapi import FastAPI, Request, status
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.templating import Jinja2Templates

from .chat import MODEL_ID, router

BASE = Path(__file__).resolve().parent.parent

load_dotenv(BASE / ".env")

ALLOWED_ORIGINS = [
    "https://henrytran07.github.io",
    "https://henrytran07-github-io.vercel.app",
    "http://localhost:8000",
    "http://127.0.0.1:8000",
    "http://localhost:5501",
    "http://127.0.0.1:5501",
]

STATIC_DIRS = ["static", "scripts", "data", "cv_doc", "images", "style", "files"]

app = FastAPI(title="henrytran07.github.io", docs_url=None, redoc_url=None)

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["Content-Type"],
)

app.include_router(router)

templates = Jinja2Templates(directory=str(BASE / "templates"))

for folder in STATIC_DIRS:
    directory = BASE / folder
    if directory.is_dir():
        app.mount(f"/{folder}", StaticFiles(directory=str(directory)), name=folder)


def render(request: Request, name: str):
    return templates.TemplateResponse(request, name, {"api_base": ""})


@app.get("/")
def get_home(request: Request):
    return render(request, "home.html")


@app.get("/cv")
@app.get("/cv/")
def get_cv(request: Request):
    return render(request, "cv.html")


@app.get("/api/health", status_code=status.HTTP_200_OK)
@app.get("/health", status_code=status.HTTP_200_OK)
def health_status():
    return {
        "status": "healthy",
        "model": MODEL_ID,
        "key_loaded": bool(os.environ.get("GROQ_API_KEY")),
    }
