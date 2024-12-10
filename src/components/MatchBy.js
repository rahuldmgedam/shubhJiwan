// import React from "react";
// import image1 from '../images/profile1.jpg'
// import image2 from '../images/profile2.jpg'
// import image3 from '../images/profile3.jpg'
// import image4 from '../images/profile4.jpg'
// import image5 from '../images/profile5.jpg'
// const MatchedBy = () => {
//   //   const matches = [
//   //     {
//   //       image:
//   //         "https://via.placeholder.com/600x400", // Replace with the actual image URL
//   //       names: "Mayank Raj & Suneeta Tiwari",
//   //       message:
//   //         "Thank you Jeevansathi.com! You guys gave me the best gift of my life, my soulmate...",
//   //       marriageDate: "Marriage Date: 09 December 2020",
//   //     },
//   //     {
//   //       image:
//   //         "https://via.placeholder.com/600x400", // Replace with the actual image URL
//   //       names: "Nishant & Prerna",
//   //       marriageDate: "Marriage Date: 07 January 2021",
//   //     },
//   //     {
//   //       image:
//   //         "https://via.placeholder.com/600x400", // Replace with the actual image URL
//   //       names: "Naveen & Soniya",
//   //       marriageDate: "Marriage Date: 21 February 2021",
//   //     },
//   //   ];
//   const matches = [
//     {
//       image:image1, 
//       names: "Mayank Raj & Suneeta Tiwari",
//       message:
//         "Thank you Shubh Jiwan You guys gave me the best gift of my life, my soulmate...",
//       marriageDate: "Marriage Date: 09 December 2020",
//     },
//     {
//       image:image4,
//       message:
//       "Thank you Shubh Jiwan You guys gave me the best gift of my life, my soulmate...",
//       names: "Nishant & Prerna",
//       marriageDate: "Marriage Date: 07 January 2021",
//     },
//     {
//       image:image5, 
//       names: "Naveen & Soniya",
//       message:
//       "Thank you Shubh Jiwan You guys gave me the best gift of my life, my soulmate...",
//       marriageDate: "Marriage Date: 21 February 2021",
//     },
//     {
//       image:image2, 
//       names: "Naveen & Soniya",
//       message:
//       "Thank you Shubh Jiwan You guys gave me the best gift of my life, my soulmate...",
//       marriageDate: "Marriage Date: 21 February 2021",
//     },
//     {
//       image:image3, 
//       names: "Naveen & Soniya",
//       message:
//       "Thank you Shubh Jiwan You guys gave me the best gift of my life, my soulmate...",
//       marriageDate: "Marriage Date: 21 February 2021",
//     },
//   ];

//   return (
//     <div className="bg-gray-50 py-10 mb-10 mt-10">
//       <div className="max-w-6xl mx-auto px-4 text-center">
//         <h2 className="text-3xl font-bold text-gray-500 mb-6 font-serif">
//           Success Stories by <span className="text-blue-500">SHUBH JIWAN</span>
//         </h2>
//         <img src="" alt="" />
//         <div className="flex space-x-6 overflow-x-auto no-scrollbar">
//           {matches.map((match, index) => (
//             <div
//               key={index}
//               className="relative flex-shrink-0 w-80 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
//             >
//               <img
//                 src={match.image}
//                 alt={match.names}
//                 className="w-full h-56 object-fit"
//               />
//               <div
//                 className={`absolute inset-0 bg-blue-500 bg-opacity-80 p-4 flex flex-col justify-between ${
//                   index === 0 ? "opacity-0" : "opacity-0"
//                 } hover:opacity-100 transition-opacity duration-300`}
//               >
//                 {/* <p className="text-white text-sm">{match.message}</p> */}
//                 <p className="text-white text-lg font-bold">{match.message}</p>
//                 {/* <p className="text-white text-xs">{match.marriageDate}</p> */}
//                 {/* <button className="mt-4 text-white underline">View More</button> */}
//               </div>
//               <div className=" hidden p-4 bg-white">
//                 {/* <p className="text-gray-800 font-bold">{match.names}</p> */}
//                 {/* <p className="text-gray-600 text-sm">{match.marriageDate}</p> */}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MatchedBy;

import React, { useState, useEffect } from "react";
import image1 from "../images/profile1.jpg";
import image2 from "../images/profile2.jpg";
import image3 from "../images/profile3.jpg";
import image4 from "../images/profile4.jpg";
import image5 from "../images/profile5.jpg";

const MatchedBy = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const matches = [
    {
      image: image4,
      names: "Mayank Raj & Suneeta Tiwari",
      message:
        "Thank you Shubh Jiwan! You guys gave me the best gift of my life, my soulmate...",
      marriageDate: "Marriage Date: 09 December 2020",
    },
    {
      image: image5,
      names: "Nishant & Prerna",
      message:
        "We met on Shubh Jiwan, and it's been a dream come true. Forever grateful!",
      marriageDate: "Marriage Date: 07 January 2021",
    },
    {
      image: image1,
      names: "Naveen & Soniya",
      message:
        "Shubh Jiwan helped us find each other. A big thank you for changing our lives!",
      marriageDate: "Marriage Date: 21 February 2021",
    },
    {
      image: image2,
      names: "Rahul & Anjali",
      message:
        "Shubh Jiwan made our dreams come true. We found love and happiness here.",
      marriageDate: "Marriage Date: 15 March 2021",
    },
    {
      image: image3,
      names: "Akash & Pooja",
      message:
        "Thank you Shubh Jiwan for helping us meet and start a wonderful journey together!",
      marriageDate: "Marriage Date: 01 April 2021",
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? matches.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === matches.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Auto-scroll functionality
  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        handleNext();
      }, 3000); // Change slides every 3 seconds
      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <div
      className="bg-gray-50 py-10 mb-10 mt-10"
      onMouseEnter={() => setIsPaused(true)} // Pause auto-scroll on hover
      onMouseLeave={() => setIsPaused(false)} // Resume auto-scroll on mouse leave
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-2xl font-bold text-gray-500 mb-10 font-serif">
          Success Stories by <span className="text-[#6B46C1]">SHUBH JIWAN</span>
        </h3>

        <div className="relative">
          {/* Cards Container */}
          <div className="flex justify-center items-center">
            <div
              className="relative flex-shrink-0 w-80 h-96 rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300"
              key={matches[currentIndex].names}
            >
              <img
                src={matches[currentIndex].image}
                alt={matches[currentIndex].names}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-500 bg-opacity-80 p-6 flex flex-col justify-end opacity-0 hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-bold mb-2">
                  {matches[currentIndex].message}
                </p>
                <p className="text-white text-sm">{matches[currentIndex].marriageDate}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute inset-0 flex justify-between items-center px-4">
            <button
              onClick={handlePrev}
              className="p-2 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition duration-300"
            >
              ❮
            </button>
            <button
              onClick={handleNext}
              className="p-2 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-600 transition duration-300"
            >
              ❯
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchedBy;
