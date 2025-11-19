import React from 'react';

function PurchaseButton() {
  return (
    <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 w-[800px] text-center z-10">
      <button
        className="w-full bg-white-0 border-blue-400 border-2 text-blue-400 rounded-lg px-10 py-4 text-xl shadow hover:bg-blue-100 focus:outline-none transition"
      >
        장바구니 구매하기
      </button>
    </div>
  );
}

export default PurchaseButton;