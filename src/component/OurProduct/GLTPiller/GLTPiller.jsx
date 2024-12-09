import React from "react";
import Beams from "../../../assets/Beams.webp";

const GLTPiller = () => {
  return (
    <div className=" px-4 py-8 ">
      <div className="relative flex flex-col md:flex-row justify-between gap-6 md:gap-12 lg:gap-16 px-4 lg:px-8">
        {/* Cross-laminated timber section */}
        <div className="flex flex-col md:flex-row group w-full md:w-[48%] lg:w-[45%]">
          <div className="flex flex-col bg-gray-400 p-6 shadow-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Cross laminated timber</h2>
            <p className="text-black text-justify mb-6">
              Cross-laminated timber is a solid, multi-layered timber
              construction material. Thanks to its excellent physical and
              mechanical properties, this laminar timber material has both
              exceptional thermal insulation...
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition duration-200">
              All about cross-laminated timber
            </button>
          </div>
          <img
            src={Beams}
            alt="Cross-laminated timber"
            className="transition-transform duration-300 transform group-hover:scale-105 w-full md:w-[50%] lg:w-[40%] object-cover mt-4 md:mt-0"
          />
        </div>

        {/* Glued laminated timber section */}
        <div className="flex flex-col md:flex-row group w-full md:w-[48%] lg:w-[45%]">
          <div className="flex flex-col bg-gray-400 p-6 shadow-lg w-full">
            <h2 className="text-2xl font-bold mb-4">Glued laminated timber</h2>
            <p className="text-black text-justify mb-6">
              High-quality glued laminated timber is characterized by high
              load-carrying capacity, dimensional stability.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition duration-200">
              All about glued laminated timber
            </button>
          </div>
          <img
            src={Beams}
            alt="Glued laminated timber"
            className="transition-transform duration-300 transform group-hover:scale-105 w-full md:w-[50%] lg:w-[40%] object-cover mt-4 md:mt-0"
          />
        </div>
      </div>
    </div>
  );
};

export default GLTPiller;
