import { useStockInfo } from "../hooks/useStockInfo";
import SearchBar from "../components/SearchBar";
import StockInfo from "../components/StockInfo";

export default function Home() {
  const { stockData, error, searchStock } = useStockInfo();

  return (
    <div className="max-w-xl mx-auto p-4">
      <SearchBar onSearch={searchStock} />
      {error && <p className="text-red-500">{error}</p>}
      {stockData && <StockInfo data={stockData} />}
    </div>
  );
}
