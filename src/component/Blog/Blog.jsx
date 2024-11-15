import React from "react";
import image1 from "../../assets/shot-panoramic-composition-bedroom.jpg";
import { Link } from "react-router-dom";
import { FaAnglesRight } from "react-icons/fa6";
import image2 from "../../assets/financial-independent-woman-buying-new-house-1536x1024.jpg"
import image3 from "../../assets/outdoor-restaurant-1536x1024.jpg"
import image4 from "../../assets/3d-rendering-classic-interior-2-1536x768.jpg"
const Blog = () => {
  return (
    <>
      <div className="flex-col md:flex-row justify-between mr-4 gap-8 lg:ml-4 lg:mt-8 ml-4 p-4">
         <h2 className="text-center font-semibold text-3xl mb-10 underline underline-offset-8">
        Our Blog
      </h2>
      <div className="flex">

        <div className="shadow-xl w-1/2 ">
          <div className="px-10 ">
            <Link to='/'>
            
            <img src={image1} alt="" className="w-full h-full rounded-2xl"/>
            </Link>
          </div>
          <div className="flex-col space-y-4 px-10 mt-4 mb-4">
            <Link to="/">
              <h1 className="text-3xl hover:text-[#23527c]">
                8 Statement Ceiling Designs Worth Stealing
              </h1>
            </Link>
            <p className="text-xl">
              Ceilings are often disregarded in terms of domestic design,
              with...
            </p>
            <Link to="/">
              <button className="text-[#3d8e03] flex items-center gap-2">
                Read More {<FaAnglesRight />}
              </button>
            </Link>
          </div>
        </div>
        <div className="flex flex-col space-y-6 w-1/2">
          <div className="flex gap-8">
            <div className="">
              <img
                src={image2}
                alt="image1"
                className="h-48 w-80  rounded-3xl"
              />
            </div>
            <div className="">
              <Link>
                <h1 className="">
                  Why Thermopine Exterior Cladding Preferred by People
                </h1>
              </Link>
              <p className="">In current years, the world of</p>
              <Link to="/">
                <button className="text-[#3d8e03] flex items-center gap-2">
                  Read More {<FaAnglesRight />}
                </button>
              </Link>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="">
              <img
                src={image3}
                alt="image1"
                className="h-48 w-80  rounded-3xl"
              />
            </div>
            <div className="">
              <Link>
                <h1 className="">
                  Why Thermopine Exterior Cladding Preferred by People
                </h1>
              </Link>
              <p className="">In current years, the world of</p>
              <Link to="/">
                <button className="text-[#3d8e03] flex items-center gap-2">
                  Read More {<FaAnglesRight />}
                </button>
              </Link>
            </div>
          </div>
          <div className="flex gap-8">
            <div className="">
              <img
                src={image4}
                alt="image1"
                className="h-48 w-80  rounded-3xl"
              />
            </div>
            <div className="">
              <Link>
                <h1 className="">
                  Why Thermopine Exterior Cladding Preferred by People
                </h1>
              </Link>
              <p className="">In current years, the world of</p>
              <Link to="/">
                <button className="text-[#3d8e03] flex items-center gap-2">
                  Read More {<FaAnglesRight />}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default Blog;
