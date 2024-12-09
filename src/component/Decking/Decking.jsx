import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import { MdFullscreen, MdFullscreenExit } from "react-icons/md";
window.global = window;

import slider1 from "../../assets/Decking.png";
import slider2 from "../../assets/Deckin.jpeg";
import slider3 from "../../assets/Deckin.jpeg";
import slider4 from "../../assets/Deckin.jpeg";
import slider5 from "../../assets/Deckin.jpeg";



import axios from "axios";

const sliderImages = [slider1, slider2, slider3, slider4, slider5];

const Decking = ({base}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false); 
  const [data,setData]=useState([]);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    arrows: false,
    lazyLoad: "ondemand", 
  };
  
  const openLightbox = (index) => {
    setCurrentImageIndex(index);
    setIsOpen(true);
  };

  const moveNext = () => {
    setCurrentImageIndex((currentImageIndex + 1) % sliderImages.length);
  };

  const movePrev = () => {
    setCurrentImageIndex(
      (currentImageIndex + sliderImages.length - 1) % sliderImages.length
    );
  };

  const toggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  //Fetch Data
  useEffect(()=>{
    const fetchedData=async()=>{
      try {
        const response=await axios.get(`${base}/get-front-product-details`);
        setData(response.data.footerlist)
        console.log(response.data.footerlist)
      } catch (error) {
        console.log("Error to fetch fingerjointed data",error);
      }
     
    }
    fetchedData();
  },[base]);

  return (
    <>
    <style>
        {`
          .ril-loading-circle {
            display:none  !important;
          }
        `}
      </style>
    <h1 className="flex flex-col lg:flex-row  justify-center px-4 py-10 -mb-14 text-3xl font-extrabold underline underline-offset-8  ">Decking</h1>
    <div className="flex flex-col lg:flex-row gap-8 justify-center items-start max-w-7xl  lg:ml-4 px-20 py-10 mr-4">
      
      {[...Array(3)].map((_, sliderIndex) => (
        <div
          key={sliderIndex}
          className="w-full border-2 p-2 border-gray-300 rounded-lg shadow-lg overflow-hidden"
        >
          <Slider {...settings}>
            {sliderImages.map((slide, index) => (
              <div key={index} onClick={() => openLightbox(index)}>
                <img
                  src={slide}
                  alt={`Slide ${index + 1}`}
                  className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[400px] object-cover cursor-pointer"
                />
              </div>
            ))}
          </Slider>
          {/* {data.map((fdata,index)=>(

          <div key={index} className=""> */}

          <h2 className="text-2xl font-semibold mb-4 text-gray-800">
            {/* Chilaune Finger Jointed Board */}
            Outdoor decking
          </h2>
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-200">
                <th className="border-b-2 border-gray-300 p-2">Specification</th>
                <th className="border-b-2 border-gray-300 p-2">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border-b border-gray-300 p-2">Thickness</td>
                <td className="border-b border-gray-300 p-2">18 mm</td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 p-2">Width</td>
                <td className="border-b border-gray-300 p-2">70 to 94 mm</td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 p-2">Length</td>
                <td className="border-b border-gray-300 p-2">4 to 8 feet (Single Length) Up to 20 feet (Finger Jointed)</td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 p-2">Applications/ Usage</td>
                <td className="border-b border-gray-300 p-2">Outdoor decking</td>
              </tr>
              <tr>
                <td className="border-b border-gray-300 p-2">Gardens</td>
                <td className="border-b border-gray-300 p-2">
                Pergolas
                </td>
              </tr>
            </tbody>
          </table>
          </div>
          ))}
        {/* </div>
      ))} */}

      {/* Lightbox Modal */}
      {/* {isOpen && (
        <Lightbox
          mainSrc={sliderImages[currentImageIndex]}
          nextSrc={sliderImages[(currentImageIndex + 1) % sliderImages.length]}
          prevSrc={
            sliderImages[
              (currentImageIndex + sliderImages.length - 1) % sliderImages.length
            ]
          }
          onCloseRequest={() => setIsOpen(false)}
          onMovePrevRequest={movePrev}
          onMoveNextRequest={moveNext}
          enableZoom={true}
          toolbarButtons={[
            <button 
              onClick={toggleFullscreen} 
              key="fullscreen-toggle"
              className="text-white bg-black rounded "
            >
              {isFullscreen ? <MdFullscreenExit /> : <MdFullscreen />}
            </button>,
          ]}
          imageCaption={`Image ${currentImageIndex + 1} of ${sliderImages.length}`}
          imageTitle=""
          wrapperClassName={isFullscreen ? "fixed top-0 left-0 w-full h-full z-50 bg-black" : ""}
          overlayClassName={isFullscreen ? "bg-black bg-opacity-80" : ""}
        />
      )} */}
    </div>
    </>
  );
};

export default Decking;



