import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const AddItem = ({ addItem }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // Add item API
  const AddItemAPI = async (itemDetails) => {
    try {
      const response = await axios.post(
        "http://localhost:3000/items",
        itemDetails,
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      console.log(response.data);
      addItem(response.data); // Add the created item to the dashboard state
      Swal.fire("Item Created");
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const onSubmit = (data) => {
    AddItemAPI(data);
  };

  return (
    <div className="bg-slate-200 rounded-lg p-6">
      <h2 className="text-2xl font-bold mb-4">Create Item</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Item Name
          </label>
          <input
            type="text"
            id="itemName"
            name="name"
            {...register("name", { required: "Item name is required" })}
            className="w-full px-3 py-2 border rounded-lg text-gray-700 focus:outline-none focus:shadow-outline"
            placeholder="Enter item name"
          />
          {errors.name && (
            <p className="text-red-500 text-xs italic">
              {errors.name.message}
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
  );
};

export default AddItem;
