import axios from "axios";
import React, { useEffect, useState } from "react";

const ListItems = () => {
  const [items, setItems] = useState([]);

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
    <div className="">
       <h2 className="text-2xl justify-center flex font-medium mb-6">Items</h2>
      {items.map((item) => (
        <div className="mb-4">
          <p>
          <span className="font-bold">{item.name}</span>  - <span className="font-mono">{item.description}</span> 
          </p>
        </div>
      ))}
    </div>
  );
};

export default ListItems;
