import React from "react";
import Ply1 from "../../assets/Ply1.jpeg";

const DownloadFormPage = () => {
  return (
    <div className="flex-col  flex md:flex-row justify-between mr-4 lg:ml-4  mb-4 lg:mt-8 ml-4 p-4 ">
      <div className="relative w-full h-[400px] ">
        <img
          src={Ply1}
          alt="Background"
          className="w-full h-full object-cover "
        />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center text-center px-4 bg-black bg-opacity-50">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mt-10 mb-10">
            Enhance Spaces with Nep Wood's White Ash Ceiling
          </h1>
          {/* Form */}
          <div className="flex flex-col lg:flex-row gap-4 w-full max-w-4xl">
            <input
              type="text"
              placeholder="Name"
              className="w-full lg:w-1/5 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3d8e03]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full lg:w-1/5 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3d8e03]"
            />
            <input
              type="tel"
              placeholder="Phone"
              className="w-full lg:w-1/5 px-4 py-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#3d8e03]"
            />
            <textarea
              placeholder="Message"
              className="w-full lg:w-2/5 px-4 py-3 border rounded-md text-black focus:outline-none focus:ring-2 focus:ring-[#3d8e03]"
            />
            <button className="w-full lg:w-auto  bg-[#3d8e03] mb-14 lg:mb-0 rounded-tr-[5rem] rounded-br-[5rem] rounded-tl-[5rem] text-white px-20  hover:bg-[#2f6b02] transition duration-300">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadFormPage;
