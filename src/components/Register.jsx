import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form
      className="w-[400px] mx-auto p-10 border border-gray-300 rounded-md bg-gray-100"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h2 className="mb-20 font-bold text-3xl text-center">Register</h2>
      <div className="mb-15">
        <label htmlFor="username" className=" flex font-mono items-start block mb-5">
          Username:
        </label>
        <input
          type="text"
          id="username"
          className={`input w-full p-3 border border-gray-300 rounded-md box-border ${
            errors.username && "input-error"
          }`}
          {...register("username", {
            required: "Please enter your username",
            maxLength: {
              value: 20,
              message: "Username cannot exceed 20 characters",
            },
          })}
        />
        {errors.username && (
          <span className="error-message text-red-500 text-xs">
            {errors.username.message}
          </span>
        )}
      </div>
      <div className="mb-15">
        <label htmlFor="password" className="flex items-start font-mono mt-5 block mb-5">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className={`input w-full p-3 border mb-5 border-gray-300 rounded-md box-border ${
            errors.password && "input-error"
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
        Register
      </button>
    </form>
  );
};

export default RegisterForm;
