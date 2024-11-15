import React from "react";
import slider1 from "../../assets/abs2.png";
import Topbar from "../TopBar/Topbar";
import SideBar from "../SideBar/sidebar";
import { Link } from "react-router-dom";
import ImageGallery from "./ImageGallery";

const Portfolio = () => {
  return (
    <>
      <section className="relative flex-col md:flex-row justify-between mr-8 lg:ml-8 ml-4">
       

        <div className="relative mb-16 -mt-32 slider-container mx-auto max-w-full">
          <img
            src={slider1}
            alt="slider"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] object-cover"
          />
        </div>

        {/* Overlay Section */}
        <div className="absolute  space-y-40 top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-4 ">
        <h2 className="text-4xl  font-bold text-white  bg-black bg-opacity-60 px-72 py-24 rounded-tr-[5rem] rounded-tl-[5rem] rounded-br-[5rem]">
          Portfolio
        </h2>
        <button
          type="submit"
          className="absolute bg-[#3d8e03]  text-white px-16 py-2 border-2  shadow-xl rounded-tr-[5rem] rounded-br-[5rem] rounded-tl-[5rem] hover:bg-green-700 transition duration-300 w-full lg:w-auto"
        >
          <Link to="/contact-us">Connect with us</Link>
        </button>
      </div>
      </section>

      {/* Add top margin to ImageGallery to reduce the gap */}
      <div className="mt-16">
        <ImageGallery />
      </div>
    </>
  );
};

export default Portfolio;
