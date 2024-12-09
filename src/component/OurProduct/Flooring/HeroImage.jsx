import React from "react";
import FlooringImage from "../../../assets/Flooring.avif";
import { Link } from "react-router-dom";

const FlooringHero = () => {
  return (
    <>
      <section className="relative  flex-col md:flex-row justify-between px-4 lg:px-8">
        {/* Image Section */}
        <div className="relative">
          <img
            src={FlooringImage}
            alt="Flooring"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover"
          />
          {/* Overlay Content */}
          {/* <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-relaxed px-6 py-4">
              Contact Us
            </h1>
          </div> */}
        </div>

        {/* Overlay Section */}
        <div className="absolute space-y-8 top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-6 sm:px-8 md:px-12 lg:px-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white bg-black bg-opacity-60 px-8 py-6 sm:px-12 sm:py-8 rounded-xl shadow-lg">
            Portfolio
          </h2>
          <button
            type="submit"
            className="bg-[#3d8e03] text-white px-10 py-3 sm:px-12 sm:py-4 border-2 shadow-xl rounded-full hover:bg-green-700 transition duration-300 w-full sm:w-auto"
          >
            <Link to="/contact-us">Connect with us</Link>
          </button>
        </div>
      </section>
    </>
  );
};

export default FlooringHero;
