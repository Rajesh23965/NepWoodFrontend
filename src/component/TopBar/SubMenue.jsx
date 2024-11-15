import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa";

const SubMenu = ({ isOpen, links, handleTabClick, getSubMenu }) => {
  const [subChildMenuOpen, setSubChildMenuOpen] = useState(null);

  const generateLink = (link) => (link.url_menu === "#" ? "/" : `/${link.url_menu}`);

  const handleSubChildToggle = (childId) => {
    setSubChildMenuOpen(subChildMenuOpen === childId ? null : childId);
  };

  return (
    isOpen && links.length > 0 && (
      <ul className="absolute left-0 w-full md:w-60 bg-white text-gray-800 p-2 rounded-md shadow-lg border">
        {links.map((link) => (
          <li key={link.label_menu} className="relative">
            <div
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer flex justify-between items-center"
              onClick={() => handleTabClick(link.label_menu)}
            >
              <Link to={generateLink(link)} className="hover:text-blue-500">
                {link.label_menu}
              </Link>
              {link.has_child === "1" && (
                <FaAngleDown
                  className="ml-2 text-gray-400 hover:text-blue-500"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleSubChildToggle(link.label_menu);
                  }}
                />
              )}
            </div>
            {link.has_child === "1" && subChildMenuOpen === link.label_menu && (
              <ul className="absolute top-full left-full md:left-0 w-full bg-white text-gray-800 p-2 rounded-md shadow-lg border">
                {getSubMenu(link.id_menu).map((subLink) => (
                  <li key={subLink.label_menu} className="px-4 py-2 hover:bg-gray-100">
                    <Link to={generateLink(subLink)}>{subLink.label_menu}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    )
  );
};

export default SubMenu;

// import React from "react";
// import { Link } from "react-router-dom";

// const SubMenue = ({ isOpen, links, handleTabClick }) => {
//   const generateLink = (link) => {
//     return link.url_menu === "#"
//       ? "/"
//       : `/${
//           link.content_type === 1
//             ? `page?id=${link.content_id}`
//             : link.content_type === 2
//             ? `post?id=${link.content_id}`
//             : link.content_type === 3
//             ? `category?id=${link.content_id}`
//             : link.content_type === 4
//             ? `get-employee-list=${link.content_id}`
//             : link.content_type === 5
//             ? `/${link.url_menu}`
//             : ""
//         }`;
//   };

//   return (
//     isOpen && (
//       <div className="absolute bg-white border border-gray-300 rounded-md shadow-lg mt-2">
//         <ul>
//           {links.map((link) => (
//             <li key={link.content_id}>
//               <Link
//                 to={generateLink(link)}
//                 onClick={() => handleTabClick(link.content_id)} 
//                 className="block px-4 py-2 hover:bg-gray-200"
//               >
//                 {link.label_menu}
//               </Link>
//             </li>
//           ))}
//         </ul>
//       </div>
//     )
//   );
// };

// export default SubMenue;
