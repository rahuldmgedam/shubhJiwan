import React, { useState } from "react";

const BrowseBy = () => {
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isHelpOpen, setIsHelpOpen] = useState(false);
  const [isMotherTongueOpen, setIsMotherTongueOpen] = useState(false);

  return (
    <div className="">
      <div className="flex justify-between">
        {/* Browse Profiles By */}
        <div
          className="relative"
          onMouseEnter={() => setIsBrowseOpen(true)}
          onMouseLeave={() => setIsBrowseOpen(false)}
        >
          <button className="font-semibold text-lg hover:text-red-400">
            BROWSE PROFILES BY
          </button>
          {isBrowseOpen && (
            <div className="absolute  bg-[#E6E6E6] w-64 rounded-md shadow-md  z-10">
              <ul>
                <li
                  className="px-4 py-2 hover:bg-red-500 cursor-pointer"
                  onMouseEnter={() => setIsMotherTongueOpen(true)}
                  onMouseLeave={() => setIsMotherTongueOpen(false)}
                >
                  Mother Tongue
                  {isMotherTongueOpen && (
                    <div className="absolute left-full top-0 bg-[#E6E6E6] w-40 rounded-md shadow-md">
                      <ul>
                        <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">
                          Tamil
                        </li>
                        <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">
                          Hindi
                        </li>
                        <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">
                          Punjabi
                        </li>
                        <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">
                          Bengali
                        </li>
                        <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">
                          Telugu
                        </li>
                        <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">
                          Marathi
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">
                  Caste
                </li>
                <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">
                  Religion
                </li>
                <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">
                  City
                </li>
                <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">
                  Occupation
                </li>
                <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">
                  State
                </li>
             
              </ul>
            </div>
          )}
        </div>

        {/* Search */}
        {/* <div
          className="relative"
          onMouseEnter={() => setIsSearchOpen(true)}
          onMouseLeave={() => setIsSearchOpen(false)}
        >
          <button className="font-semibold text-lg hover:text-red-400 ml-4">
            SEARCH 
          </button>
          {isSearchOpen && (
            <div className="absolute bg-[#E6E6E6] w-40 rounded-md shadow-md  mt-2 z-10">
              <ul>
                <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">
                  Search
                </li>
                <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">
                  Search by Profile Id
                </li>
              </ul>
            </div>
          )}
        </div> */}

        {/* Help */}
        {/* <div
          className="relative"
          onMouseEnter={() => setIsHelpOpen(true)}
          onMouseLeave={() => setIsHelpOpen(false)}
        >
          <button className="font-semibold text-lg hover:text-red-400">
            HELP
          </button>
          {isHelpOpen && (
            <div className="absolute bg-blue-800 w-40 rounded-md shadow-md mt-2 z-10">
              <ul>
                <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">
                  Hindi Delhi
                </li>
                <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">
                  Kannada
                </li>
                <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">Oriya</li>
                <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">Tamil</li>
                <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">Hindi MP</li>
                <li className="px-4 py-2 hover:bg-red-500 cursor-pointer">
                  Haryanvi
                </li>
              </ul>
            </div>
          )}
        </div> */}
      </div>
    </div>
  );
};

export default BrowseBy;
