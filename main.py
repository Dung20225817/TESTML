from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Cho phép frontend (React) gọi tới backend này
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Trong thực tế nên dùng origin cụ thể
    allow_methods=["*"],
    allow_headers=["*"],
)

# Mock data cổ phiếu
stocks = {
    "VNM": {"name": "Vinamilk", "symbol": "VNM", "price": 82000, "change": -1.2},
    "FPT": {"name": "FPT Corp", "symbol": "FPT", "price": 105000, "change": 2.3},
}

@app.get("/api/stocks/{symbol}")
def get_stock(symbol: str):
    symbol = symbol.upper()
    if symbol in stocks:
        return stocks[symbol]
    return {"message": "Không tìm thấy cổ phiếu"}, 404
