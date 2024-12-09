import React from "react";

import FingerJointed from "../../assets/3d-rendering-classic-interior-2-1536x768.jpg";
import { Link } from "react-router-dom";

const  DecorativeHeroImage = () => {
  return (
    <section className="relative  flex-col md:flex-row justify-between px-4 lg:px-8">
      {/* Image Section */}
      <div className="relative w-full">
        <img
          src={FingerJointed}
          alt="Finger Jointed Board"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] object-cover"
        />

        {/* Overlay Section */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center max-w-2xl px-6 py-8 bg-white bg-opacity-80 rounded-lg shadow-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Decorative 3D Panels / Gladding
            </h2>
            <p className="text-md sm:text-lg md:text-xl text-gray-700 mb-6">
            These versatile, minimalist 3D decorative panels are perfect for walls, ceilings, wardrobe shutters, doors, cabinets, reception desks, and furniture. Suitable for both modern and traditional interiors, they offer easy installation for living rooms, offices, and commercial spaces.

In addition to their aesthetic appeal, these panels provide acoustic and thermal insulation, making them both decorative and functional. Our 3D panels feature the latest global design trends in natural wood, which can be repaired and refurbished to maintain a fresh look for years. Unlike artificial materials like WPC, PVC, paper, and plastic composites, they can be stained to match your taste over time.       </p>
            <button
              type="button"
              className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300"
            >
              <Link to="/contact-us">Connect with us</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DecorativeHeroImage;
