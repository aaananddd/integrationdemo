// src/components/Header.jsx
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <header className="header">
      <nav className="nav">
        <ul className="nav-list flex space-x-4">
          {!isLoggedIn ? (
            <>
              <li className="nav-item">
                <Link to="/register">
                  <button className="nav-button">Register</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/login">
                  <button className="nav-button">Login</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about">
                  <button className="nav-button">About</button>
                </Link>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <Link to="/about">
                  <button className="nav-button">About</button>
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dashboard">
                  <button className="nav-button">Dashboard</button>
                </Link>
              </li>
              <li className="nav-item">
                <button className="nav-button" onClick={handleLogout}>
                  Logout
                </button>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
