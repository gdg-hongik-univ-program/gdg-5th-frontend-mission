import './index.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import PurchaseButton from './components/PurchaseButton';
import CategoryFilter from './components/CategoryFilter';
import PriceFilter from './components/PriceFilter';
import ProductSort from './components/ProductSort';

function App() {
  const [pageNum, setPageNum] = useState(0);
  return (
    <div className="min-h-screen bg-white relative">
      <Navbar pageNum={pageNum} setPageNum={setPageNum} />
      {pageNum === 0 && <Content/>}
      {pageNum === 1 && <CategoryFilter />}
      {pageNum === 2 && <PriceFilter />}
      {pageNum === 3 && <ProductSort />}
      <PurchaseButton />
    </div>
  );
}

export default App;