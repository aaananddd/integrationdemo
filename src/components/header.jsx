// Header.js
import React from "react";
import "./Header.css"; 

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <button className="nav-button">Register</button>
          </li>
          <li className="nav-item">
            <button className="nav-button">Login</button>
          </li>
          <li className="nav-item">
            <button className="nav-button">Dashboard</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
