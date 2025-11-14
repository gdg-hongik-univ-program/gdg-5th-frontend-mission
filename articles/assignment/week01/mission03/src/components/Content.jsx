import React, { useState } from 'react';

function Content() {
  const [input, setInput] = useState('');

  const handleSearch = () => {
    console.log(input);
  }

  return (
    <main className="flex flex-col items-center mt-20">
      <div className="w-full flex justify-center items-center mb-6">
        <input
          type="text"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="상품 검색..."
          className="pl-6 border border-gray-400 rounded p-2 w-2/5 focus:outline-none"
        />
        <button
          onClick={handleSearch}
          className="ml-3 px-4 py-2 w-32 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none"
        >
        검색
        </button>
      </div>
      <div className="flex flex-col items-center mt-20">
        <img
          src="../../public/gdg_logo.svg"
          alt="GDG Logo"
          className="h-80 opacity-20 mx-auto"
        />
        <p className="mt-4 text-xl text-gray-500">검색 결과가 없습니다.</p>
      </div>
    </main>
  );
}

export default Content;