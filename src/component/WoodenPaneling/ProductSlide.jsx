import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slider1 from "../../assets/slider1.jpg";
import slider2 from "../../assets/slider2.jpg";
import slider3 from "../../assets/slider3.jpg";
import slider4 from "../../assets/slider4.jpg";
import slider5 from "../../assets/slider5.jpg";

const sliderImages = [slider1, slider2, slider3, slider4, slider5];

const ProductSlide = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
  };

  return (
    <div className="flex gap-4 justify-center items-center max-w-7xl mx-auto px-4 my-8">
      {/* Slider 1 */}
      <div className="w-1/3">
        <Slider {...settings}>
          {sliderImages.map((slide, index) => (
            <div key={index}>
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Slider 2 */}
      <div className="w-1/3">
        <Slider {...settings}>
          {sliderImages.map((slide, index) => (
            <div key={index}>
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>

      {/* Slider 3 */}
      <div className="w-1/3">
        <Slider {...settings}>
          {sliderImages.map((slide, index) => (
            <div key={index}>
              <img
                src={slide}
                alt={`Slide ${index + 1}`}
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ProductSlide;
