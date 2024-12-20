import React from "react";
import FingerJointed from "../../assets/door.jpeg";
import { Link } from "react-router-dom";

const HeroImage = () => {
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
              Doors
            </h2>
            <p className="text-md sm:text-lg md:text-xl text-gray-700 mb-6">
            Nepwood doors combine natural beauty, durability, and versatility, making them perfect for both interior and exterior use. Built to withstand daily wear, they feature a fine grain for easy finishing or painting. These doors offer exceptional durability and resistance to decay, while their versatile design enhances various styles, from traditional to contemporary. With easy maintenance and personalization options, Nepwood doors elevate the aesthetics and functionality of any residential or commercial space.
            </p>
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

export default HeroImage;
