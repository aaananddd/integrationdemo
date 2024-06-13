// App.js
import React from "react";
import Header from "./components/header";
import "./App.css";
import RegisterForm from "./components/Register";
import LoginForm from "./components/Login";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="navbar">
      <Header/>
      <div className="grid grid-cols-2 mt-12">
        <div>
        <RegisterForm />
        </div>
        <div>
          <LoginForm />
        </div>
        <div>
          <Dashboard />
        </div>
      </div>
      
    </div>
  );
};

export default App;
