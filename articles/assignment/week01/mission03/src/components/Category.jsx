import { useState } from "react";
import Product from "./Product";
import { categoryData } from "../data/mockData.js";

const Category = ({ addToCart }) => {
    const [category, setCategory] = useState("")
    const [products, setProducts] = useState(categoryData);

    const handleCateChange = (e) => {
        const newVal = e.target.value //e.target.value에서 선택된 새 값을 가져와야함
        setCategory(newVal)
        console.log(`${newVal} 카테고리 클릭`);
    }

    return (
        <div>
            <div className="top-[60px] w-full flex justify-center h-full">
                <div className="w-[652px]">
                    <div className="flex justify-center items-center gap-2 mb-8 py-12">
                        <div className="space-y-4">
                            <select id="카테고리" name="카테고리"
                                className="w-64 px-4 py-3 border border-gray-300 bg-gray-100 rounded-md text-sm
                     focus:ring-gray-500"
                                onChange={handleCateChange}
                                value={category} // select의 현 값을 React state와 연결 (?)
                            >
                                <option value="" default disabled hidden > 카테고리 선택</option>
                                <option value="의류"> 의류 </option>
                                <option value="전자기기"> 전자기기 </option>
                                <option value="화장품"> 화장품 </option>
                                <option value="식품"> 식품 </option>
                            </select>
                            {products.map((item) => (
                                <Product key={item.id} product={item} addToCart={addToCart} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Category;