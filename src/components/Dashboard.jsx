import React from "react";
import AddItem from "./AddItem";
import ListItems from "./ListItems";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full md:w-3/4 lg:w-2/3 bg-gray-100 p-4 rounded-lg shadow-lg my-6">
        <div className="bg-white rounded-lg p-6">
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
                Sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua.
              </p>
            </div>

            {/* Third card */}
            <div className="bg-slate-200 rounded-lg p-4">
              <h3 className="text-lg font-semibold mb-2">Card 3</h3>
              <p className="text-gray-700">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
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
        </div>
      </div>
      <div className="flex flex-row p-10 space-x-8">

      <div className=" w-full  md:w-3/4 lg:w-2/3 bg-gray-100 p-4 rounded-lg shadow-lg my-6">
        <AddItem />
      </div>

      <div className="w-full md:w-3/4 lg:w-2/3 bg-gray-100 p-4 rounded-lg shadow-lg my-6">
        <ListItems />
      </div>
      </div>

    </div>
  );
};

export default Dashboard;
