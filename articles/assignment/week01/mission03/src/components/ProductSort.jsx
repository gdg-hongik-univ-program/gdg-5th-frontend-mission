import { useState } from "react";
import { sortedData } from "../data/mockData";

function ProductSort() {
  const [sortBy, setSortBy] = useState("");

  const [counts, setCounts] = useState({});

  const [purchased, setPurchased] = useState({});

  const sortedItems = [...sortedData].sort((a, b) => {
    if (sortBy === "name") return a.itemName.localeCompare(b.itemName);
    if (sortBy === "price") return a.price - b.price;
    return 0;
  });

  const increment = (id) => {
    setCounts((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const decrement = (id) => {
    setCounts((prev) => {
      const current = prev[id] || 0;
      return { ...prev, [id]: current > 0 ? current - 1 : 0 };
    });
  };

  const addToCart = (item) => {
    const count = counts[item.id] || 0;
    if (count === 0) return;
    console.log(`장바구니 추가: ${item.itemName}, 수량: ${count}`);
    setPurchased((prev) => ({ ...prev, [item.id]: true }));
  };

  return (
    <div className="flex flex-col items-center pt-12">
      <form className="mb-12">
        <select
          id="sort-select"
          name="sort"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="border rounded px-4 py-2 w-60 text-gray-700 focus:outline-none focus:border-blue-400"
        >
          <option value="" disabled hidden className="text-gray-400">
            정렬 기준 선택
          </option>
          <option value="name">상품명 (가나다순)</option>
          <option value="price">가격 (낮은순)</option>
        </select>
      </form>

      <div className="w-[800px] mb-2 flex justify-end">
        <span className="text-gray-500 font-semibold text-sm underline">내 구매 내역</span>
      </div>

      <div className="w-[800px] flex flex-col gap-6">
        {sortedItems.map((item) => (
          <div
            key={item.id}
            className="border rounded-lg p-6 flex flex-col gap-3 shadow-sm bg-white"
          >
            <div className="font-bold text-lg">{item.itemName}</div>
            <div className="flex items-center gap-8 justify-between">
              <div className="flex items-center gap-8">
                <span className="text-gray-600 text-base">{item.price} 원</span>
                <span className="text-gray-400 text-base">
                  남은 수량: {item.quantity}개
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  className="border px-3 py-1 rounded disabled:opacity-50"
                  onClick={() => decrement(item.id)}
                  disabled={purchased[item.id] || !(counts[item.id] > 0)}
                >
                  -
                </button>
                <span className="w-10 text-center border rounded px-2 py-1 bg-gray-100">
                  {counts[item.id] || 0}
                </span>
                <button
                  className="border px-3 py-1 rounded disabled:opacity-50"
                  onClick={() => increment(item.id)}
                  disabled={purchased[item.id]}
                >
                  +
                </button>
                <button
                  className={
                    (purchased[item.id]
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600") +
                    " text-white rounded px-4 py-2"
                  }
                  onClick={() => addToCart(item)}
                  disabled={purchased[item.id]}
                >
                  장바구니
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductSort;