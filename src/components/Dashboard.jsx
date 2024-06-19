import React from "react";
import { useForm } from "react-hook-form";

const Dashboard = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-3/4 bg-white shadow-lg rounded-lg p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* First card */}
          <div className="bg-slate-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Card 1</h3>
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>

          {/* Second card */}
          <div className="bg-slate-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Card 2</h3>
            <p className="text-gray-700">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Third card */}
          <div className="bg-slate-200 rounded-lg p-4">
            <h3 className="text-lg font-semibold mb-2">Card 3</h3>
            <p className="text-gray-700">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>

        {/* Large card below */}
        <div className="mt-6 bg-slate-200 rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Main Content</h2>
          <p className="text-gray-700">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur.
          </p>
          <div className="flex justify-end mt-4">
            <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
              Action
            </button>
          </div>
        </div>

        {/* Form for creating an item */}
        <div className="mt-6 bg-slate-200 rounded-lg p-6">
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
    </div>
  );
};

export default Dashboard;
