import React from "react";

const About = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full sm:w-3/4 lg:w-2/3 xl:w-1/2 bg-white shadow-lg rounded-md p-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-4">
          About Us
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed blandit,
          nisl vel dictum eleifend, urna dui feugiat dolor, ut lacinia ipsum
          metus nec magna. Nulla facilisi. Mauris auctor efficitur est, eget
          fringilla urna gravida et. Nulla facilisi. Aliquam erat volutpat.
          Suspendisse potenti. Nam dapibus auctor lorem, ac bibendum urna
          efficitur nec. Pellentesque habitant morbi tristique senectus et netus
          et malesuada fames ac turpis egestas.
        </p>
        <div className="flex justify-end mt-4">
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
