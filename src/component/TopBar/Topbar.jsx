import Logo from "../../assets/abs2.png";
import React, { useEffect, useState } from "react";
import { FaBars, FaTimes, FaCaretDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import axios from "axios";
import SubMenu from "./SubMenue";
import { HiHomeModern } from "react-icons/hi2";

const Topbar = ({base}) => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");
  const [menuData, setMenuData] = useState([]);
  const [subMenuOpen, setSubMenuOpen] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

 

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const fetchMenuData = async () => {
      try {
        const response = await axios.get(`${base}/get-front-menu-details`);
        setMenuData(response.data.menu);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchMenuData();
  }, [base]);

  const handleNavToggle = () => setNavOpen(!navOpen);
  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setNavOpen(false);
  };

  const handleSubMenuToggle = (menuId) => {
    if (isMobile) setSubMenuOpen(subMenuOpen === menuId ? null : menuId);
    else setSubMenuOpen(menuId);
  };

  const getSubMenu = (parentId) => menuData.filter((menu) => menu.parent_id === parentId);

  return (
    <header className=" bg-green-600 flex justify-around items-center px-4 md:px-20 py-4 sticky top-0 z-20  shadow-lg">
      {/* Logo */}
      <Link to="/" className="flex items-center">
        {/* <img src={Logo} alt="Logo" className="w-24 md:w-40" /> */}
        <h1 className="NepWood text-2xl font-bold text-white uppercase">NepWood</h1>
      </Link>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex space-x-8 items-center">
        {menuData
          .filter((menu) => menu.parent_id === "0")
          .map((menu) => (
            <div
              key={menu.id_menu}
              onMouseEnter={() => handleSubMenuToggle(menu.id_menu)}
              onMouseLeave={() => !isMobile && setSubMenuOpen(null)}
              className={`relative cursor-pointer transition-all ${
                activeTab === menu.label_menu
                  ? "border-b-4 border-[#00b1a8]"
                  : "border-b-4 border-transparent hover:border-[#00b1a8]"
              }`}
            >
              <Link
                to={menu.url_menu === "#" ? "/" : `/${menu.url_menu}`}
                onClick={() => handleTabClick(menu.label_menu)}
                className="flex items-center space-x-1 hover:text-[#00b1a8] text-white"
              >
                <span>{menu.label_menu}</span>
                {menu.label_menu === 'home' && <HiHomeModern />}
                {menu.has_child === "1" && <FaCaretDown size={16} />}
              </Link>

              {menu.has_child === "1" && (
                <SubMenu
                  isOpen={subMenuOpen === menu.id_menu}
                  links={getSubMenu(menu.id_menu)}
                  handleTabClick={handleTabClick}
                  getSubMenu={getSubMenu}
                />
              )}
            </div>
          ))}
      </nav>

      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden text-black"
        onClick={handleNavToggle}
        aria-label="toggle Menu"
      >
        {navOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Mobile Menu */}
      {navOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-90 z-10">
          <div className="p-4">
            <button
              onClick={handleNavToggle}
              className="absolute top-4 right-4 text-white"
              aria-label="close menu"
            >
              <FaTimes size={28} />
            </button>
            <ul className="space-y-4 text-white text-center uppercase font-semibold mt-16">
              {menuData
                .filter((menu) => menu.parent_id === "0")
                .map((menu) => (
                  <li key={menu.id_menu}>
                    <div
                      className="flex justify-between items-center"
                      onClick={() => handleSubMenuToggle(menu.id_menu)}
                    >
                      <Link
                        to={menu.url_menu === "#" ? "/" : `/${menu.url_menu}`}
                        onClick={() => handleTabClick(menu.label_menu)}
                        className="flex items-center justify-center"
                      >
                        {menu.label_menu}
                      </Link>
                      {menu.has_child === "1" && (
                        <FaCaretDown className="ml-1" size={16} />
                      )}
                    </div>
                    {menu.has_child === "1" && subMenuOpen === menu.id_menu && (
                      <SubMenu
                        isOpen={subMenuOpen === menu.id_menu}
                        links={getSubMenu(menu.id_menu)}
                        handleTabClick={handleTabClick}
                        getSubMenu={getSubMenu}
                      />
                    )}
                  </li>
                ))}
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Topbar;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// const pages = [
//   { name: 'About Us', link: 'about-us' },
//   { name: 'Products', link: '#' },
//   { name: 'Industries Served', link: '#', hasSubmenu: true },
//   { name: 'Projects', link: '#' },
//   { name: 'Resources', link: 'downloads' },
//   { name: 'Sustainability', link: 'portfolio' },
//   { name: 'Contact Us', link: 'contact-us' },
//   { name: 'Careers', link: 'career' },
// ];

// const subpages = [
//   { name: 'Construction', link: 'construction' },
//   { name: 'Interior Design', link: 'interior-design' },
//   { name: 'Architecture', link: 'architecture' },
//   { name: 'Custom Projects', link: 'custom-projects' },
// ];


// const settings = [
//   { name: 'Profile', link: '#' },
//   { name: 'Account', link: '#' },
//   { name: 'Dashboard', link: '#' },
//   { name: 'Logout', link: '#' },
// ];

// function Topbar() {
//   const [isNavOpen, setIsNavOpen] = useState(false);
//   const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
//   const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

//   return (
//     <div className="sticky top-0 z-50 flex flex-col  px-4 lg:px-8">

//     <nav className="bg-green-600 text-white sticky top-0 z-50 ">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex items-center justify-between h-16">
//           {/* Logo */}
//           <div className="flex-shrink-0">
//             <Link to="/" className="text-2xl font-bold tracking-wide">
//               NepWood
//             </Link>
//           </div>

//            <div className="hidden md:flex space-x-4">
//             {pages.map((page) =>
//               page.hasSubmenu ? (
//                 <div
//                   key={page.name}
//                   className="relative group"
//                   onMouseEnter={() => setIsSubmenuOpen(true)}
//                   onMouseLeave={() => setIsSubmenuOpen(false)}
//                 >
//                   <button className="flex items-center space-x-1">
//                     {page.name} <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path d="M5.23 7.21a.75.75 0 011.05.02l2.72 2.92 2.72-2.92a.75.75 0 011.05-.02.75.75 0 01-.02 1.05L9.5 10.8a.75.75 0 01-1.06 0L5.21 8.26a.75.75 0 01-.02-1.05z" /></svg>
//                   </button>
                  
//                    <div
//                     className={`absolute left-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 ${
//                       isSubmenuOpen ? 'block' : 'hidden'
//                     }`}
//                   >
//                     {subpages.map((subpage) => (
//                       <Link
//                         key={subpage.name}
//                         to={subpage.link}
//                         className="block px-4 py-2 hover:bg-gray-200"
//                       >
//                         {subpage.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   key={page.name}
//                   to={page.link}
//                   className="hover:text-gray-400"
//                 >
//                   {page.name}
//                 </Link>
//               )
//             )}
//           </div> 

       
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsNavOpen(!isNavOpen)}
//               className="text-gray-300 hover:text-white focus:outline-none"
//             >
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16m-7 6h7"
//                 />
//               </svg>
//             </button>
//           </div>

          
//           <div className="relative">
//             <button
//               onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
//               className="flex items-center focus:outline-none"
//             >
//               <img
//                 className="h-8 w-8 rounded-full"
//                 src="/static/images/avatar/2.jpg"
//                 alt="User Avatar"
//               />
//             </button>
//             <div
//               className={`absolute right-0 mt-2 w-48 bg-white text-black rounded-md shadow-lg py-2 ${
//                 isUserMenuOpen ? 'block' : 'hidden'
//               }`}
//             >
//               {settings.map((setting) => (
//                 <Link
//                   key={setting.name}
//                   to={setting.link}
//                   className="block px-4 py-2 hover:bg-gray-200"
//                 >
//                   {setting.name}
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </div>

       
//          <div className={`md:hidden ${isNavOpen ? 'block' : 'hidden'}`}>
//           <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
//             {pages.map((page) =>
//               page.hasSubmenu ? (
//                 <div
//                   key={page.name}
//                   className="relative"
//                   onClick={() => setIsSubmenuOpen(!isSubmenuOpen)}
//                 >
//                   <button className="flex items-center w-full">
//                     {page.name} <svg className="w-4 h-4 ml-1" fill="currentColor" viewBox="0 0 20 20"><path d="M5.23 7.21a.75.75 0 011.05.02l2.72 2.92 2.72-2.92a.75.75 0 011.05-.02.75.75 0 01-.02 1.05L9.5 10.8a.75.75 0 01-1.06 0L5.21 8.26a.75.75 0 01-.02-1.05z" /></svg>
//                   </button> 
                 
//                  <div
//                     className={`pl-4 ${isSubmenuOpen ? 'block' : 'hidden'}`}
//                   >
//                     {subpages.map((subpage) => (
//                       <Link
//                         key={subpage.name}
//                         to={subpage.link}
//                         className="block px-4 py-2 hover:bg-gray-200"
//                       >
//                         {subpage.name}
//                       </Link>
//                     ))}
//                   </div>
//                 </div>
//               ) : (
//                 <Link
//                   key={page.name}
//                   to={page.link}
//                   className="block px-3 py-2 hover:text-gray-400"
//                 >
//                   {page.name}
//                 </Link>
//               )
//             )}
//           </div>
//         </div>
//       </div>
//     </nav>
//     </div>
//   );
// }

// export default Topbar; 



{/* // // Topbar.jsx
// import React from 'react';
// import Logo from "../../assets/Logo.png"
// const Topbar = () => { */}
{/* //   return (
//     <div className="sticky top-0 p-4 text-white flex justify-between items-center">
//       {/* <img src={Logo} alt="" className="w-[20rem]" /> */}
//       {/* <button onClick={toggleSidebar} className="text-2xl lg:hidden">
//         ☰
      // </button> */}
      {/* <h1 className="text-3xl text-[#3d8e03]">Nep Wood</h1>
    </div>
  );
}; 

export default Topbar; */}
