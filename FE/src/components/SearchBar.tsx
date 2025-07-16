import { useState } from "react";

interface Props {
  onSearch: (symbol: string) => void;
}

export default function SearchBar({ onSearch }: Props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      onSearch(input.trim().toUpperCase());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 p-4">
      <input
        className="border rounded px-4 py-2 w-full"
        type="text"
        placeholder="Nhập mã cổ phiếu (VD: VNM)"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Tìm kiếm
      </button>
    </form>
  );
}
