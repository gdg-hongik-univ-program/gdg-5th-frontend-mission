import React from 'react';

function Navbar({ pageNum, setPageNum }) {
  return (
    <nav className="flex items-center py-4 px-50 bg-white shadow-sm">
      <img src="../../public/gdg_logo.svg" alt="GDG Logo" className="h-15 mr-6" />
      <div className="flex-1 flex justify-center gap-6">
        <button
          className={
            (pageNum === 1 ? "text-blue-400 " : "text-gray-700 ") +
            "ml-2 px-4 py-2 rounded min-w-[124px] bg-transparent hover:bg-gray-100 text-xl focus:outline-none border-0"
          }
          onClick={() => setPageNum(1)}
        >
          카테고리 필터링
        </button>
        <button
          className={
            (pageNum === 2 ? "text-blue-400 " : "text-gray-700 ") +
            "ml-2 px-4 py-2 rounded min-w-[124px] bg-transparent hover:bg-gray-100 text-xl focus:outline-none border-0"
          }
          onClick={() => setPageNum(2)}
        >
          가격 범위 필터링
        </button>
        <button
          className={
            (pageNum === 3 ? "text-blue-400 " : "text-gray-700 ") +
            "ml-2 px-4 py-2 rounded min-w-[124px] bg-transparent hover:bg-gray-100 text-xl focus:outline-none border-0"
          }
          onClick={() => setPageNum(3)}
        >
          상품 정렬
        </button>
      </div>
      <button
        className="ml-2 px-4 py-2 rounded bg-white-0 border-blue-400 hover:bg-blue-100 text-blue-400 text-xl ml-auto focus:outline-none border-2"
        onClick={() => console.log('관리자 페이지 클릭')}
      >
      관리자
      </button>
    </nav>
  );
}

export default Navbar;