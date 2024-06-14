// Header.js
import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/register" relative="register">
              <button className="nav-button">Register</button>
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/login" relative="login">
              <button className="nav-button">Login</button>
            </Link>
          </li>
          <Link to="/about" relative="about">
            <button className="nav-button">About</button>
          </Link>
          <li className="nav-item">
            <Link to="/dashboard" relative="dashboard">
              <button className="nav-button">Dashboard</button>
            </Link>
          </li>
          <li className="nav-item">
            <button className="nav-button" onClick={() => localStorage.clear()}>
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
