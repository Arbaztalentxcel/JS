// //BUTTON FOR CAREER MAPPING 
import React, { useState } from "react";
import { HiMenuAlt3 } from "react-icons/hi";
import { MdOutlineDashboard } from "react-icons/md";
// import { RiSettings4Line } from "react-icons/ri";
// import { TbReportAnalytics } from "react-icons/tb";
import { AiOutlineUser, AiOutlineHeart } from "react-icons/ai";
// import { FiMessageSquare, FiFolder, FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";

const Career = () => {
  const menus = [
    { name: "Career Mapping", link: "/", icon: MdOutlineDashboard },
    { name: "Assessment", link: "/upload", icon: AiOutlineUser },
    // { name: "messages", link: "/", icon: FiMessageSquare },
    // { name: "analytics", link: "/", icon: TbReportAnalytics, margin: true },
    // { name: "File Manager", link: "/", icon: FiFolder },
    // { name: "Cart", link: "/", icon: FiShoppingCart },
    // { name: "Saved", link: "/", icon: AiOutlineHeart, margin: true },
    // { name: "Setting", link: "/", icon: RiSettings4Line },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`bg-[#FAFAFB] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-dark-100 px-4`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-light-800 rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 tran slate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="m-3 text-xl text-gray-900 font-semibold">
        REACT dfsdf
      </div>
    </section>
  );
};

export default Career;

// BUTTON FOR ASSESSMENT 

// import React, { useState } from "react";
// import { HiMenuAlt3 } from "react-icons/hi";
// import { MdOutlineDashboard } from "react-icons/md";
// import { AiOutlineUser } from "react-icons/ai";
// import { Link } from "react-router-dom";
// import Assessment from "../pages/Assessment"; // Import the Assessment component

// const Career = () => {
//   const [open, setOpen] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false); // State for modal visibility

//   const menus = [
//     { name: "Career Mapping", link: "/home", icon: MdOutlineDashboard },
//     { name: "Assessment", link: "/", action: () => setIsModalOpen(true), icon: AiOutlineUser }, // Open modal on click
//   ];

//   return (
//     <section className="flex gap-6">
//       <div
//         className={`bg-[#FAFAFB] min-h-screen ${open ? "w-72" : "w-16"} duration-500 text-dark-100 px-4`}
//       >
//         <div className="py-3 flex justify-end">
//           <HiMenuAlt3
//             size={26}
//             className="cursor-pointer"
//             onClick={() => setOpen(!open)}
//           />
//         </div>
//         <div className="mt-4 flex flex-col gap-4 relative">
//           {menus.map((menu, i) => (
//             <button
//               key={i}
//               onClick={menu.action || (() => {})} // Use action or do nothing
//               className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-light-800 rounded-md`}
//             >
//               <div>{React.createElement(menu.icon, { size: "20" })}</div>
//               <h2
//                 style={{ transitionDelay: `${i + 3}00ms` }}
//                 className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}
//               >
//                 {menu.name}
//               </h2>
//               <h2
//                 className={`${
//                   open && "hidden"
//                 } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
//               >
//                 {menu.name}
//               </h2>
//             </button>
//           ))}
//         </div>
//       </div>
//       <div className="m-3 text-xl text-gray-900 font-semibold">Career Mapping Page</div>
      
//       {/* Modal for Assessment */}
//       <Assessment isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </section>
//   );
// };

// export default Career;


// //BOTH MERGE

// import React, { useState } from "react";
// import { HiMenuAlt3 } from "react-icons/hi";
// import { MdOutlineDashboard } from "react-icons/md";
// import { AiOutlineUser } from "react-icons/ai";
// import { Link, useHistory } from "react-router-dom";
// import Assessment from "../pages/Assessment"; // Import the Assessment component

// const CareerComponent = () => {
//   const history = useHistory();
//   const [open, setOpen] = useState(true);
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const menus = [
//     { name: "Career Mapping", link: "/career", icon: MdOutlineDashboard },
//     { name: "Assessment", action: () => setIsModalOpen(true), icon: AiOutlineUser },
//   ];

//   return (
//     <section className="flex gap-6">
//       <div className={`bg-[#FAFAFB] min-h-screen ${open ? "w-72" : "w-16"} duration-500 text-dark-100 px-4`}>
//         <div className="py-3 flex justify-end">
//           <HiMenuAlt3 size={26} className="cursor-pointer" onClick={() => setOpen(!open)} />
//         </div>
//         <div className="mt-4 flex flex-col gap-4 relative">
//           {menus.map((menu, i) => (
//             <button
//               key={i}
//               onClick={() => {
//                 if (menu.link) {
//                   console.log(`Navigating to ${menu.name}`);
//                   history.push(menu.link); // Navigate if link exists
//                 } else if (menu.action) {
//                   menu.action(); // Call action if it exists
//                 }
//               }}
//               className={`group flex items-center text-sm gap-3.5 font-medium p-2 hover:bg-light-800 rounded-md`}
//             >
//               <div>{React.createElement(menu.icon, { size: "20" })}</div>
//               <h2
//                 style={{ transitionDelay: `${i + 3}00ms` }}
//                 className={`whitespace-pre duration-500 ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}
//               >
//                 {menu.name}
//               </h2>
//               <h2
//                 className={`${
//                   open ? "hidden" : ""
//                 } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
//               >
//                 {menu.name}
//               </h2>
//             </button>
//           ))}
//         </div>
//       </div>
//       <div className="m-3 text-xl text-gray-900 font-semibold">Career Mapping Page</div>

//       {/* Modal for Assessment */}
//       <Assessment isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
//     </section>
//   );
// };

// export default CareerComponent; // Export the renamed component

