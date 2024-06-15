// src/components/RegisterForm.jsx
import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);


    localStorage.setItem("registeredEmail",data.email);
    localStorage.setItem("registeredPassword",data.password);
  };

  const password = watch("password");

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <form
        className="w-[400px] p-10 border border-gray-300 rounded-md bg-white"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2 className="mb-10 font-bold text-3xl text-center">Register</h2>
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
        <div className="mb-6">
          <label htmlFor="confirmpassword" className="block font-mono mb-2">
            Confirm Password:
          </label>
          <input
            type="password"
            id="confirmpassword"
            className={`input w-full p-3 border border-gray-300 rounded-md ${
              errors.confirmpassword ? "border-red-500" : ""
            }`}
            {...register("confirmpassword", {
              required: "Please re-enter your password",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          {errors.confirmpassword && (
            <span className="text-red-500 text-xs">
              {errors.confirmpassword.message}
            </span>
          )}
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-md cursor-pointer text-lg"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
