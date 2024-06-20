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
      {items.map((item) => (
        <div>
          <p>{item.name}</p>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default ListItems;
