import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import slider1 from "../../../assets/abs1.png";
import slider2 from "../../../assets/abs2.png";
import slider3 from "../../../assets/AboutUs.jpeg";
import slider4 from "../../../assets/Beams.webp";
import slider5 from "../../../assets/slider5.jpg";

const sliderImages = [slider1, slider2, slider3, slider4, slider5];

const FlooringSlider = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [orderedImages, setOrderedImages] = useState(sliderImages);

  // This function rotates the order of images dynamically
  const rotateImages = (currentImages) => {
    const newOrder = [
      currentImages[4],
      currentImages[0],
      currentImages[1],
      currentImages[2],
      currentImages[3],
    ];
    return newOrder;
  };

  useEffect(() => {
    // When the component mounts, set the initial ordered images
    setOrderedImages(rotateImages(sliderImages));
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
    beforeChange: (current, next) => setActiveSlide(next),
  };

  // Function to rotate images in sync with all sliders
  const handleSlideChange = (index) => {
    setActiveSlide(index);
    setOrderedImages(rotateImages(sliderImages));
  };

  return (
    <div className="flex flex-col gap-4 md:flex-row  my-8 relative justify-between px-4 lg:px-8">
      {/* Main Slider */}
      <div className="w-full md:w-1/3 mb-4 md:mb-0">
        <Slider {...settings} beforeChange={(current, next) => handleSlideChange(next)}>
          {orderedImages.map((slide, index) => (
            <div key={index}>
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] object-cover rounded-lg"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Thumbnail Sliders */}
      <div className=" grid grid-cols-2 gap-2 sm:gap-2 lg:gap-2">
        <Slider
          {...{
            ...settings,
            slidesToShow: 4,
            slidesToScroll: 1,
            focusOnSelect: true,
          }}
        >
          {orderedImages.map((slide, index) => (
            <div key={index} className="relative group">
              <img
                src={slide}
                alt={`Thumbnail ${index + 1}`}
                className={`w-full h-[100px] sm:h-[150px] object-cover cursor-pointer rounded-lg transition-all duration-300 transform ${
                  activeSlide === index ? "scale-110" : "scale-100"
                }`}
                onClick={() => handleSlideChange(index)}
              />
              {activeSlide === index && (
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg">
                  <span className="text-white font-bold">Active</span>
                </div>
              )}
            </div>
          ))}
        </Slider>

        {/* Additional Thumbnail Sliders */}
        {Array(3).fill(null).map((_, idx) => (
          <Slider
            key={idx}
            {...{
              ...settings,
              slidesToShow: 4,
              slidesToScroll: 1,
              focusOnSelect: true,
            }}
          >
            {orderedImages.map((slide, index) => (
              <div key={index} className="relative group">
                <img
                  src={slide}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-full h-[100px] sm:h-[150px] object-cover cursor-pointer rounded-lg transition-all duration-300 transform ${
                    activeSlide === index ? "scale-110" : "scale-100"
                  }`}
                  onClick={() => handleSlideChange(index)}
                />
                {activeSlide === index && (
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center rounded-lg">
                    <span className="text-white font-bold">Active</span>
                  </div>
                )}
              </div>
            ))}
          </Slider>
        ))}
      </div>
    </div>
  );
};

export default FlooringSlider;
