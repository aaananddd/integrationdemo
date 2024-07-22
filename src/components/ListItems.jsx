import React, { useEffect, useState } from "react";
import { FaTrash } from 'react-icons/fa';

const ListItems = () => {
  const [items, setItems] = useState([]);

  const getItemList = async () => {
    try {
      const response = await fetch("http://localhost:3000/items", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
      const data = await response.json();
      setItems(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching items:", error.message);
    }
  };

  useEffect(() => {
    getItemList();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {items.map((item, index) => (
        <div key={index} className="bg-slate-200 rounded-lg relative">
          <div className="bg-blue-500 text-white rounded-t-lg p-2 flex justify-between items-center">
            <h3 className="text-md font-semibold">{item.name}</h3>
            <button className="text-white hover:text-gray-300">
              <FaTrash />
            </button>
          </div>
          <div className="p-4">
            <p className="text-black">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListItems;
