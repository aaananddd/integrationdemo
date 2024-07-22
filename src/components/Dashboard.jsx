import React, { useState } from "react";
import AddItem from "./AddItem";
import ListItems from "./ListItems";

const Dashboard = () => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    setItems([...items, item]);
  };

  const deleteItem = (itemId) => {
    setItems(items.filter(item => item.id !== itemId));
  };

  return (
    <div className="flex flex-col items-center p-4">
      {/* Create Item Form */}
      <div className="w-full md:w-3/4 lg:w-2/3 my-6">
        <AddItem addItem={addItem} />
      </div>

      {/* List Items */}
      <div className="w-full md:w-3/4 lg:w-2/3 my-6">
        <ListItems items={items} setItems={setItems} deleteItem={deleteItem} />
      </div>
    </div>
  );
};

export default Dashboard;
