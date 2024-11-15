import React from "react";
import { Link } from "react-router-dom";
import Flooring from "../../assets/Flooring.avif";
import PineTimber from "../../assets/PineTimber.jpeg";
import WallPannel from "../../assets/Wall-Panel.webp";
import Door from "../../assets/Door.jpeg";
import FingerJointed from "../../assets/FingerJointed.jpeg";
import Beams from "../../assets/Beams.webp";

const productData = [
  {
    image: Flooring,
    heading: "Flooring",
    link: "flooring",
  },
  {
    image: PineTimber,
    heading: "Pine Timber",
    link: "pine-timber",
  },
  {
    image: WallPannel,
    heading: "Wall Panels",
    link: "wall-panels",
  },
  {
    image: Door,
    heading: "Doors",
    link: "doors",
  },
  {
    image: FingerJointed,
    heading: "Finger Jointed Board",
    link: "finger-jointed-board",
  },
  {
    image: Beams,
    heading: "GLT Beams and Pillars",
    link: "glt-beams-and-pillars",
  },
];

const OurProduct = () => {
  return (
    <div className="flex flex-col items-center lg:items-start lg:ml-4 lg:mt-8 px-4 mt-4 mr-6">
      <h2 className="text-center font-semibold text-3xl mb-10 underline underline-offset-8">
        Our Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {productData.map((product, index) => (
          <div className="">
            <Link to={product.link}>
              <div
                key={index}
                className="relative group rounded-3xl overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.heading}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center   group-hover:opacity-100 transition-opacity duration-300">
                  <h2 className="text-white text-2xl lg:text-3xl font-serif">{product.heading}</h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProduct;
