import React from "react";
import slider1 from "../../assets/Deckin.jpeg";

const DesckingDescription = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-6 p-4 md:p-8 bg-gray-100 rounded-lg shadow-lg">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
           Decking
          </h1>
          <p className="text-gray-600 leading-relaxed">
            Commonly used in gardens, patios, pools, areas and as an extension
            of living spaces, decking serves as a versatile solution for outdoor
            flooring. It provides an aesthetic appeal while being practical for
            activities such as dining, relaxation, and entertainment
          </p>
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

export default DesckingDescription;
