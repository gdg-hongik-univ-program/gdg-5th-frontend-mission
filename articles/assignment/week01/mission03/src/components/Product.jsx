import { useState } from 'react';

const Product = ({ product, addToCart }) => {
    const { itemName, price, quantity } = product;

    const [count, setCount] = useState(0);
    const [isAdded, setIsAdded] = useState(false);


    const handleAddClick = () => {
        addToCart(product, count);
        setIsAdded(true);
    }

    const handleCount = (n) => {
        setCount((prev) => {
            const next = prev + n;
            if (next < 0) return 0;

            if (next > quantity) {
                alert(`재고${quantity}보다 많이 담을 수 없습니다.`);
                return quantity;
            }
            return next;
        });
    };


    return (
        <div className="w-[652px] mx-auto mt-4">
            <div className="w-[652px] mx-auto mt-12">
                <div className="border border-gray-300 rounded-lg p-6">
                    <div className="flex items-start justify-between">
                        {/* 왼쪽: 상품명 / 가격·재고 */}
                        <div className="flex-1 pr-6" >
                            <h3 className="text-lg font-semibold mb-4">{product.itemName}</h3>

                            <div className="flex items-center gap-4 text-sm text-gray-700">
                                <span className="text-base font-medium">{price.toLocaleString()} 원</span>
                                <span className="text-xs text-gray-400">남은 수량: {quantity} 개</span>
                            </div>
                        </div>

                        {/* 오른쪽: 수량 + 버튼 영역 */}
                        <div className="flex items-center gap-4">
                            <div className="flex items-center gap-4">
                                <button className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-[18px] text-gray-700 hover:bg-gray-100 transition"
                                    onClick={() => handleCount(-1)}
                                >-</button>
                                <span className="text-[16px] text-gray-700"> {count} </span>
                                <button
                                    className="w-10 h-10 flex items-center justify-center rounded-lg border border-gray-300 text-[18px] text-gray-700 hover:bg-gray-100 transition"
                                    onClick={() => handleCount(1)}
                                >+</button>
                            </div>
                            <button type='button'
                                disabled={isAdded}
                                onClick={() => { handleAddClick(); console.log(`${itemName} ${count}`); }}
                                className={`
                                    h-[43px] min-w-[120px] px-5 rounded-lg bg-[#008CFF] text-white font-medium
                                    ${isAdded
                                        ? "bg-gray-300 cursor-not-allowed"
                                        : "bg-[#008CFF] hover:opacity-90 cursor-pointer"
                                    }
                                    `}
                            >
                                장바구니
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product;