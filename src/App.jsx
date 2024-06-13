// App.js
import React from "react";
import Header from "./components/header";
import "./App.css";
import RegisterForm from "./components/Register";

const App = () => {
  return (
    <div className="navbar">
      <Header />
      <RegisterForm />
    </div>
  );
};

export default App;
