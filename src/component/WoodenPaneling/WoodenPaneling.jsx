import React from "react";
import WoodWall from "../../assets/WoodWall.jpeg";
import { Link } from "react-router-dom";

const WoodenPaneling = () => {
  return (
    <>
      <section className="relative flex flex-col items-center justify-center px-4 lg:px-8  ">
        {/* Hero Image Section */}
        <div className="relative mb-16 w-full max-w-7xl mx-auto">
          <img
            src={WoodWall}
            alt="Wooden Paneling"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] object-cover  shadow-lg"
          />
          {/* Overlay Text Section */}
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-4">
            <div className="bg-black bg-opacity-60 px-6 py-8 rounded-2xl shadow-xl max-w-3xl">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
                Revitalize Your Interiors with the Timeless Charm of Wooden Paneling
              </h2>
              <p className="text-white text-lg sm:text-xl mb-6 max-w-2xl mx-auto">
                Experience the exquisite beauty of Nep Wood’s Wooden Paneling, a versatile design solution with multiple layers of solid wood panels. The top layer promises enduring wear resistance and unmatched longevity.
              </p>
              <Link to="/contact-us">
                <button className="bg-[#3d8e03] text-white py-3 px-8 rounded-full hover:bg-[#2f6b02] transition duration-300 transform hover:scale-105">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WoodenPaneling;
