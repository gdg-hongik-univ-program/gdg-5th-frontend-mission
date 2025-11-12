import logoImg from "../assets/gdg_logo.svg";

const Header = () => {
  return (
    <header className="w-full border-b border-[#D2D2D2] bg-white">
      <div className="container mx-auto p-4 flex items-center justify-between">
        
        {}
        <div>
          <img src={logoImg} alt="logo" className="w-[120px]" /> 
        </div>

        <div className="flex flex-row gap-[22px] font-semibold text-[#848F92]">
          <div
            className="cursor-pointer"
            onClick={() => console.log("카테고리 필터링")}
          >
            카테고리 필터링
          </div>
          <div
            className="cursor-pointer"
            onClick={() => console.log("가격 범위 필터링")}
          >
            가격 범위 필터링
          </div>
          <div
            className="cursor-pointer"
            onClick={() => console.log("상품 정렬")}
          >
            상품 정렬
          </div>
        </div>

        <div>
          <button
            className="rounded-[8px] bg-blue-500 p-[6px] text-[16px] text-white hover:cursor-pointer hover:bg-blue-600"
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