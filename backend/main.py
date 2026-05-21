from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from reviewer import review_code

app = FastAPI()
app.add_middleware(
    CORSMiddleware, 
    allow_origins=["http://localhost:3000"],
    allow_methods=["*"],
    allow_headers=["*"],
)

class CodeRequest(BaseModel):
    code: str
    language: str

@app.post("/review")
def review(request: CodeRequest):
    result = review_code(request.code, request.language)
    return result

@app.get("/")
def root():
    return{"message": "code reviewer api is running"}