import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "../components/Register";
import LoginForm from "../components/Login";
import Dashboard from "../components/Dashboard";

export default function Root() {
  return (
    <>
      <nav>
        <ul>
          <li>
            <a href="/register">Register</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/dashboard">Dashboard</a>
          </li>
        </ul>
      </nav>
    </>
  );
}
