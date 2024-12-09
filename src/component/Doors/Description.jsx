import React from "react";

import slider1 from "../../assets/door.jpeg";
const DoorsDescription = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-6 p-4 md:p-8 bg-gray-100 rounded-lg shadow-lg">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
           Doors
          </h1>
          <p className="text-gray-600 leading-relaxed">
          Nepwood doors combine natural beauty, durability, and versatility, making them perfect for both interior and exterior use. Built to withstand daily wear, they feature a fine grain for easy finishing or painting. These doors offer exceptional durability and resistance to decay, while their versatile design enhances various styles, from traditional to contemporary. With easy maintenance and personalization options, Nepwood doors elevate the aesthetics and functionality of any residential or commercial space.          </p>
        </div>
        <div className="md:w-1/2">
          <img
            src={slider1}
            alt="Wardrobe shutters"
            className="w-full h-auto rounded-tl-[5rem] object-cover"
          />
        </div>
      </div>
    </>
  );
};

export default DoorsDescription;
