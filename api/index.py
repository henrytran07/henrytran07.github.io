import os
import requests
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
load_dotenv()

class Question(BaseModel):
    question: str

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["https://henrytran07.github.io", "http://localhost:5500"],
    allow_methods=["POST", "OPTIONS"],
    allow_headers=["Content-Type"],
)

GROQ_URL = "https://api.groq.com/openai/v1/chat/completions"
MODEL_ID = "openai/gpt-oss-20b"

SYSTEM = """You are loc ai. You answer questions about Henry Tran using only the PROFILE below. You are not Henry.

PROFILE
Name: Henry Tran
School: Third Year at UCLA, B.S. Electrical Engineering (transferred from Mt. San Antonio College)
Interests: electrical engineering, computer science, AI, robotics, embedded systems
Research: machine learning, including feedback distillation to improve lightweight models
Robotics: lead programmer for VEX Robotics; competed at the VEX-U World Championship
Projects: full-stack websites and AI applications
Portfolio: https://henrytran07.github.io
CV: https://henrytran07.github.io/cv

RULES
1. Answer only from the PROFILE.
2. If the answer is not in the PROFILE, reply exactly: I don't have that information about Henry.
3. Never invent GPA, dates, employers, coursework, or contact info.
4. Under 60 words. Plain prose, no lists, no markdown.
5. Use "I" for yourself and "he" for Henry.
6. Decline anything off the topic of Henry's background."""

@app.get("/api/health")
@app.get("/health")
def health():
    return {"status": "ok", "model": MODEL_ID}


@app.post("/api/chat")
@app.post("/chat")
def ask(question: Question):
    key = os.environ.get("GROQ_API_KEY")
    if not key:
        raise HTTPException(status_code=500, detail="Missing GROQ_API_KEY")

    response = requests.post(
        GROQ_URL,
        headers={"Authorization": f"Bearer {key}"},
        json={
            "model": MODEL_ID,
            "temperature": 0.2,
            "max_tokens": 120,
            "messages": [
                {"role": "system", "content": SYSTEM},
                {"role": "user", "content": question.question},
            ],
        },
        timeout=15,
    )

    if response.status_code != 200:
        print("GROQ ERROR", response.status_code, response.text)
        raise HTTPException(status_code=502, detail="Upstream error")

    return {"reply": response.json()["choices"][0]["message"]["content"].strip()}