import type{ StockData } from "../types/stock";

export default function StockInfo({ data }: { data: StockData }) {
  return (
    <div className="p-4 border rounded shadow bg-white">
      <h2 className="text-xl font-bold mb-2">{data.name} ({data.symbol})</h2>
      <p>Giá: {data.price.toLocaleString()} VND</p>
      <p>Thay đổi: {data.change} %</p>
    </div>
  );
}
