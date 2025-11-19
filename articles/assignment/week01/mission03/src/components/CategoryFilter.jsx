import { useState } from "react";
import { categoryData } from "../data/mockData";

function CategoryFilter() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const filteredItems = categoryData.filter(
    (item) => item.category === selectedCategory
  );

  const [counts, setCounts] = useState({});

  const [purchased, setPurchased] = useState({});

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
          id="category-select"
          name="category"
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            console.log(e.target.value + " 카테고리 클릭");
          }}
          className="border rounded px-4 py-2 w-60 text-gray-700 focus:outline-none focus:border-blue-400"
        >
        <option value="" disabled hidden className="text-gray-400">
          카테고리 선택
        </option>
        <option value="의류">의류</option>
        <option value="전자기기">전자기기</option>
        <option value="화장품">화장품</option>
        <option value="식품">식품</option>
      </select>
      </form>

      <div className="w-[800px] mb-2 flex justify-end">
        <span className="text-gray-500 font-semibold text-sm underline">
          내 구매 내역
        </span>
      </div>

      <div className="w-[800px] flex flex-col gap-6">
        {filteredItems.map((item) => (
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

export default CategoryFilter;