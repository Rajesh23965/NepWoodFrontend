import React from "react";
import { CiCircleCheck } from "react-icons/ci";

const ElevateSection = () => {
  return (
    <>
      <div className="text-black lg:gap-2 flex flex-col md:flex-row justify-between lg:mr-4 lg:ml-4 lg:mt-8 p-4 lg:h-[35rem]">
        {/* Left Section */}
        <div className="w-full md:w-1/3  bg-black text-white flex flex-col justify-center items-center text-center p-6 rounded-lg lg:rounded-lg md:mr-6 lg:mr-0 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold mb-4 underline decoration-green-800 underline-offset-6">
            Industries Served
          </h1>
          <p className="mb-6 px-6">
            At Nepwood, we proudly serve a diverse range of industries with our
            premium timber and wood products. Our expertise and high-quality
            materials are trusted by professionals across multiple sectors,
            ensuring excellence in every project.
          </p>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2  flex-grow grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg flex items-start">
            <CiCircleCheck className="w-20 h-12 text-green-500 mr-4" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Construction</h2>
              <p>
                From residential homes to large-scale commercial buildings,
                Nepwood provides durable and reliable wood materials ideal for
                framing, flooring, wall panels, and more.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg flex items-start">
            <CiCircleCheck className="w-16 h-12 text-green-500 mr-4" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Interior Design</h2>
              <p>
                Our timber products are a favorite among interior designers
                seeking natural, elegant materials for creating beautiful,
                sustainable interiors.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg flex items-start">
            <CiCircleCheck className="w-16 h-12 text-green-500 mr-4" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Architecture</h2>
              <p>
                Architects rely on our timber solutions to design structures
                that balance functionality with aesthetic appeal, enhancing
                both contemporary and traditional designs.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg flex items-start">
            <CiCircleCheck className="w-16 h-12 text-green-500 mr-4" />
            <div>
              <h2 className="text-2xl font-semibold mb-2">Custom Projects</h2>
              <p>
                We work closely with clients on custom projects, crafting
                bespoke wood products tailored to specific needs, including
                specialty frames, beams, and decorative wooden elements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ElevateSection;
