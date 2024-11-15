import React from 'react'
import slider1 from "../../assets/slider1.jpg";
import Topbar from "../TopBar/Topbar";
import SideBar from "../SideBar/sidebar";
const WhiteAsh = () => {
  return (
    <>
    <div className="relative flex-col   md:flex-row justify-between mr-8 lg:ml-8 ml-4">
    {/* <div className="flex justify-between"> */}
        {/* Topbar */}
        {/* <div className="sticky top-0 left-0 w-full z-50">
          <Topbar />
        </div>

        <div className="sticky top-4 right-4 z-50 lg:block">
          <SideBar />
        </div>
      </div> */}

      {/* Hero Section */}
      <div className="relative mb-[35rem] -mt-32  slider-container mx-auto max-w-full">
        <img
          src={slider1}
          alt="slider"
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl text-white font-bold">
            Contact Us
          </h1>
        </div>
      </div>
    </div>
    </>
  )
}

export default WhiteAsh