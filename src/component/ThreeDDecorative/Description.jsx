import React from "react";
import slider1 from "../../assets/3d-rendering-classic-interior-2-1536x768.jpg";

const ThreeDDescription = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-6 p-4 md:p-8 bg-gray-100 rounded-lg shadow-lg">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Decorative 3D Panels / Gladding
          </h1>
          <p className="text-gray-600 leading-relaxed">
          These versatile, minimalist 3D decorative panels are perfect for walls, ceilings, wardrobe shutters, doors, cabinets, reception desks, and furniture. Suitable for both modern and traditional interiors, they offer easy installation for living rooms, offices, and commercial spaces.

In addition to their aesthetic appeal, these panels provide acoustic and thermal insulation, making them both decorative and functional. Our 3D panels feature the latest global design trends in natural wood, which can be repaired and refurbished to maintain a fresh look for years. Unlike artificial materials like WPC, PVC, paper, and plastic composites, they can be stained to match your taste over time.          </p>
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

export default ThreeDDescription;
