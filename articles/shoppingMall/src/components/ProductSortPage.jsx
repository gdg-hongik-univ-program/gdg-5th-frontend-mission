import React from "react";
import SortFilter from "./SortFilter.jsx";
import ProductItem from "./ProductItem.jsx";
import "./ProductSortPage.css";

const ProductSortPage = () => {
  return (
    <main className="sort-page-content">
      <SortFilter />
      <div className="product-list-section">
        <div className="purchase-header">
          <h2 className="purchase-title">내 구매 내역</h2>
        </div>
        <ProductItem name="가나" price={200} stock={13} />
        <ProductItem name="나다다" price={200} stock={13} />
        <ProductItem name="다라" price={100} stock={10} />{" "}
      </div>
    </main>
  );
};

export default ProductSortPage;
