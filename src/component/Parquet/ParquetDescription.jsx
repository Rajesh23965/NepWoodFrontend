import React from "react";
import slider1 from "../../assets/Paraquet.jpeg";

const ParaquetDescription = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-6 p-4 md:p-8 bg-gray-100 rounded-lg shadow-lg">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
           Parquet Flooring
          </h1>
          <p className="text-gray-600 leading-relaxed">
          Wood is naturally anti-allergenic, beautiful, and warm underfoot, making it perfect for cozy, comfortable spaces. Our solid wood flooring brings together elegance and durability, with a scratch-resistant and water-resistant finish. Made from high-quality timber, it offers top quality at a fair price. Nepwood's natural wood flooring enhances any style and suits your needs, providing a lasting, eco-friendly choice. Easy to install, our flooring offers affordable luxury that fits perfectly into every home.
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

export default ParaquetDescription;
