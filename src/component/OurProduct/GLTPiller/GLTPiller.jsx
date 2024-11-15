import React from "react";
import Beams from "../../../assets/Beams.webp";

const GLTPiller = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 lg:ml-4 mr-4">
      <div className=" w-full flex gap-2">
        <div className="flex group w-1/2">
          <div className="flex flex-col bg-gray-400 p-6 shadow-lg">
            <h2 className="text-2xl font-bold  mb-4">Cross laminated timber</h2>
            <p className="text-black text-justify mb-6">
              Cross-laminated timber is a solid, multi-layered timber
              construction material. Thanks to its excellent physical and
              mechanical properties, this laminar timber material has both
              exceptional thermal insulation...
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition duration-200">
              all about cross-laminated timber
            </button>
          </div>

          <img
            src={Beams}
            alt="Cross-laminated timber"
            className="transition-transform duration-300 transform group-hover:scale-105"
          />
        </div>

        <div className="flex group w-1/2">
          <div className="flex flex-col bg-gray-400 p-6 shadow-lg">
            <h2 className="text-2xl font-bold  mb-4">Glued laminated timber</h2>
            <p className="text-black text-justify mb-6">
            High-quality glued laminated timber is characterized by high
            load-carrying capacity, dimensional stability.
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded shadow hover:bg-green-700 transition duration-200">
              all about cross-laminated timber
            </button>
          </div>

          <img
            src={Beams}
            alt="Cross-laminated timber"
            className="transition-transform duration-300 transform group-hover:scale-105"
          />
        </div>

      </div>
    </div>
  );
};

export default GLTPiller;
