import React from "react";
import SoundInsulation from "../../assets/Sound-Insulation-300x300.png";
import ThermalInsulation from "../../assets/Thermal-Insulation-2-300x300.png";
import Durability from "../../assets/Durability-3-300x300.png";
import EasyMaintenance from "../../assets/Easy-Maintenance-1-300x300.png";
import Environmentally from "../../assets/Environmentally-Friendly-300x300.png";
import IncreasedProperty from "../../assets/Increased-Property-Value-3-300x300.png";

const discoverData = [
  {
    image: SoundInsulation,
    heading: "Sound Insulation",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae repellat magnam reiciendis ut provident similique distinctio beatae, porro optio exercitationem!",
  },
  {
    image: ThermalInsulation,
    heading: "Thermal Insulation",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae repellat magnam reiciendis ut provident similique distinctio beatae, porro optio exercitationem!",
  },
  {
    image: Durability,
    heading: "Durability",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae repellat magnam reiciendis ut provident similique distinctio beatae, porro optio exercitationem!",
  },
  {
    image: EasyMaintenance,
    heading: "Easy Maintenance",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae repellat magnam reiciendis ut provident similique distinctio beatae, porro optio exercitationem!",
  },
  {
    image: Environmentally,
    heading: "Environmentally Friendly",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae repellat magnam reiciendis ut provident similique distinctio beatae, porro optio exercitationem!",
  },
  {
    image: IncreasedProperty,
    heading: "Increased Property Value",
    para: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae repellat magnam reiciendis ut provident similique distinctio beatae, porro optio exercitationem!",
  },
];

const DiscoverWonder = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-800">
          Discover the Wonders of Wooden Panelling
        </h1>
        <p className="text-gray-600 mt-4">
          Explore the benefits and features of wooden paneling that enhance your living spaces.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
        {discoverData.map((discover, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow">
            <img src={discover.image} alt={discover.heading} className="w-40 h-40 mx-auto mb-4" />
            <h2 className="text-xl font-semibold text-gray-800 underline underline-offset-4 mb-2">
              {discover.heading}
            </h2>
            <p className="text-gray-600">
              {discover.para}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverWonder;
