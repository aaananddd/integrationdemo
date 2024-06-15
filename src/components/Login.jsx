// src/components/LoginForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    localStorage.setItem("isLoggedIn", "true");
    navigate("/dashboard");
  };

  return (
    <form
      className="w-[400px] mx-auto p-10 border border-gray-300 rounded-md bg-gray-100"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="mb-10 font-bold text-3xl text-center">Login</h2>
      <div className="mb-6">
        <label
          htmlFor="email"
          className="flex font-mono items-start block mb-2"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          className={`input w-full p-3 border border-gray-300 rounded-md box-border ${
            errors.email ? "input-error" : ""
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
          <span className="error-message text-red-500 text-xs">
            {errors.email.message}
          </span>
        )}
      </div>
      <div className="mb-6">
        <label
          htmlFor="password"
          className="flex items-start font-mono block mb-2"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          className={`input w-full p-3 border border-gray-300 rounded-md box-border ${
            errors.password ? "input-error" : ""
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
          <span className="error-message text-red-500 text-xs">
            {errors.password.message}
          </span>
        )}
      </div>
      <button
        type="submit"
        className="submit-button w-full p-3 bg-blue-600 text-white rounded-md cursor-pointer text-lg"
      >
        Login
      </button>
    </form>
  );
};

export default LoginForm;
