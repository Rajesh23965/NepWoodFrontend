import React from "react";

const data = [
  {
    text: "Redefining Excellence:",
    para: "Our central vision is to redefine excellence in the wood products and logistics industry.",
  },
  {
    text: "Core Values:",
    para: "Our vision is founded on the core values of innovation, ambition, and a relentless pursuit of perfection.",
  },
  {
    text: "Pioneering Innovation:",
    para: "We are dedicated to challenging industry norms, pushing boundaries, and pioneering new approaches to conducting business in our field.",
  },
  {
    text: "Elevating Customer Experience:",
    para: "Our ultimate goal is to elevate the customer experience to unprecedented levels, with a focus on enhancing customer satisfaction and fostering long-lasting loyalty.",
  },
  {
    text: "Surpassing Conventional Expectations:",
    para: "We are committed to going beyond conventional industry norms and surpassing expectations, aiming to set new standards of quality and service.",
  },
];

const Vision = () => {
  return (
    <div className="text-black py-16 px-4 lg:px-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl lg:text-6xl font-extrabold mb-4 tracking-wide">
          Our Vision
        </h1>
        <p className="text-lg lg:text-xl text-black max-w-2xl mx-auto">
          We strive for excellence and innovation in every step of our journey, pushing the boundaries and elevating customer experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((d, index) => (
          <div
            key={index}
            className="bg-gray-800 p-8 rounded-lg shadow-lg hover:bg-gray-700 transition-all duration-300"
          >
            <h2 className="text-2xl lg:text-3xl font-bold mb-4 text-indigo-400">
              {d.text}
            </h2>
            <p className="text-lg lg:text-xl text-gray-300">{d.para}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vision;
