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
      <h2 className="mb-10 font-bold text-3xl text-center">Register</h2>
      <div className="mb-15">
        <label
          htmlFor="username"
          className=" flex font-mono items-start block mb-3"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          className={`input w-full p-3 border border-gray-300 rounded-md box-border ${
            errors.email && "input-error"
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
      <div className="mb-15">
        <label
          htmlFor="password"
          className="flex items-start font-mono mt-3 block mb-3"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          className={`input w-full p-3 border mb-3 border-gray-300 rounded-md box-border ${
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
      <div className="mb-15">
        <label
          htmlFor="confirmpassword"
          className="flex items-start font-mono mt-3 block mb-3"
        >
          Confirm Password:
        </label>
        <input
          type="password"
          id="confirmpassword"
          className={`input w-full p-3 border mb-5 border-gray-300 rounded-md box-border ${
            errors.confirmpassword && "input-error"
          }`}
          {...register("confirmpassword", {
            required: "Please re-enter your password",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
        />
        {errors.confirmpassword && (
          <span className="error-message text-red-500 text-xs">
            {errors.confirmpassword.message}
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
