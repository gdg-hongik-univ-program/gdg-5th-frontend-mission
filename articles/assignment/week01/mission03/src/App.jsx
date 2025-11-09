import './index.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Content from './components/Content';
import PurchaseButton from './components/PurchaseButton';

function App() {
  const [consoleText, setConsoleText] = useState('검색 결과가 없습니다.');

  const handleNavbarClick = (text) => setConsoleText(text);

  const handleSearch = (query) => {
    if (query === '원피스') setConsoleText('원피스');
    else setConsoleText('검색 결과가 없습니다.');
  };

  return (
    <div className="min-h-screen bg-white relative">
      <Navbar onClick={handleNavbarClick} />
      <Content onSearch={handleSearch} consoleText={consoleText} />
      <PurchaseButton />
    </div>
  );
}

export default App;