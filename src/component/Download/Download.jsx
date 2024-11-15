import React from "react";
import WoodWall from "../../assets/WoodWall.jpeg";
import Topbar from "../TopBar/Topbar";
import SideBar from "../SideBar/sidebar";
import { Link } from "react-router-dom";
import Brochures from "./Brochures";

const Download = () => {
  return (
    <>
      <section className="relative flex-col md:flex-row justify-between mr-8 lg:ml-8 ml-4">
        {/* <div className="flex justify-between">
          <div className="sticky top-0 left-0 w-full z-50">
            <Topbar />
          </div>

          <div className="sticky top-4 right-4 z-50 lg:block">
            <SideBar />
          </div>
        </div> */}

        <div className="relative mb-16 -mt-32 slider-container mx-auto max-w-full">
          <img
            src={WoodWall}
            alt="slider"
            className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[800px] object-cover"
          />
        </div>

        <div className="absolute space-y-40 top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-4">
          <h2 className="text-4xl font-bold text-white bg-black bg-opacity-40 px-72 py-8 rounded-tr-[5rem] rounded-tl-[5rem] rounded-br-[5rem]">
            Downloads
          </h2>
        </div>
      </section>

      {/* Add top margin to Brochures to reduce the gap */}
      <div className="mt-16">
        <Brochures />
      </div>
    </>
  );
};

export default Download;
