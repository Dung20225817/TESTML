import type{ StockData } from "../types/stock";

export async function fetchStockInfo(symbol: string): Promise<StockData> {
  const response = await fetch(`http://localhost:8000/api/stocks/${symbol}`);
  if (!response.ok) throw new Error("Không tìm thấy cổ phiếu");
  return response.json();
}
