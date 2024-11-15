import React from "react";
import Image1 from "../../assets/Premium-Materials-min.png";
import Image2 from "../../assets/Top-Quality-min.png";
import Image3 from "../../assets/Total-Satisfaction-min.png";
import Image4 from "../../assets/Quality-Assurance-min.png";
import Image5 from "../../assets/Expert-Team-min.png";
import Image6 from "../../assets/Customer-Focus-min.png";

const images = [
  { src: Image2, text: "Top Quality" },
  { src: Image3, text: "Total Satisfaction" },
  { src: Image4, text: "Quality Assurance" },
  { src: Image6, text: "Customer Focus" },
  { src: Image5, text: "Expert Team" },
  { src: Image1, text: "Premium Materials" },
];

const OurHistory = () => {
  return (
    <div className="p-6 bg-white">
      <div className="text-justify mb-8 flex flex-col justify-start items-center mx-auto px-4">
  <h1 className="text-4xl font-bold text-black mb-4">Our History</h1>
  <p className="text-black max-w-2xl mx-auto text-lg leading-relaxed">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
    voluptates magnam cupiditate, cum quos ratione odio officia illo
    quis distinctio animi praesentium temporibus ipsum ab quod nihil
    eius nesciunt eos?
  </p>
</div>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {images.map((image, index) => (
          <div key={index} className="flex flex-col items-center  p-4 ">
            <img
              src={image.src}
              alt={image.text}
              className="w-20 h-20 md:w-24 md:h-24 object-cover rounded-full mb-4"
            />
            <p className="text-xl font-semibold text-black-800">{image.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurHistory;
