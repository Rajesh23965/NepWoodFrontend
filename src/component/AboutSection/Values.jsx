import React from "react";
import Image1 from "../../assets/Integrity.png";
import Image2 from "../../assets/Accountability.png";
import Image3 from "../../assets/Excellence-1.png";
import Image4 from "../../assets/Innovation-1.png";
import Image5 from "../../assets/Collaboration-1.png";
import Image6 from "../../assets/Adaptability-1.png";

const images = [
  {
    src: Image1,
    text: "Integrity:",
    para: "Unwavering commitment to ethical actions, building trust and transparency.",
  },
  {
    src: Image2,
    text: "Accountability:",
    para: "Taking ownership, ensuring reliability.",
  },
  {
    src: Image3,
    text: "Excellence:",
    para: "Thriving on competition, pushing boundaries for the best outcomes.",
  },
  {
    src: Image4,
    text: "Innovation:",
    para: "Fostering creative solutions, encouraging fresh perspectives.",
  },
  {
    src: Image5,
    text: "Collaboration:",
    para: "Harnessing collective power for success.",
  },
  {
    src: Image6,
    text: "Adaptability:",
    para: "Embracing change and flexibility in a dynamic environment.",
  },
];

const Values = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-extrabold mb-4">Values</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Our values represent the core principles that guide our actions and decisions, shaping our culture and defining who we are as an organization.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((image, index) => (
          <div
            key={index}
            className={`flex flex-col items-center border rounded-lg shadow-lg transition-transform transform hover:scale-105 ${
              index % 3 === 1 ? "p-6" : index % 3 === 2 ? "p-8" : "p-4"
            }`}
          >
            <img
              src={image.src}
              alt={image.text}
              className="w-32 h-32 object-cover rounded-full mb-4"
            />
            <h2 className="text-2xl font-bold text-black mb-2 text-center">
              {image.text}
            </h2>
            <p className="text-base text-gray-700 text-center">
              {image.para}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
