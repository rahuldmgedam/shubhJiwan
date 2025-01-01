// import { useState, useEffect } from "react";
// import { FaHeart } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import BrowseBy from "./BrowseBy";
// import logo from "../images/logo.png";
// import logo4 from "../images/logo4.svg"
// const Navbar = () => {
//   const [activeLink, setActiveLink] = useState("");

//   const handleScroll = () => {
//     const sections = document.querySelectorAll("section");
//     let currentSection = "";

//     sections.forEach((section) => {
//       const sectionTop = section.offsetTop;
//       const sectionHeight = section.clientHeight;

//       if (
//         window.scrollY >= sectionTop - 60 &&
//         window.scrollY < sectionTop + sectionHeight - 60
//       ) {
//         currentSection = section.getAttribute("id");
//       }
//     });

//     setActiveLink(currentSection);
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const linkStyle = (sectionId) => ({
//     position: "relative",
//     paddingBottom: "8px",
//     color: activeLink === sectionId ? "#f472b6" : "",
//     borderBottom: activeLink === sectionId ? "2px solid #f472b6" : "",
//     transition: "color 0.3s, border-bottom 0.3s",
//   });

//   const handleLinkClick = (e, sectionId) => {
//     e.preventDefault();
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth", block: "start" });
//     }
//   };
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <nav className="bg-white shadow-lg p-2 fixed w-full z-50">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="flex">
//           <div className="flex">
//             {" "}
//             <img className="h-20 w-24" src={logo} alt="" />
//           </div>
//           <div className="flex justify-center">
//             <a
//               href="/"
//               className="text-2xl mt-4 font-bold text-pink-400 flex items-center"
//             >
//               SHUBH JIWAN
//             </a>
//           </div>
//         </div>

//         <nav className="bg-white shadow-md">
//           <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//             <div className="flex justify-between items-center h-16">
         

//               {/* Hamburger Menu for Mobile */}
//               <div className="md:hidden">
//                 <button
//                   onClick={toggleMenu}
//                   className="text-gray-700 hover:text-pink-600 focus:outline-none"
//                 >
//                   <svg
//                     className="w-6 h-6"
//                     xmlns="http://www.w3.org/2000/svg"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     {isMenuOpen ? (
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M6 18L18 6M6 6l12 12"
//                       />
//                     ) : (
//                       <path
//                         strokeLinecap="round"
//                         strokeLinejoin="round"
//                         strokeWidth={2}
//                         d="M4 6h16M4 12h16M4 18h16"
//                       />
//                     )}
//                   </svg>
//                 </button>
//               </div>

//               {/* Desktop Menu */}
//               <div className="hidden md:flex space-x-6 items-center uppercase text-md font-semibold">
//                 <Link
//                   to="/"
//                   className="text-gray-700 hover:text-pink-600 transition duration-300 hover:underline"
//                 >
//                   Home
//                 </Link>
//                 <Link
//                   to="/profiles"
//                   className="text-gray-700 hover:text-pink-600 transition duration-300 hover:underline"
//                 >
//                   Profiles
//                 </Link>
//                 <Link
//                   to="/memberships"
//                   className="text-gray-700 hover:text-pink-600 transition duration-300 hover:underline"
//                 >
//                   Memberships
//                 </Link>
//                 <Link
//                   to="/contact"
//                   className="text-gray-700 hover:text-pink-600 transition duration-300 hover:underline"
//                 >
//                   Contact
//                 </Link>
//                 <div className=" hidden relative group">
//                   <button className="text-gray-700 hover:text-pink-600 transition duration-300 uppercase focus:outline-none">
//                     Browse By
//                   </button>
//                   <div className="absolute left-0 mt-2 bg-white border shadow-lg rounded-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-2 transition-all duration-300">
//                     <Link
//                       to="/browse-age"
//                       className="block px-4 py-2 text-gray-700 hover:bg-pink-100 hover:text-pink-600"
//                     >
//                       Age
//                     </Link>
//                     <Link
//                       to="/browse-religion"
//                       className="block px-4 py-2 text-gray-700 hover:bg-pink-100 hover:text-pink-600"
//                     >
//                       Religion
//                     </Link>
//                     <Link
//                       to="/browse-location"
//                       className="block px-4 py-2 text-gray-700 hover:bg-pink-100 hover:text-pink-600"
//                     >
//                       Location
//                     </Link>
//                   </div>
//                 </div>
//                 <Link to="/login">
//                   <button className="bg-pink-400 text-white px-4 py-1 rounded-lg uppercase hover:bg-pink-700 hover:shadow-lg transition duration-300">
//                     Login
//                   </button>
//                 </Link>
//                 <Link to="/register">
//                   <button className="bg-pink-400 text-white px-4 py-1 rounded-lg uppercase hover:bg-pink-700 hover:shadow-lg transition duration-300">
//                     Register
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           </div>

//           {/* Mobile Menu */}
//           {isMenuOpen && (
//             <div className="md:hidden bg-gray-50 border-t">
//               <ul className="space-y-4 py-4 px-4">
//                 <li>
//                   <Link
//                     to="/"
//                     onClick={toggleMenu}
//                     className="block text-gray-700 hover:bg-pink-100 hover:text-pink-600 px-4 py-2 rounded-lg"
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/profiles"
//                     onClick={toggleMenu}
//                     className="block text-gray-700 hover:bg-pink-100 hover:text-pink-600 px-4 py-2 rounded-lg"
//                   >
//                     Profiles
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/memberships"
//                     onClick={toggleMenu}
//                     className="block text-gray-700 hover:bg-pink-100 hover:text-pink-600 px-4 py-2 rounded-lg"
//                   >
//                     Memberships
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/contact"
//                     onClick={toggleMenu}
//                     className="block text-gray-700 hover:bg-pink-100 hover:text-pink-600 px-4 py-2 rounded-lg"
//                   >
//                     Contact
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/login"
//                     onClick={toggleMenu}
//                     className="block text-center bg-pink-600 text-white px-4 py-2 rounded-lg"
//                   >
//                     Login
//                   </Link>
//                 </li>
//                 <li>
//                   <Link
//                     to="/register"
//                     onClick={toggleMenu}
//                     className="block text-center bg-pink-600 text-white px-4 py-2 rounded-lg"
//                   >
//                     Register
//                   </Link>
//                 </li>
//               </ul>
//             </div>
//           )}
//         </nav>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState, useEffect } from "react";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    const sections = document.querySelectorAll("section");
    let currentSection = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (
        window.scrollY >= sectionTop - 60 &&
        window.scrollY < sectionTop + sectionHeight - 60
      ) {
        currentSection = section.getAttribute("id");
      }
    });

    setActiveLink(currentSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-2">
        {/* Logo and Brand Name */}
        <div className="flex items-center space-x-2">
          <img className="h-12 w-16" src={logo} alt="Logo" />
          <a href="/" className="text-2xl font-bold text-pink-400">
            SHUBH JIWAN
          </a>
        </div>

        {/* Hamburger Menu for Mobile */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-gray-700 hover:text-pink-600 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6 items-center tracking-wider uppercase text-sm font-semibold">
          <Link
            to="/"
            className={`text-gray-700 hover:text-pink-600 transition duration-300 ${
              activeLink === "home" ? "text-pink-600" : ""
            }`}
          >
            Home
          </Link>
          <Link
            to="/profiles"
            className="text-gray-700 hover:text-pink-600 transition duration-300"
          >
            Profiles
          </Link>
          {/* <Link
            to="/memberships"
            className="text-gray-700 hover:text-pink-600 transition duration-300"
          >
            Memberships
          </Link> */}
          <Link
            to="/contact"
            className="text-gray-700 hover:text-pink-600 transition duration-300"
          >
            Contact
          </Link>
          <Link to="/login">
            <button className=" border-2 border-pink-400 text-pink-400 px-4 py-1 rounded-lg uppercase hover:bg-pink-400 hover:text-white hover:shadow-lg transition duration-300">
              Login
            </button>
          </Link>
          <Link className="" to="/register">
            <button className="border-2 border-pink-400 text-pink-400 px-4 py-1 rounded-lg uppercase hover:bg-pink-400 hover:text-white hover:shadow-lg transition duration-300">
              Register
            </button>
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <ul className="space-y-4 py-4 px-6">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="block text-gray-700 hover:bg-pink-100 hover:text-pink-600 px-4 py-2 rounded-lg"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/profiles"
                onClick={toggleMenu}
                className="block text-gray-700 hover:bg-pink-100 hover:text-pink-600 px-4 py-2 rounded-lg"
              >
                Profiles
              </Link>
            </li>
            <li>
              <Link
                to="/memberships"
                onClick={toggleMenu}
                className="block text-gray-700 hover:bg-pink-100 hover:text-pink-600 px-4 py-2 rounded-lg"
              >
                Memberships
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="block text-gray-700 hover:bg-pink-100 hover:text-pink-600 px-4 py-2 rounded-lg"
              >
                Contact
              </Link>
            </li>
            <li>
              <Link
                to="/login"
                onClick={toggleMenu}
                className="block text-center bg-pink-600 text-white px-4 py-2 rounded-lg"
              >
                Login
              </Link>
            </li>
            <li>
              <Link
                to="/register"
                onClick={toggleMenu}
                className="block text-center bg-pink-600 text-white px-4 py-2 rounded-lg"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

