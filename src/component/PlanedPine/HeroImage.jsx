import React from "react";

import FingerJointed from "../../assets/PlanedPinewood.jpeg";
import { Link } from "react-router-dom";

const  PlanedPineHeroImage = () => {
  return (
    <section className="relative  flex-col md:flex-row justify-between px-4 lg:px-8">
      {/* Image Section */}
      <div className="relative w-full">
        <img
          src={FingerJointed}
          alt="Finger Jointed Board"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] object-cover"
        />

        {/* Overlay Section */}
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="text-center max-w-2xl px-6 py-8 bg-white bg-opacity-80 rounded-lg shadow-xl">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Planed Pinewood Planks
            </h2>
            <p className="text-md sm:text-lg md:text-xl text-gray-700 mb-6">
            Our pine wood is meticulously dried in high-tech automated kilns to a moisture content of approximately 12%, ensuring enhanced stability, strength, and durability compared to non-seasoned wood.

Planed and sanded to precise thickness, our pine wood offers an aesthetically pleasing, smooth finish and improved dimensional accuracy. Known for its attractive grain and light color, this softwood is ideal for various interior and outdoor projects. With higher strength and screw-holding capacity, our kiln-dried pine minimizes the risk of bending, splitting, or cracking, making it a reliable choice where both aesthetics and durability are essential.       </p>
            <button
              type="button"
              className="bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-700 transition duration-300"
            >
              <Link to="/contact-us">Connect with us</Link>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlanedPineHeroImage;
