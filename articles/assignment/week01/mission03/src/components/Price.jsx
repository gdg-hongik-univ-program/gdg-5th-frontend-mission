import { useEffect, useState } from "react";
import Product from "./Product";
import { priceSelectedData } from "../data/mockData.js";

const Price = ({ addToCart }) => {
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    
    const [products, setProducts] = useState(priceSelectedData);
    
    const [defaultProducts, setDefaultProducts] = useState(priceSelectedData.items); // 전체 상품 목록을 저장
    const [filteredProducts, setFilteredProducts] = useState(priceSelectedData.items); // 필터링된 상품 목록을 저장

    useEffect (() => {
        const min = Number(minPrice) || 0;
        const max = Number(maxPrice) || Infinity; 

        const newFilteredList = defaultProducts.filter(item => {
            return item.price >= min && item.price <= max;
        });
        setFilteredProducts(newFilteredList); // 필터링된 상품 목록으로 재 렌더링
    }, [minPrice, maxPrice]);

    return (
        <div>
            <div className="top-[60px] w-full flex justify-center h-full">
                <div className="w-[652px]">
                    <div className="flex justify-center items-center gap-2 mb-8 py-12">
                        <input
                            type="number"
                            placeholder="0"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            className="h-[43px] w-[242px] rounded-lg border border-[#8F8F8F] px-4 text-center"
                        />
                        <input
                            type="number"
                            placeholder="0"
                             value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            className="h-[43px] w-[242px] rounded-lg border border-[#8F8F8F] px-4 text-center"
                        />
                        <button
                            className="h-[43px] w-[150px] items-center-safe rounded-lg bg-[#008CFF] px-4 text-white hover:opacity-90 text-center"
                        >검색</button>
                    </div>
                    <div className="space-y-4">
                        {filteredProducts.map((item) => (
                            <Product key={item.id} product={item} addToCart={addToCart} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
                )
}
                export default Price;