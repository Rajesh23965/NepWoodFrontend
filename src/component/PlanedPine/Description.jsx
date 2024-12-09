import React from "react";
import slider1 from "../../assets/PlanedPinewood.jpeg";

const PlanedPineDescription = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center gap-6 p-4 md:p-8 bg-gray-100 rounded-lg shadow-lg">
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4">
          Planed Pinewood Planks
          </h1>
          <p className="text-gray-600 leading-relaxed">
          Our pine wood is meticulously dried in high-tech automated kilns to a moisture content of approximately 12%, ensuring enhanced stability, strength, and durability compared to non-seasoned wood.

Planed and sanded to precise thickness, our pine wood offers an aesthetically pleasing, smooth finish and improved dimensional accuracy. Known for its attractive grain and light color, this softwood is ideal for various interior and outdoor projects. With higher strength and screw-holding capacity, our kiln-dried pine minimizes the risk of bending, splitting, or cracking, making it a reliable choice where both aesthetics and durability are essential.
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

export default PlanedPineDescription;
