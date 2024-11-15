import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import axios from "axios";

const Footer = ({base}) => {
  const [footerData, setFooterData] = useState([]);
  const [data, setData] = useState({
    facebook: "",
    twitter: "",
    youtube: "",
  });

  useEffect(() => {
    const fetchFooterData = async () => {
      try {
        const response = await axios.get(`${base}/get-front-footer-details`);
        setFooterData(response.data.footerlist);
      } catch (error) {
        console.error("Error fetching footer data:", error);
      }
    };
    fetchFooterData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base}/get-front-footer-details`);
        const topbarData = response.data.topbar[0];
        setData({
          facebook: topbarData.facebook,
          twitter: topbarData.twitter,
          youtube: topbarData.youtube,
        });
      } catch (error) {
        console.error("Error fetching topbar data:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <footer className="text-black bg-[#2d2d2d] flex flex-col md:flex-row justify-between mr-8 lg:ml-8 lg:mt-8 ml-4 p-4">
        <div className="py-8 px-4 grid gap-8 md:grid-cols-2 lg:grid-cols-5 w-full">
          {/* About Section */}
          <div className="">
            {footerData.length > 0 && (
              <div className="">
                {footerData
                  .filter((foot) => foot.footer_id === "9")
                  .map((foot, index) => (
                    <div key={index} className="">
                      <h1 className="text-3xl  lg:text-3xl font-bold text-white uppercase mb-2">
                      {foot.footer_title}
                      </h1>
                      <span className="text-white uppercase block mb-4">
                        Inspired by nature
                      </span>
                      <p className="mb-4 text-[#c4c4c4]">
                      <div
                      className="text-sm md:text-base text-gray-300 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: foot.footer_description,
                      }}
                    />
                      </p>
                    </div>
                  ))}
              </div>
            )}
            <div className="flex space-x-4 py-6">
              <Link
                to={data.facebook}
                target="_blank"
                className="text-[#1e6633] hover:text-white"
              >
                <FaFacebook size={24} />
              </Link>
              <Link
                to={data.twitter}
                target="_blank"
                className="text-[#1e6633] hover:text-white"
              >
                <FaInstagramSquare size={24} />
              </Link>
              
              <Link
                to="9800824090"
                target="_blank"
                className="text-[#1e6633] hover:text-white"
              >
                <FaWhatsapp size={24} />
              </Link>
            </div>
          </div>

          {/* Quick Links Section */}
          {footerData
                .filter((foot) => foot.footer_id === "10")
                .map((foot, index) => (
          <div key={index} className="col-span-1">
            <h2 className="text-lg lg:text-xl text-white font-semibold mb-4">
              {foot.footer_title}
            </h2>
            <div
                      className="text-sm md:text-base text-gray-300 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: foot.footer_description,
                      }}
                    />

            {/* <ul className="space-y-2">
              {[
                "Product Range",
                "Portfolio",
                "Downloads",
                "About Us",
                "Contact Us",
              ].map((link) => (
                <li key={link}>
                  <Link
                    to="#"
                    className="text-[#c4c4c4] hover:text-green-300 transition duration-300"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>
                ))}

          {/* Product Range Section */}
          {footerData
                .filter((foot) => foot.footer_id === "0")
                .map((foot, index) => (
          <div key={index} className="col-span-1">
            <h2 className="text-lg lg:text-xl text-white font-semibold mb-4">
              {foot.footer_title}
            </h2>
            <div
                      className="text-sm md:text-base text-gray-300 leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html: foot.footer_description,
                      }}
                    />
            {/* <ul className="space-y-2">
              {[
                "Wooden Panelling",
                "Ceilings",
                "Decking Boards",
                "Exterior Cladding",
                "Flooring",
                "Wood Oil",
                "Veneer",
              ].map((product) => (
                <li key={product}>
                  <Link
                    to="/"
                    className="text-[#c4c4c4] hover:text-green-300 transition duration-300"
                  >
                    {product}
                  </Link>
                </li>
              ))}
            </ul> */}
          </div>
                ))}

          {/* Contact Us Section */}
          {/* <div className="col-span-2 lg:col-span-1">
            <h2 className="text-lg lg:text-xl text-white font-semibold mb-4">
              Contact Us
            </h2>
            <p className="text-[#c4c4c4]">Kathmandu</p>
            <p className="text-[#c4c4c4]">Kathmandu</p>
            <p className="text-[#c4c4c4] mb-2">📞 00000000000</p>
            <p className="text-[#c4c4c4]">abc@gmail.com</p>
          </div> */}
        </div>
      </footer>

      <div className="text-black bg-black py-4 flex justify-center lg:justify-between items-center mr-8 lg:ml-8 px-4 ml-4">
        <p className="text-center text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Nep Wood. All Rights Reserved |
          <Link to="" target="_blank" className="hover:text-green-300 ml-1">
            Created by Sanjay Yadav
          </Link>
        </p>
      </div>
    </>
  );
};

export default Footer;
