// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import RegisterForm from "./components/Register";
import LoginForm from "./components/Login";
import Dashboard from "./components/Dashboard";
import Header from "./components/header";
import About from "./components/About";
import AddItem from "./components/AddItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Header />
        <Outlet />
      </div>
    ),
    children: [
      {
        path: "register",
        element: <RegisterForm />,
      },
      {
        path: "login",
        element: <LoginForm />,
      },
      {
        path: "dashboard",
        element: <Dashboard />,
      },
      {
        path: "items",
        element: <AddItem />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
