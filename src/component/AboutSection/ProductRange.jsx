import React from "react";
import image1 from "../../assets/slider1.jpg";
import image2 from "../../assets/slider2.jpg";
import image3 from "../../assets/slider3.jpg";
import image4 from "../../assets/slider4.jpg";
import image5 from "../../assets/slider5.jpg";
import image6 from "../../assets/slider4.jpg";
import image7 from "../../assets/slider5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


const missionData = [
  {
    image: image1,
    heading: "Lorem ipsum dolor sit amet.",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut quaerat ea! Quasi qui sit vel necessitatibus numquam, accusamus incidunt!",
    link: "/flooring",
  },
  {
    image: image2,
    heading: "Lorem ipsum dolor sit amet.",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut quaerat ea! Quasi qui sit vel necessitatibus numquam, accusamus incidunt!",
    link: "/wood-oil",
  },
  {
    image: image3,
    heading: "Lorem ipsum dolor sit amet.",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut quaerat ea! Quasi qui sit vel necessitatibus numquam, accusamus incidunt!",
    link: "/veneer",
  },
  {
    image: image4,
    heading: "Lorem ipsum dolor sit amet.",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut quaerat ea! Quasi qui sit vel necessitatibus numquam, accusamus incidunt!",
    link: "/wooden-paneling",
  },
  {
    image: image5,
    heading: "Lorem ipsum dolor sit amet.",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut quaerat ea! Quasi qui sit vel necessitatibus numquam, accusamus incidunt!",
    link: "/ceilings",
  },
  {
    image: image6,
    heading: "Lorem ipsum dolor sit amet.",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut quaerat ea! Quasi qui sit vel necessitatibus numquam, accusamus incidunt!",
    link: "/deckings-board",
  },
  {
    image: image7,
    heading: "Lorem ipsum dolor sit amet.",
    para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut quaerat ea! Quasi qui sit vel necessitatibus numquam, accusamus incidunt!",
    link: "/exterior-cladding",
  },
];

const ProductRange = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: false,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="px-6 py-12 bg-gray-50">
      <h1 className="text-4xl font-extrabold text-center mb-6">Our Product Range</h1>
      <p className="text-center text-gray-700 mb-12 px-4 max-w-2xl mx-auto">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat iure
        neque architecto quam, hic mollitia quasi inventore. Doloremque, vero
        velit quae officiis saepe asperiores possimus!
      </p>
      <Slider {...settings} className="px-4">
        {missionData.map((mission, index) => (
          <div key={index} className="p-4">
            <Link to={mission.link}>
              <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105">
                <img
                  src={mission.image}
                  alt={`Slide ${index + 1}`}
                  className="h-48 w-full object-cover rounded-tr-[1.5rem] rounded-tl-[1.5rem] rounded-br-[1.5rem] mb-4"
                />
                <h3 className="text-lg font-semibold mb-2 text-center text-gray-800">
                  {mission.heading}
                </h3>
                <p className="text-gray-600 text-center">{mission.para}</p>
              </div>
            </Link>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductRange;
