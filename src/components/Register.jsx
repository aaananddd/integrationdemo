// src/components/RegisterForm.js
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
// import "./Header.css";
import './index.css';

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  const validatePassword = (value) => {
    return value === getValues("password") || "Passwords do not match";
  };

  return (
    <form className="register-form" onSubmit={handleSubmit(onSubmit)}>
      <h2>Register</h2>
      <div className="form-group">
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          className={`input ${errors.username && "input-error"}`}
          {...register("username", {
            required: "Please enter your username",
            maxLength: {
              value: 20,
              message: "Username cannot exceed 20 characters",
            },
          })}
        />
        {errors.username && (
          <span className="error-message">{errors.username.message}</span>
        )}
      </div>
      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className={`input ${errors.password && "input-error"}`}
          {...register("password", {
            required: "Please enter your password",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
        />
        {errors.password && (
          <span className="error-message">{errors.password.message}</span>
        )}
      </div>
      <button type="submit" className="submit-button">
        Register
      </button>
      <div className="links">
        <p>
          Have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
