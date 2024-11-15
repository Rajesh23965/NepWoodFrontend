import React from "react";
import About from "../../assets/AboutUs.jpeg";

import { Link } from "react-router-dom";
import OurHistory from "./OurHistory";

const AboutUs = () => {
  return (
    <>
      <section className="relative flex-col md:flex-row justify-between mr-8 lg:ml-8 ml-4">
       

        <div className="relative mb-16 -mt-32 slider-container mx-auto max-w-full">
          <img
            src={About}
            alt="slider"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover"
          />
        </div>

        {/* Overlay Section */}
        <div className="absolute space-y-8 top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl font-bold text-white bg-black bg-opacity-40 px-8 py-8 rounded-tr-[5rem] rounded-tl-[5rem] rounded-br-[5rem]">
            Crafting authentic wood solutions to shape sustainable living spaces.
          </h2>
          <p className="text-white bg-black bg-opacity-40 px-8 py-4 rounded-lg">
            A Legacy of 65 Years in Wood Business, Now Crafting Timeless Wood
            Creations with Excellence. We craft and supply dependable, premium
            wood products for your everyday needs.
          </p>
          <button
            type="submit"
            className="bg-[#3d8e03] text-white px-16 py-2 border-2 shadow-xl rounded-tr-[5rem] rounded-br-[5rem] rounded-tl-[5rem] hover:bg-green-700 transition duration-300 w-full lg:w-auto"
          >
            <Link to="/contact-us">Connect with us</Link>
          </button>
        </div>
      </section>

      {/* Add top margin to OurHistory to reduce the gap */}
      <div className="mt-16">
        <OurHistory />
      </div>
    </>
  );
};

export default AboutUs;
