import React, { useState } from "react";
import AddItem from "./AddItem";
import ListItems from "./ListItems";

const Dashboard = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  return (
    <div className="flex flex-col items-center p-4 w-full ">
      {/* Create Item Form */}
      <div className="w-full md:w-3/4 lg:w-2/3 my-6">
        <AddItem addItem={addItem} />
      </div>

      {/* List Items */}
      <div className="w-full md:w-3/4 lg:w-2/3 my-6">
        <ListItems items={items} setItems={setItems} />
      </div>
    </div>
  );
};

export default Dashboard;
