import React from "react";
import { Link } from "react-router-dom";
import Decking from "../../assets/Deckin.jpeg";
import PineTimber from "../../assets/PineTimber.jpeg";
import WallPannel from "../../assets/Wall-Panel.webp";
import Door from "../../assets/door.jpeg";
import FingerJointed from "../../assets/Finger.jpeg";
import Beams from "../../assets/Beams.webp";
import Glt from "../../assets/glt.jpeg";
import PlanedPine from "../../assets/PlanedPinewood.jpeg";
import Decorative from "../../assets/Decking.jpeg";
import Parquet from "../../assets/Paraquet.jpeg";

const productData = [
  { id: 1, image: Decking, heading: "Decking", link: "decking" },
  { id: 2, image: Door, heading: "Doors", link: "doors" },
  { id: 3, image: Decorative, heading: "DECORATIVE 3D PANELS/ CLADDING", link: "three-d-decorative" },
  { id: 4, image: Parquet, heading: "Parquet Flooring", link: "parquet" },
  { id: 5, image: FingerJointed, heading: "Finger Jointed Board", link: "finger-jointed-board" },
  { id: 6, image: Glt, heading: "Glue Laminated Timber", link: "glt-beams-and-pillars" },
  { id: 7, image: PlanedPine, heading: "Planed Pinewood Planks", link: "planed-pinewood-lanks" },
];

const OurProduct = () => {
  return (
    <div>
      {/* Mobile Layout */}
      <div className="flex flex-col items-center lg:items-center px-4 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:hidden gap-6 mb-8">
          {productData.map((product, index) => (
            <div key={index}>
              <Link to={product.link}>
                <div className="relative group rounded-3xl overflow-hidden shadow-lg ">
                  <img
                    src={product.image}
                    alt={product.heading}
                    className="w-full sm:w-[50rem] h-64 object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-100 transition-opacity duration-300">
                    <h2 className="text-white text-2xl lg:text-3xl font-serif">
                      {product.heading}
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Large Screen Layout */}
      <div className="space-y-6 px-4 lg:px-8 mt-12 hidden lg:block">
        <h2 className="text-center font-extrabold text-5xl mb-10">Our Products</h2>
        <div className="grid grid-cols-3 -space-x-4">
          {/* Left Column */}
          <div className="space-y-4 ">
            {productData
              .filter((product) => product.id === 1 || product.id === 2 || product.id === 3)
              .map((product, index) => (
                <Link to={product.link} key={index}>
                  <div className="relative group rounded-3xl overflow-hidden shadow-lg m-4 ">
                    <img
                      src={product.image}
                      alt={product.heading}
                      className="w-full h-44 object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                      <h2 className="text-white text-xl lg:text-2xl font-serif">{product.heading}</h2>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          {/* Center Column */}
          <div className="row-span-3">
            {productData
              .filter((product) => product.id === 4)
              .map((product, index) => (
                <Link to={product.link} key={index}>
                  <div className="relative group rounded-3xl overflow-hidden shadow-lg m-4">
                    <img
                      src={product.image}
                      alt={product.heading}
                      className="w-full h-[35rem] object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                      <h2 className="text-white text-2xl lg:text-3xl font-serif">{product.heading}</h2>
                    </div>
                  </div>
                </Link>
              ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {productData
              .filter((product) => product.id === 5 || product.id === 6 || product.id === 7)
              .map((product, index) => (
                <Link to={product.link} key={index} className="space-y-2">
                  <div className="relative group rounded-3xl overflow-hidden m-4">
                    <img
                      src={product.image}
                      alt={product.heading}
                      className="w-full h-44  object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-50 flex items-center justify-center transition-opacity duration-300">
                      <h2 className="text-white text-xl lg:text-2xl font-serif">{product.heading}</h2>
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProduct;
