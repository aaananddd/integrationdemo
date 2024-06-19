// src/components/LoginForm.jsx
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  //Login API
  const LoginAPI = async (email, password) => {
    const userData = {
      username: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost:3000/login",
        userData
      );
      console.log(response.data);

      //Storing the token in localstorage.
      const {token} = response.data;
      localStorage.setItem("token", token);

      Swal.fire("Login Successfull!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error:", error.message);
      Swal.fire("Login Failed.");
    }
  };

  const onSubmit = (data) => {
    LoginAPI(data.email, data.password);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="w-[400px] p-10 border border-gray-300 rounded-md bg-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="mb-10 font-bold text-3xl text-center">Login</h2>
        <div className="mb-6">
          <label htmlFor="email" className="block font-mono mb-2">
            Email:
          </label>
          <input
            type="email"
            id="email"
            className={`input w-full p-3 border border-gray-300 rounded-md ${
              errors.email ? "border-red-500" : ""
            }`}
            {...register("email", {
              required: "Please enter your email",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Please enter a valid email address",
              },
            })}
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block font-mono mb-2">
            Password:
          </label>
          <input
            type="password"
            id="password"
            className={`input w-full p-3 border border-gray-300 rounded-md ${
              errors.password ? "border-red-500" : ""
            }`}
            {...register("password", {
              required: "Please enter your password",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-md cursor-pointer text-lg"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
