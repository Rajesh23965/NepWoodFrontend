import React from "react";
import About from "../../assets/AboutUs.jpeg";
import { Link } from "react-router-dom";
import OurHistory from "./OurHistory";

const AboutUs = () => {
  return (
    <>
      <section className="relative  lg:mr-4 lg:ml-4  px-4 ">
        {/* Image Section */}
        <div className="relative">
          <img
            src={About}
            alt="About Us"
            className="w-full h-[700px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover"
          />
          {/* Overlay Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 bg-black bg-opacity-50">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-relaxed px-6 py-4  shadow-lg max-w-4xl">
              Crafting authentic wood solutions to shape sustainable living
              spaces.
            </h2>
            <p className="mt-4 text-white text-sm sm:text-base md:text-lg bg-black bg-opacity-60 px-8 py-4 rounded-tr-[2rem] rounded-tl-[2rem] rounded-br-[2rem] shadow-md max-w-3xl">
              A Legacy of 65 Years in Wood Business, Now Crafting Timeless Wood
              Creations with Excellence. We craft and supply dependable, premium
              wood products for your everyday needs.
            </p>
            <Link
              to="/contact-us"
              className="mt-6 bg-green-600 text-white px-12 py-3 rounded-tr-[2rem] rounded-tl-[2rem] rounded-br-[2rem] shadow-lg hover:bg-green-700 transition duration-300 text-sm sm:text-base md:text-lg"
            >
              Connect with us
            </Link>
          </div>
        </div>
      </section>

      {/* OurHistory Section */}
      <div className="mt-12 px-4 sm:px-8 md:px-12 lg:px-16">
        <OurHistory />
      </div>
    </>
  );
};

export default AboutUs;
