import { useState } from "react";
import { fetchStockInfo } from "../api/stock";
import type { StockData } from "../types/stock";

export function useStockInfo() {
  const [stockData, setStockData] = useState<StockData | null>(null);
  const [error, setError] = useState("");

  const searchStock = async (symbol: string) => {
    try {
      setError("");
      const data = await fetchStockInfo(symbol);
      setStockData(data);
    } catch {
      setStockData(null);
      setError("Không tìm thấy cổ phiếu hoặc lỗi kết nối.");
    }
  };

  return { stockData, error, searchStock };
}
