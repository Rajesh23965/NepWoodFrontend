import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagramSquare,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa";
import axios from "axios";

const Footer = ({ base }) => {
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
  }, [base]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${base}/get-front-topbar-details`);
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
  }, [base]);

  return (
    <>
      {/* Footer Main Section */}
      <footer className="bg-[#2d2d2d] py-8 px-4">
        <div className="container mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* About Section */}
          <div>
            <div>
              <div>
                <h1 className="text-3xl lg:text-3xl font-bold text-white uppercase mb-2">
                  NepWood
                </h1>
                <span className="text-white uppercase block mb-4">
                  Inspired by nature
                </span>
                <p className="mb-4 text-[#c4c4c4]"></p>
              </div>
            </div>
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
            .filter((foot) => foot.footer_id === "27")
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
              </div>
            ))}

          {/* Product Range Section */}
          {footerData
            .filter((foot) => foot.footer_id === "28")
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
              </div>
            ))}
           {footerData
            .filter((foot) => foot.footer_id === "29")
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
              </div>
            ))}
        </div>
      </footer>

      {/* Footer Bottom Section */}
      <div className="bg-black py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} NepWood. All Rights Reserved |
            <Link to="" target="_blank" className="hover:text-green-300 ml-1">
              Created by Sanjay Yadav
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Footer;

// import axios from "axios";
// import React, { useEffect, useState } from "react";
// import { FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";

// const Footer = ({ base }) => {
//   const [footerData, setFooterData] = useState([]);
//   const [data, setData] = useState({
//     facebook: "",
//     twitter: "",
//     youtube: "",
//   });

//   useEffect(() => {
//     const fetchFooterData = async () => {
//       try {
//         const response = await axios.get(`${base}/get-front-footer-details`);
//         setFooterData(response.data.footerlist);
//       } catch (error) {
//         console.error("Error fetching footer data:", error);
//       }
//     };
//     fetchFooterData();
//   }, [base]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${base}/get-front-topbar-details`);
//         const topbarData = response.data.topbar[0];
//         setData({
//           facebook: topbarData.facebook,
//           twitter: topbarData.twitter,
//           youtube: topbarData.youtube,
//         });
//       } catch (error) {
//         console.error("Error fetching topbar data:", error);
//       }
//     };
//     fetchData();
//   }, [base]);

//   return (
//     <footer className="bg-[#3153d6] flex-col md:flex-row justify-between mr-8 lg:ml-8 lg:mt-8 p-4">
//       {footerData.length > 0 && (
//         <div className="container mx-auto px-4 md:px-8 lg:px-12">
//           <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 md:flex md:flex-row lg:flex-row">
//             {/* Left Section: Contact Us & Follow Us */}
//             <div className="space-y-8">
//               {/* Contact Us */}
//               {footerData
//                 .filter((foot) => foot.footer_id === "27")
//                 .map((foot, index) => (
//                   <div key={index}>
//                     <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 underline underline-offset-8 decoration-[#087830]">
//                       {foot.footer_title}
//                     </h2>
//                     <div
//                       className="text-sm md:text-base text-gray-300 leading-relaxed"
//                       dangerouslySetInnerHTML={{
//                         __html: foot.footer_description,
//                       }}
//                     />
//                   </div>
//                 ))}

//               {/* Follow Us Section */}
//               <div>
//                 <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 underline underline-offset-8 decoration-[#087830]">
//                   Follow Us
//                 </h2>
//                 <div className="flex space-x-4">
//                   <a
//                     href={data.twitter}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Twitter"
//                     className="transition duration-300 transform hover:scale-110"
//                   >
//                     <FaTwitter className="text-2xl md:text-3xl hover:text-[#1DA1F2]" />
//                   </a>
//                   <a
//                     href={data.facebook}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="Facebook"
//                     className="transition duration-300 transform hover:scale-110"
//                   >
//                     <FaFacebook className="text-2xl md:text-3xl hover:text-[#1877F2]" />
//                   </a>
//                   <a
//                     href={data.youtube}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     aria-label="YouTube"
//                     className="transition duration-300 transform hover:scale-110"
//                   >
//                     <FaYoutube className="text-2xl md:text-3xl hover:text-[#FF0000]" />
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Middle Section: Important Links */}
//             <div className="space-y-8">
//               {footerData
//                 .filter((foot) => foot.footer_id === "28")
//                 .map((foot, index) => (
//                   <div key={index}>
//                     <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 underline underline-offset-8 decoration-[#087830]">
//                       {foot.footer_title}
//                     </h2>
//                     <div
//                       className="text-sm md:text-base text-gray-300 leading-relaxed"
//                       dangerouslySetInnerHTML={{
//                         __html: foot.footer_description,
//                       }}
//                     />
//                   </div>
//                 ))}
//             </div>

//             {/* Right Section: Calendar & Map */}
//             <div className="space-y-8">
//               {footerData
//                 .filter((foot) => foot.footer_id === "29")
//                 .map((foot, index) => (
//                   <div key={index}>
//                     <h2 className="text-lg md:text-xl lg:text-2xl font-semibold mb-4 underline underline-offset-8 decoration-[#087830]">
//                       {foot.footer_title}
//                     </h2>
//                     <div
//                       className="text-sm md:text-base text-gray-300 leading-relaxed border border-gray-600 p-4 bg-white rounded-md"
//                       dangerouslySetInnerHTML={{
//                         __html: foot.footer_description,
//                       }}
//                     />
//                   </div>
//                 ))}

//               {footerData
//                 .filter((foot) => foot.footer_id === "0")
//                 .map((foot, index) => (
//                   <div key={index}>
//                     <h2 className="text-lg md:text-xl lg:text-2xl font-semibold underline underline-offset-8 decoration-[#087830]">
//                       {foot.footer_title}
//                     </h2>
//                     <div
//                       className="text-sm md:text-base text-gray-300 leading-relaxed border border-gray-600 p-4 bg-white rounded-md mt-4"
//                       dangerouslySetInnerHTML={{
//                         __html: foot.footer_description,
//                       }}
//                     />
//                   </div>
//                 ))}
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Footer Bottom */}
//       <div className="mt-12 border-t border-gray-500 pt-4">
//         <div className="container mx-auto text-center">
//           <p className="text-sm md:text-base text-gray-400">
//             © 2024 परिवर्तन नेपाल | Created by{" "}
//             <a
//               href="https://www.ithome.com.np/"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="underline hover:text-[#a19e6f] transition duration-300"
//             >
//               IT HOME NEPAL PVT.LTD.
//             </a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import {
//   FaFacebook,
//   FaInstagramSquare,
//   FaLinkedin,
//   FaWhatsapp,
// } from "react-icons/fa";
// import axios from "axios";

// const Footer = ({ base }) => {
//   const [footerData, setFooterData] = useState([]);
//   const [data, setData] = useState({
//     facebook: "",
//     twitter: "",
//     youtube: "",
//   });

//   useEffect(() => {
//     const fetchFooterData = async () => {
//       try {
//         const response = await axios.get(`${base}/get-front-footer-details`);
//         setFooterData(response.data.footerlist);
//       } catch (error) {
//         console.error("Error fetching footer data:", error);
//       }
//     };
//     fetchFooterData();
//   }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`${base}/get-front-footer-details`);
//         const topbarData = response.data.topbar[0];
//         setData({
//           facebook: topbarData.facebook,
//           twitter: topbarData.twitter,
//           youtube: topbarData.youtube,
//         });
//       } catch (error) {
//         console.error("Error fetching topbar data:", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <>
//       <footer className="text-black bg-[#2d2d2d] ">
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 w-full">
//           {/* About Section */}
//           <div className="mx-4 lg:mx-8 ">
//             <h1 className="text-3xl font-bold text-white uppercase mb-4">
//               NepWood
//             </h1>
//             <p className="text-white mb-4">Inspired by Nature</p>
//             <p className="text-[#c4c4c4] mb-6">
//               Crafting wooden products for a sustainable future.
//             </p>
//             <div className="flex space-x-4">
//               <Link
//                 to={data.facebook}
//                 target="_blank"
//                 className="text-[#1e6633] hover:text-white"
//               >
//                 <FaFacebook size={24} />
//               </Link>
//               <Link
//                 to={data.twitter}
//                 target="_blank"
//                 className="text-[#1e6633] hover:text-white"
//               >
//                 <FaInstagramSquare size={24} />
//               </Link>
//               <Link
//                 to="9800824090"
//                 target="_blank"
//                 className="text-[#1e6633] hover:text-white"
//               >
//                 <FaWhatsapp size={24} />
//               </Link>
//             </div>
//           </div>

//           {/* Quick Links Section */}
//           <div>
//             <h2 className="text-lg font-semibold text-white mb-4">
//               Important Links
//             </h2>
//             <ul className="space-y-2">
//               {[
//                 "Product Range",
//                 "Portfolio",
//                 "Downloads",
//                 "About Us",
//                 "Contact Us",
//               ].map((link) => (
//                 <li key={link}>
//                   <Link
//                     to="#"
//                     className="text-[#c4c4c4] hover:text-green-300 transition duration-300"
//                   >
//                     {link}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Product Range Section */}
//           <div>
//             <h2 className="text-lg font-semibold text-white mb-4">Category</h2>
//             <ul className="space-y-2">
//               {[
//                 "Wooden Paneling",
//                 "Ceilings",
//                 "Decking Boards",
//                 "Exterior Cladding",
//                 "Flooring",
//                 "Wood Oil",
//                 "Veneer",
//               ].map((product) => (
//                 <li key={product}>
//                   <Link
//                     to={product}
//                     className="text-[#c4c4c4] hover:text-green-300 transition duration-300"
//                   >
//                     {product}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Us Section */}
//           <div>
//             <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
//             <p className="text-[#c4c4c4] mb-2">Kathmandu</p>
//             <p className="text-[#c4c4c4] mb-2">Nepal</p>
//             <p className="text-[#c4c4c4] mb-2">📞 00000000000</p>
//             <p className="text-[#c4c4c4]">abc@gmail.com</p>
//           </div>
//         </div>
//       </footer>

//       <div className="text-black bg-black py-4 flex justify-center lg:justify-between items-center ">
//         <p className="text-center ml-8 text-gray-400 text-sm">
//           &copy; {new Date().getFullYear()} <span className="font-bold">NepWood</span>. All Rights Reserved |
//           <Link to="" target="_blank" className="hover:text-green-300 ml-1">
//             Created by Sanjay Yadav
//           </Link>
//         </p>
//       </div>
//     </>
//   );
// };

// export default Footer;
