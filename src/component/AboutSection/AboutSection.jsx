import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import slider1 from "../../assets/Decking.jpeg";
import slider2 from "../../assets/Paraquet.jpeg";
import axios from "axios";

const AboutSection = ({ base }) => {
  const [intro, setIntro] = useState([]);
const [imageData,setImageData]=useState([]);

//Fetc 34 Cat id
useEffect(() => {
  const fetchData = async () => {
    try {
      // Ensure the API URL is correctly formatted
      const response = await axios.get(
        `${base}/get-front-category-details?id=34`
      );
      setImageData(response.data.post || []);
      console.log(response.data.post);
    } catch (error) {
      console.error(`Error fetching category details:`, error);
    }
  };
  fetchData();
}, [base]); // Ensure `base` is a dependency.


  useEffect(() => {
    const fetchIntro = async () => {
      try {
        const response = await axios.get(
          `${base}/get-front-introduction-details`
        );
        const introData = response.data.intro;
        setIntro(introData);
      } catch (error) {
        console.error("Error fetching introduction data:", error);
      }
    };

    fetchIntro();
  }, [base]);

  const truncateText = (text, length = 100) => {
    if (!text) return "";
    return text.length > length ? text.substring(0, length) + "..." : text;
  };

  return (
    <section className="flex flex-col md:flex-row justify-between mx-4 lg:mx-16 py-8">
      <div className="w-full flex flex-col md:flex-row gap-14">
        {/* Left Side - Images */}
        <div className="md:w-1/2 flex flex-col gap-4 sm:order-1 md:order-2">
          <div className="flex flex-col md:flex-row gap-4">
            {/* {imageData.map((data,index)=>( */}

            <div  className="w-full md:w-1/2">
            
              <img
                // src={`${base}/assets/uploads/${data?.featured_image || slider1}`}
                src={slider1}
                alt="Slider 1"
                className="rounded-3xl w-full lg:-ml-8  h-[20rem] object-cover shadow-lg transition-transform duration-300 transform hover:scale-105"
              />
            </div>
            {/* ))} */}
            <div className="w-full md:w-1/2">
              <img
                src={slider2}
                alt="Slider 2"
                className="rounded-3xl w-full h-[20rem] object-cover shadow-lg transition-transform duration-300 transform hover:scale-105"
              />
            </div>
          </div>
          <div className="space-y-10 py-6 lg:-ml-8 ">
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold text-black text-justify">
                Mission
              </h2>
              <p className="text-black text-justify">
                Durable and versatile timber products that enhance construction
                and design projects, with a commitment to sustainability and
                excellence.
              </p>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-semibold text-black text-justify">
                Vision
              </h2>
              <p className="text-black text-justify">
                To be the leading provider of timber products in Nepal, known
                for our unwavering commitment to innovation, quality, and
                environmental responsibility. We aspire to inspire the
                construction and design industries by offering sustainable wood
                solutions that leave a positive impact on both people and the
                planet.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}

        {/* Right Side - Content */}
        <div className="md:w-1/2 flex flex-col sm:order-2 md:order-2">
          {intro.length > 0 && (
            <>
              {/* Title */}
              <h2 className="text-3xl font-bold underline underline-offset-8 text-black-800">
        {intro[0].title}
      </h2>

      {/* Description */}
      <div
        className="text-black text-justify "
        dangerouslySetInnerHTML={{ __html: intro[0].description }}
      ></div>
            </>
          )}

          {/* List of Features */}
          <ul className="space-y-3 text-black">
            {[
              "Total Satisfaction",
              "Top Quality",
              "Quality Assurance",
              "Customer Focus",
              "Expert Team",
              "Affordable Materials",
            ].map((feature, index) => (
              <li key={index} className="flex items-center">
                <svg
                  className="w-6 h-6 mr-2 text-[#362d16]"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>

          {/* View More Button */}
          <div className="mt-6">
            <Link
              to="/about-us/"
              className="relative inline-block text-lg group"
            >
              <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
                <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
                <span className="relative">View more</span>
              </span>
              <span
                className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
                data-rounded="rounded-lg"
              ></span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import slider1 from "../../assets/slider1.jpg";
// import slider2 from "../../assets/slider2.jpg";
// // import axios from "axios";

// const AboutSection = ({ base }) => {
//   // const [introduction, setIntroduction] = useState(null);

//   // useEffect(() => {
//   //   const fetchIntro = async () => {
//   //     try {
//   //       const response = await axios.get(
//   //         `${base}/get-front-introduction-details`
//   //       );
//   //       setIntroduction(response.data.intro);
//   //     } catch (error) {
//   //       console.log("Error fetching introduction data", error);
//   //     }
//   //   };

//   //   fetchIntro();
//   // }, []);

//   const truncateText = (text, length = 600) => {
//     if (!text) return "";
//     return text.length > length ? text.substring(0, length) + "..." : text;
//   };

//   return (
//     <section className="flex-col b md:flex-row justify-between mr-4 lg:ml-4 lg:mt-8 p-4">
//       <div className="w-full flex flex-col md:flex-row gap-14">
//         {/* Left Side - Images */}
//         <div className="md:w-1/2 flex flex-col gap-4 sm:order-1 md:order-2">
//           <div className="flex flex-col md:flex-row gap-4 ">
//             <div className="w-full md:w-1/2 ">
//               <img
//                 src={slider1}
//                 alt="Slider 1"
//                 className="rounded-3xl w-full h-[20rem] object-cover shadow-lg transition-transform duration-300 transform hover:scale-105"
//               />
//             </div>
//             <div className="w-full md:w-1/2">
//               <img
//                 src={slider2}
//                 alt="Slider 2"
//                 className="rounded-3xl w-full h-[20rem] object-cover shadow-lg transition-transform duration-300 transform hover:scale-105"
//               />
//             </div>
//           </div>
//           <div className="space-y-10 py-6 px-4">
//             <div className="space-y-2">
//               <h2 className="text-3xl font-semibold text-black text-justify">
//                 Mission
//               </h2>
//               <p className="text-black">
//                 Durable and versatile timber products that enhance construction
//                 and design projects, with a commitment to sustainability and
//                 excellence.
//               </p>
//             </div>
//             <div className="space-y-2">
//               <h2 className="text-3xl font-semibold text-black text-justify">
//                 Vision
//               </h2>
//               <p className="text-black">
//                 To be the leading provider of timber products in Nepal, known
//                 for our unwavering commitment to innovation, quality, and
//                 environmental responsibility. We aspire to inspire the
//                 construction and design industries by offering sustainable wood
//                 solutions that leave a positive impact on both people and the
//                 planet.
//               </p>
//             </div>
//           </div>
//         </div>
//         {/* Right Side - Content */}
//         {/* {introduction &&
//           introduction.map((introd, index) => ( */}
//         <div
//           // key={index}
//           className="md:w-1/2 flex flex-col -mt-40 justify-center sm:order-2 md:order-2"
//         >
//           <h2 className="underline underline-offset-8 text-3xl font-bold mb-4 text-black">
//             {/* {introd.title} */}
//             About Us
//           </h2>
//           {/* <p className="text-[3rem] font-semibold text-black mb-4">
//                 {introd.title}
//               </p> */}
//           <p className="text-base text-black text-justify mb-6">
//             {/* <div
//                   dangerouslySetInnerHTML={{
//                     __html: truncateText(introd.description),
//                   }}
//                 >

//                 </div> */}
//             Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit quod
//             est exercitationem rerum, eius ipsum quo. Vero illo, tenetur laborum
//             amet porro ducimus. Tempore tenetur, maiores ipsum, vitae accusamus
//             aperiam soluta dolor odio autem quod iure! Est placeat iste ullam
//             dolores facere minus voluptatem, aperiam tempora ab distinctio autem
//             nihil?
//           </p>

//           {/* List of Features */}
//           <ul className="space-y-3 text-black">
//             {[
//               "Total Satisfaction",
//               "Top Quality",
//               "Quality Assurance",
//               "Customer Focus",
//               "Expert Team",
//               "Affordable Materials",
//             ].map((feature, index) => (
//               <li key={index} className="flex items-center">
//                 <svg
//                   className="w-6 h-6 mr-2 text-[#362d16]"
//                   aria-hidden="true"
//                   xmlns="http://www.w3.org/2000/svg"
//                   fill="currentColor"
//                   viewBox="0 0 20 20"
//                 >
//                   <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
//                 </svg>
//                 {feature}
//               </li>
//             ))}
//           </ul>
//           <div className="mt-4">
//             <Link
//               to="/about-us/"
//               className="relative inline-block text-lg group"
//             >
//               <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
//                 <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
//                 <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
//                 <span className="relative">About Us</span>
//               </span>
//               <span
//                 className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
//                 data-rounded="rounded-lg"
//               ></span>
//             </Link>
//           </div>
//         </div>
//         {/* ))} */}
//         {/* {introduction &&
//           introduction.map((introd, index) => (
//             <div
//               key={index}
//               className="md:w-1/2 flex flex-col justify-center sm:order-2 md:order-2"
//             >
//               <h2 className="underline underline-offset-8 text-3xl font-bold mb-4 text-black">
//                 {introd.title}
//               </h2>
//               <p className="text-[3rem] font-semibold text-black mb-4">
//                 {introd.title}
//               </p>
//               <p className="text-base text-black text-justify mb-6">
//                 <div
//                   dangerouslySetInnerHTML={{
//                     __html: truncateText(introd.description),
//                   }}
//                 >

//                 </div>
//               </p>

//               <ul className="space-y-3 text-black">
//                 {[
//                   "Total Satisfaction",
//                   "Top Quality",
//                   "Quality Assurance",
//                   "Customer Focus",
//                   "Expert Team",
//                   "Affordable Materials",
//                 ].map((feature, index) => (
//                   <li key={index} className="flex items-center">
//                     <svg
//                       className="w-6 h-6 mr-2 text-[#362d16]"
//                       aria-hidden="true"
//                       xmlns="http://www.w3.org/2000/svg"
//                       fill="currentColor"
//                       viewBox="0 0 20 20"
//                     >
//                       <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
//                     </svg>
//                     {feature}
//                   </li>
//                 ))}
//               </ul>
//               <div className="mt-4">
//                 <Link
//                   to="/about-us/"
//                   className="relative inline-block text-lg group"
//                 >
//                   <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
//                     <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
//                     <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
//                     <span className="relative">About Us</span>
//                   </span>
//                   <span
//                     className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
//                     data-rounded="rounded-lg"
//                   ></span>
//                 </Link>
//               </div>
//             </div>
//           ))} */}
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
