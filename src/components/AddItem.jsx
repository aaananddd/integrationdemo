import React from "react";
import { useForm } from "react-hook-form";

const AddItem = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="w-2/3  ml-28 mt-6 bg-slate-200 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Create Item</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="itemName"
          >
            Item Name
          </label>
          <input
            type="text"
            id="itemName"
            name="itemName"
            {...register("itemName", { required: "Item name is required" })}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:shadow-outline"
            placeholder="Enter item name"
          />
          {errors.itemName && (
            <p className="text-red-500 text-xs italic">
              {errors.itemName.message}
            </p>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            id="description"
            name="description"
            {...register("description", {
              required: "Description is required",
            })}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:shadow-outline"
            placeholder="Enter description"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-xs italic">
              {errors.description.message}
            </p>
          )}
        </div>
        <div className="flex justify-end">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            Create
          </button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddItem;
