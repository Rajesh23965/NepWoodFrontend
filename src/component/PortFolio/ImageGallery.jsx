import { useState } from "react";
import Image1 from "../../assets/p.jpg";
import Image2 from "../../assets/p1.jpg";
import Image3 from "../../assets/p2.jpg";
import Image4 from "../../assets/p3.jpg";
import Image5 from "../../assets/p4.jpg";
import Image6 from "../../assets/p5.jpg";
import Image7 from "../../assets/p6.jpg";
import Image8 from "../../assets/p7.jpg";
import Image9 from "../../assets/p8.jpg";
import Image10 from "../../assets/p9.jpg";
import Image11 from "../../assets/p10.jpg";
import Image12 from "../../assets/p11.jpg";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";

const images = [
  Image1,
  Image2,
  Image3,
  Image4,
  Image5,
  Image6,
  Image7,
  Image8,
  Image9,
  Image10,
  Image11,
  Image12,
];
const ImageGallery = () => {
  const [imageToShow, setImageToShow] = useState("");
  const [lightboxDisplay, setLightBoxDisplay] = useState(false);

  //looping through our images array to create img elements
  const imageCards = images.map((image, index) => (
    <img
      key={index}
      className="image-card w-[800px] h-80 object-cover rounded-md cursor-pointer transition-transform transform hover:scale-105"
      onClick={() => showImage(image)}
      src={image}
      alt={`Gallery Image ${index + 1}`}
    />
  ));

  //function to show a specific image in the lightbox, amd make lightbox visible
  const showImage = (image) => {
    setImageToShow(image);
    setLightBoxDisplay(true);
  };

  //hide lightbox
  const hideLightBox = () => {
    setLightBoxDisplay(false);
  };

  //show next image in lightbox
  const showNext = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex >= images.length - 1) {
      setLightBoxDisplay(false);
    } else {
      let nextImage = images[currentIndex + 1];
      setImageToShow(nextImage);
    }
  };

  //show previous image in lightbox
  const showPrev = (e) => {
    e.stopPropagation();
    let currentIndex = images.indexOf(imageToShow);
    if (currentIndex <= 0) {
      setLightBoxDisplay(false);
    } else {
      let prevImage = images[currentIndex - 1];
      setImageToShow(prevImage);
    }
  };

  return (
    <>
      <main className="relative flex-col   md:flex-row justify-between mr-8 lg:ml-8 ml-4">
        <h2 className="text-center font-semibold text-3xl mb-10 underline underline-offset-8">
          Our Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
          {imageCards}
        </div>

        {lightboxDisplay ? (
          <div
            id="lightbox"
            onClick={hideLightBox}
            className="fixed z-20 inset-0 flex items-center justify-center bg-black bg-opacity-75 "
          >
            <button
              onClick={showPrev}
              className="absolute left-4 text-white text-3xl p-2 rounded-full bg-gray-800 hover:bg-gray-600 transition-transform transform hover:scale-110"
            >
              <FaChevronLeft />
            </button>
            <img
              id="lightbox-img"
              src={imageToShow}
              className="max-w-full max-h-full rounded-lg"
              alt="Selected"
            />
            <button
              onClick={showNext}
              className="absolute right-4 text-white text-3xl p-2 rounded-full bg-gray-800 hover:bg-gray-600 transition-transform transform hover:scale-110"
            >
              <FaChevronRight />
            </button>
          </div>
        ) : null}
      </main>
    </>
  );
};

export default ImageGallery;
