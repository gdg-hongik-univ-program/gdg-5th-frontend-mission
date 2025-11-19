import React from "react";
import logo from "../assets/gdg-logo.png";
import Navbar from "./Navbar.jsx";
import "./Header.css";

const Header = ({ onNavClick }) => {
  const handleAdminClick = () => {
    console.log("관리자 페이지 클릭");
  };

  return (
    <header className="header">
      <div className="header-left">
        <img src={logo} alt="GDG Logo" className="header-logo" />
        <Navbar onNavClick={onNavClick} />
      </div>
      <div className="header-right">
        <button className="admin-button" onClick={handleAdminClick}>
          관리자
        </button>
      </div>
    </header>
  );
};

export default Header;
