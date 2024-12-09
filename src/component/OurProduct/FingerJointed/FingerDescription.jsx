import React from "react";
import slider1 from "../../../assets/Finger.jpeg";

const FingerDescription = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-6 p-4 md:p-8 bg-gray-100 rounded-lg shadow-lg">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
            Finger Jointed Board
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Versatile boards that are ideal for furniture, wardrobe shutters,
            and tabletops, Renowned for their unique look and increased
            screw-holding capacity, these boards facilitate quick project
            completion and require minimal maintenance. Furniture crafted from
            FJ boards can retain its new appearance for years or be easily
            refinished in a different color to suit your taste.
          </p>
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

export default FingerDescription;
