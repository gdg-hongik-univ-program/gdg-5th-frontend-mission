import logoImg from "../assets/gdg_logo.svg";

const Header = ({setPage, page}) => {
  return (
    <header className="w-full border-b border-[#D2D2D2] bg-white">
      <div className="container mx-auto p-4 flex items-center justify-between">
        
        {}
        <div className="cursor-pointer" onClick={() => setPage("home")}>
          <img src={logoImg} alt="logo" className="w-[120px]" /> 
        </div>

        <div className="flex flex-row gap-[30px] text-[#848F92]">
          <div
            className={`cursor-pointer transition-colors hover:text-[#008CFF]
              ${page === 'category' ? 'text-[#008CFF]' : 'text-[#848F92]'}`} 
            onClick={() => setPage('category')}
          >
            카테고리 필터링
          </div>
          <div
            className={`cursor-pointer transition-colors hover:text-[#008CFF]
              ${page === 'price' ? 'text-[#008CFF]' : 'text-[#848F92]'}`} 
            onClick={() => setPage("price")}
          >
            가격 범위 필터링
          </div>
          <div
            className={`cursor-pointer transition-colors hover:text-[#008CFF]
              ${page === 'sort' ? 'text-[#008CFF]' : 'text-[#848F92]'}`} 
            onClick={() => setPage("sort")}
          >
            상품 정렬
          </div>
        </div>

        <div>
          <button
            className="rounded-[8px] border border-blue-400 bg-white-500 p-[6px] text-[16px] text-blue-500 hover:cursor-pointer hover:bg-blue-100"
            onClick={() => console.log("관리자 페이지 클릭")}
          >
            관리자
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;