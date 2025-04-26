from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS許可（Angularから呼べるように）
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 開発時のみワイルドカードでOK
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/test")
def read_test():
    return {"message": "OK"}