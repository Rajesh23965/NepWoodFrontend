import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { CiPause1, CiPlay1 } from "react-icons/ci";
import { LuLoader } from "react-icons/lu";
import axios from "axios";
import { toast } from "react-hot-toast";

const Crausal = ({base}) => {
  const sliderRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const play = () => {
    sliderRef.current.slickPlay();
  };

  const pause = () => {
    sliderRef.current.slickPause();
  };

  useEffect(() => {
    const fetchSliderData = async () => {
      try {
        const response = await axios.get(`${base}/get-front-slider-details`);
        const data = response.data;

        if (data.message === "success" && Array.isArray(data.slider)) {
          const imageUrls = data.slider
            .filter((slider) => slider.slider_image && slider.delete_status === "0")
            .map((slider) => ({
              imageUrl: `${base}/assets/uploads/${slider.slider_image}`,
              title: slider.slider_title, 
            }));

          setImages(imageUrls);
        } else {
          setError(new Error("Unexpected API response format"));
        }
      } catch (err) {
        setError(err);
        toast.error("Error fetching slider data");
      } finally {
        setLoading(false);
      }
    };

    fetchSliderData();
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
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <LuLoader className="animate-spin text-3xl" />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // Move Arrow component definition above its usage
  const Arrow = ({ direction, onClick }) => (
    <div
      onClick={onClick}
      className={`absolute top-1/2 transform -translate-y-1/2 ${
        direction === "left" ? "left-2" : "right-2"
      } text-white bg-black/50 p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
    >
      {direction === "left" ? <CiPause1 /> : <CiPlay1 />}
    </div>
  );

  return (
    <section className="flex-col md:flex-row justify-between  z-50 px-4 -mt-4">
      <div className="relative slider-container w-full">
        <Slider ref={sliderRef} {...settings}>
          {images.map((slide, index) => (
            <div key={index}>
              <img
                src={slide.imageUrl} 
                alt={`Slide ${index + 1}`}
                className="w-full h-[300px] sm:h-[400px] md:h-[400px] lg:h-[400px] xl:h-[500px] object-cover"
              />
            </div>
          ))}
        </Slider>

        <div className="absolute bottom-4 right-4 flex space-x-4">
          <button
            onClick={pause}
            className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-200 transition"
          >
            <CiPause1 size={24} />
          </button>
          <button
            onClick={play}
            className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-200 transition"
          >
            <CiPlay1 size={24} />
          </button>
        </div>

        {/* Custom Arrows */}
        <Arrow direction="left" onClick={() => sliderRef.current.slickPrev()} />
        <Arrow direction="right" onClick={() => sliderRef.current.slickNext()} />
      </div>
    </section>
  );
}

export default Crausal;


// import React, { useRef, useState } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
// import { CiPause1, CiPlay1 } from "react-icons/ci";
// import { LuLoader } from "react-icons/lu";
// // import axios from "axios"; // Commenting out axios for now
// // import { toast } from "react-hot-toast"; // Commenting out toast for now
// import Flooring from "../../assets/Flooring.avif";
// import PineTimber from "../../assets/PineTimber.jpeg";
// import WallPannel from "../../assets/Wall-Panel.webp";
// import Door from "../../assets/Door.jpeg";

// Static images array for now
// const images = [
//   { imageUrl: Flooring, title: "Flooring" },
//   { imageUrl: PineTimber, title: "Pine Timber" },
//   { imageUrl: WallPannel, title: "Wall Panel" },
//   { imageUrl: Door, title: "Door" }
// ];

// const Crausal = ({ base }) => {
//   const sliderRef = useRef(null);
//   const [loading, setLoading] = useState(false); // Set to false as we're using static images
//   const [error, setError] = useState(null);

//   const play = () => {
//     sliderRef.current.slickPlay();
//   };

//   const pause = () => {
//     sliderRef.current.slickPause();
//   };

//   // Commenting out the useEffect for now
//   // useEffect(() => {
//   //   const fetchSliderData = async () => {
//   //     try {
//   //       const response = await axios.get(`${base}/get-front-slider-details`);
//   //       const data = response.data;
//   //       if (data.message === "success" && Array.isArray(data.slider)) {
//   //         const imageUrls = data.slider
//   //           .filter((slider) => slider.slider_image && slider.delete_status === "0")
//   //           .map((slider) => ({
//   //             imageUrl: `${base}/assets/uploads/${slider.slider_image}`,
//   //             title: slider.slider_title, 
//   //           }));
//   //         setImages(imageUrls);
//   //       } else {
//   //         setError(new Error("Unexpected API response format"));
//   //       }
//   //     } catch (err) {
//   //       setError(err);
//   //       toast.error("Error fetching slider data");
//   //     } finally {
//   //       setLoading(false);
//   //     }
//   //   };
//   //   fetchSliderData();
//   // }, []);

//   const settings = {
//     dots: false,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     autoplaySpeed: 3000,
//     fade: true,
//     arrows: false, 
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center">
//         <LuLoader className="animate-spin text-3xl" />
//       </div>
//     );
//   }

//   if (error) {
//     return <div>Error: {error.message}</div>;
//   }

//   const Arrow = ({ direction, onClick }) => (
//     <div
//       onClick={onClick}
//       className={`absolute top-1/2 transform -translate-y-1/2 ${
//         direction === "left" ? "left-2" : "right-2"
//       } text-white bg-black/50 p-2 rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
//     >
//       {direction === "left" ? <CiPause1 /> : <CiPlay1 />}
//     </div>
//   );

//   return (
//     <section className="flex-col md:flex-row justify-between  z-50 -mt-4">
//       <div className="relative slider-container w-full">
//         <Slider ref={sliderRef} {...settings}>
//           {images.map((slide, index) => (
//             <div key={index}>
//               <img
//                 src={slide.imageUrl}
//                 alt={slide.title}
//                 className="w-full h-[300px] sm:h-[400px] md:h-[400px] lg:h-[400px] xl:h-[570px] object-cover"
//               />
//             </div>
//           ))}
//         </Slider>

//         <div className="absolute bottom-4 right-4 flex space-x-4">
//           <button
//             onClick={pause}
//             className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-200 transition"
//           >
//             <CiPause1 size={24} />
//           </button>
//           <button
//             onClick={play}
//             className="p-2 rounded-full bg-white shadow-lg hover:bg-gray-200 transition"
//           >
//             <CiPlay1 size={24} />
//           </button>
//         </div>

//         {/* Custom Arrows */}
//         <Arrow direction="left" onClick={() => sliderRef.current.slickPrev()} />
//         <Arrow direction="right" onClick={() => sliderRef.current.slickNext()} />
//       </div>
//     </section>
//   );
// }

// export default Crausal;

