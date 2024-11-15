import React from "react";
import Image1 from "../../assets/abs1.png";
import Image2 from "../../assets/abs2.png";
import Image3 from "../../assets/3d-rendering-classic-interior-2-1536x768.jpg";
import Image4 from "../../assets/WoodWall.jpeg";
import Image5 from "../../assets/Wood-oil.jpeg";
import Image6 from "../../assets/Veneer.jpeg";
import Image7 from "../../assets/slider1.jpg";
import Image8 from "../../assets/slider2.jpg";
import { Link } from "react-router-dom";

const catalogData = [
  {
    src: Image1,
    text: "White ashwood panelling:",
    link: "/wooden-paneling/white-ash-wood-panelling",
  },
  {
    src: Image2,
    text: "Teak wood Panelling:",
    link: "/wooden-paneling/teak-panelling/",
  },
  {
    src: Image3,
    text: "White-Oak-Panelling:",
    link: "/wooden-paneling/white-oak-panelling",
  },
  {
    src: Image4,
    text: "Red oak panelling:",
    link: "/wooden-paneling/red-oak-panelling",
  },
  {
    src: Image5,
    text: "Walnut Wood Panellings:",
    link: "/wooden-paneling/walnut-wood-panellings",
  },
  {
    src: Image6,
    text: "Mahogany Wood Panelling:",
    link: "/wooden-paneling/mahogany-wood-panelling",
  },
  {
    src: Image7,
    text: "Pine Wood Panellings",
    link: "/wooden-paneling/pine-wood-panellings",
  },
  {
    src: Image8,
    text: "Brushed Wooden Wall Panellings",
    link: "/wooden-paneling/brushed-wooden-wall-panellings",
  },
];

const BrowseCatalog = () => {
  return (
    <div className="px-4 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Browse our catalog to discover a wide range of Wooden Panelling
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {catalogData.map((catalog, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105"
          >
            <Link to={catalog.link}>
              <div className="relative">
                <img
                  src={catalog.src}
                  alt={catalog.text}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <h2 className="text-xl font-bold text-white text-center px-2">
                    {catalog.text}
                  </h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrowseCatalog;
