import React, { useState } from "react";

const Navbar2 = () => {
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="https://via.placeholder.com/40" // Replace with your logo URL
            alt="Logo"
            className="h-10"
          />
          <div>
            <h1 className="text-xl font-bold text-red-600">MatrimonialsIndia.com</h1>
            <p className="text-sm text-green-600">Simplifying Matchmaking</p>
          </div>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6 items-center z-10">
          {/* Browse Profiles */}
          <div
            className="relative"
            onMouseEnter={() => setIsBrowseOpen(true)}
            onMouseLeave={() => setIsBrowseOpen(false)}
          >
            <button className="text-gray-700  hover:text-red-500 font-medium flex items-center">
              Browse Profiles
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4 ml-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {/* Dropdown */}
            {isBrowseOpen && (
              <div className="absolute left-0 top-full bg-gray-800 text-white rounded-md shadow-md w-64 py-2">
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-red-500 hover:text-white"
                >
                  Mother Tongue
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-red-500 hover:text-white"
                >
                  Caste
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-red-500 hover:text-white"
                >
                  Religion
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-red-500 hover:text-white"
                >
                  NRI
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 hover:bg-red-500 hover:text-white"
                >
                  Browse More...
                </a>
              </div>
            )}
          </div>

          {/* Member Login */}
          <a
            href="#"
            className="text-gray-700 hover:text-red-500 font-medium flex items-center"
          >
            Member Login
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5.121 17.804A1 1 0 015 17V9m6 8h.01M12 3v4m0 4v6m6-8v8m6-8V9m-4 12v-4m-4 0h.01"
              />
            </svg>
          </a>
        </nav>

        {/* Register Free Button */}
        <a
          href="#"
          className="bg-red-500 text-white px-4 py-2 rounded-md font-medium hover:bg-red-600"
        >
          REGISTER FREE
        </a>

        {/* Help Dropdown */}
        <div
          className="relative hidden md:block"
          onMouseEnter={() => setIsHelpOpen(true)}
          onMouseLeave={() => setIsHelpOpen(false)}
        >
          <button className="text-gray-700 hover:text-red-500 font-medium flex items-center">
            Help
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>
          {/* Dropdown */}
          {isHelpOpen && (
            <div className="absolute left-0 top-full bg-gray-800 text-white rounded-md shadow-md w-48 py-2">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-red-500 hover:text-white"
              >
                FAQ
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-red-500 hover:text-white"
              >
                Contact Support
              </a>
            </div>
          )}
        </div>

        {/* Mobile Menu */}
        <button className="md:hidden text-gray-700 focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Navbar2;
