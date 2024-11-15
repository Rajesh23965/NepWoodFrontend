import React from "react";
import Image2 from "../../assets/abs1.png"; 
import { Link } from "react-router-dom";

const ContactLink = () => {
  return (
    
    <div className="flex-col  flex md:flex-row justify-between mr-4 lg:ml-4 lg:mt-8 p-4  ml-4 ">
    <div className="relative w-full h-[400px] md:h-[450px] -mb-4 rounded-lg overflow-hidden">
     
      <img
        src={Image2}
        alt="360 View"
        className="w-full h-full object-cover"
      />

      
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col justify-center px-6 md:px-10 lg:px-20">
        <h1 className="text-white text-3xl md:text-4xl lg:text-6xl font-bold mb-4">
          View <br /> 360
        </h1>
        <p className="text-white text-base md:text-lg lg:text-xl mb-6">
          Will explain our complete <br /> transparent process
        </p>
        <button className="bg-[#3d8e03] text-white py-2 px-6 rounded-tr-[5rem] rounded-br-[5rem] rounded-tl-[5rem] hover:bg-[#2f6b02] transition duration-300 self-start">
         <Link to="/contact-us">
         Explore Now
         </Link> 
        </button>
      </div>

     
      <div className="absolute bottom-5 right-5 md:bottom-20 md:right-32 text-[#3d8e03] text-3xl md:text-6xl font-semibold">
        Coming Soon
      </div>
    </div>
    </div>
  );
};

export default ContactLink;
