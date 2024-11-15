import React from "react";
import FileImage1 from "../../assets/WoodWall.jpeg";
import FileImage2 from "../../assets/abs2.png";
import { Link } from "react-router-dom";

const Brochures = () => {
  return (
    <div className="flex flex-col items-center text-center mx-4 lg:mx-16 py-10">
      <h1 className="text-black font-semibold text-4xl md:text-5xl mb-8 underline underline-offset-8 decoration-[#3d8e03]">
        Brochures
      </h1>
      <div className="flex flex-col md:flex-row gap-6 md:gap-8">
        {/* Brochure 1 */}
        <div className="relative group w-full md:w-[500px] cursor-pointer">
          <Link to="">
            <img
              src={FileImage1}
              alt="Brochure 1"
              className="w-full h-[300px] object-cover border border-green-300 rounded-tr-[4rem] rounded-tl-[4rem] rounded-br-[4rem]"
            />
          </Link>
          <div className="absolute inset-0  group-hover:opacity-60 rounded-[2rem] transition-opacity duration-300 ease-in-out"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <span className="text-white text-lg font-medium mb-2 transform transition-transform duration-300 ease-in-out translate-y-0 group-hover:translate-y-[-50%]">
              Wood Product
            </span>
            <span className="text-white text-lg font-medium transform transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-[-50%]">
              Download Brochures
            </span>
          </div>
        </div>

        {/* Brochure 2 */}
        <div className="relative group w-full md:w-[500px] cursor-pointer">
          <Link to="/">
            <img
              src={FileImage2}
              alt="Brochure 2"
              className="w-full h-[300px] object-cover border border-green-300 rounded-tr-[4rem] rounded-tl-[4rem] rounded-br-[4rem]   "
            />
          </Link>
          <div className="absolute inset-0  group-hover:opacity-60 rounded-[2rem] transition-opacity duration-300 ease-in-out"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
            <span className="text-white text-lg font-medium mb-2 transform transition-transform duration-300 ease-in-out translate-y-0 group-hover:translate-y-[-50%]">
              Wood Product
            </span>
            <span className="text-white text-lg font-medium transform transition-transform duration-300 ease-in-out translate-y-full group-hover:translate-y-[-50%]">
              Download Brochures
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brochures;
