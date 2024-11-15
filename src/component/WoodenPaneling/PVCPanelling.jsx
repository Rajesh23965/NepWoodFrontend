import React from "react";
import Ply from "../../assets/Ply.jpeg";
import AdaptiveRepairs from "../../assets/Adaptive-Repairs-300x300.png";
import NaturalCooling from "../../assets/Natural-Cooling-300x300.png";
import NoOffGassing from "../../assets/No-Off-Gassing-300x300.png";
import WoodSourcingTransparency from "../../assets/Wood-Sourcing-Transparency-300x300.png";
import { FaChevronDown } from "react-icons/fa";

const pvcData = [
  {
    image: AdaptiveRepairs,
    text1: "Adaptive Repairs:",
    text2:
      "In the event of damage or wear, wood wall paneling can often be repaired or refinished, extending its lifespan.",
  },
  {
    image: NaturalCooling,
    text1: "Natural Cooling:",
    text2:
      "Wood paneling’s natural insulating properties can help maintain a comfortable indoor temperature, reducing the need for excessive air conditioning.",
  },
  {
    image: NoOffGassing,
    text1: "No Off-Gassing:",
    text2:
      "Wooden paneling emits no harmful off-gassing, contributing to better indoor air quality, whereas PVC and WPC can release VOCs.",
  },
  {
    image: WoodSourcingTransparency,
    text1: "Wood Sourcing Transparency:",
    text2:
      "You can have transparency regarding the origin of your materials, promoting responsible consumption, which may be uncertain with PVC.",
  },
];

const PVCPanelling = () => {
  return (
    <div className="flex flex-col items-center mx-4 lg:mx-8 my-8">
      {/* Background Section */}
      <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px]">
        {/* Chevron Icon */}
    
        
        {/* Background Image */}
        <img
          src={Ply}
          alt="Background"
          className="w-full h-full object-cover"
        />
        
        {/* Overlay Content */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-4 bg-black bg-opacity-50">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mt-10 mb-6">
            Why Our Thermoash Wood Panelling over PVC Panelling?
          </h1>

          {/* Information Sections */}
          <div className="space-y-6 px-2 md:px-6 lg:px-12">
            {pvcData.map((pvc, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row items-center sm:items-start justify-center sm:justify-between text-white space-y-4 sm:space-y-0 sm:space-x-6"
              >
                {/* Text Section */}
                <div className="w-full sm:w-1/4 text-center sm:text-left">
                  <p className="font-semibold text-sm lg:text-xl">
                    {pvc.text1}
                  </p>
                </div>
                
                {/* Image Section */}
                <div className="w-full sm:w-1/4 text-center">
                  <img
                    src={pvc.image}
                    alt="Feature Icon"
                    className="w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16 mx-auto"
                  />
                </div>
                
                {/* Description Section */}
                <div className="w-full sm:w-1/2 text-center sm:text-left">
                  <p className="text-sm lg:text-base">{pvc.text2}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PVCPanelling;
