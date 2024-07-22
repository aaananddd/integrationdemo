import axios from "axios";
import React, { useEffect } from "react";

const ListItems = ({ items, setItems }) => {
  const getItemList = async () => {
    try {
      const { data } = await axios.get("http://localhost:3000/items", {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      });
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
        <div key={index} className="bg-slate-200 rounded-lg">
          <div className="bg-blue-500 text-white rounded-t-lg p-2">
            <h3 className="text-md font-semibold">{item.name}</h3>
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
