import React from 'react';
import image1 from "../../assets/slider1.jpg";
import image2 from "../../assets/slider2.jpg";
import image3 from "../../assets/slider3.jpg";
import image4 from "../../assets/slider4.jpg";
import image5 from "../../assets/slider5.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const missionData = [
    {
        image: image1,
        heading: "Lorem ipsum dolor sit amet.",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut quaerat ea! Quasi qui sit vel necessitatibus numquam, accusamus incidunt!"
    },
    {
        image: image2,
        heading: "Lorem ipsum dolor sit amet.",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut quaerat ea! Quasi qui sit vel necessitatibus numquam, accusamus incidunt!"
    },
    {
        image: image3,
        heading: "Lorem ipsum dolor sit amet.",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut quaerat ea! Quasi qui sit vel necessitatibus numquam, accusamus incidunt!"
    },
    {
        image: image4,
        heading: "Lorem ipsum dolor sit amet.",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut quaerat ea! Quasi qui sit vel necessitatibus numquam, accusamus incidunt!"
    },
    {
        image: image5,
        heading: "Lorem ipsum dolor sit amet.",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore aut quaerat ea! Quasi qui sit vel necessitatibus numquam, accusamus incidunt!"
    },
];

const Mission = () => {
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
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className="max-w-7xl mx-auto px-4 py-8">
            <h1 className="px-4 text-4xl font-extrabold">Mission</h1>
            <Slider {...settings}>
                {missionData.map((mission, index) => (
                    <div key={index} className="flex flex-col items-center bg-white p-4 rounded-lg shadow-lg">
                        <img
                            src={mission.image}
                            alt={`Slide ${index + 1}`}
                            className="h-48 w-full object-cover rounded-tr-[2rem] rounded-tl-[2rem] rounded-br-[2rem] mb-4"
                        />
                        <h3 className="text-lg font-semibold mb-2 text-center">{mission.heading}</h3>
                        <p className="text-gray-600 text-center">{mission.para}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Mission;
