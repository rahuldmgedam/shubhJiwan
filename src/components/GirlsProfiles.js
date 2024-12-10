// import React from "react";
// import g2 from '../images/girl2.jpg'
// import g3 from '../images/girl3.jpg'
// import g4 from '../images/girl4.jpg'
// import g1 from '../images/girl1.jpg'
// const GirlsProfiles = () => {
//   const profiles = [
//     {
//       id: "MI-1391468",
//       name: "Samiksha Chetan Shelke",
//       age: 25,
//       location: "Delhi, India",
//       profession: "Software Engineer",
//       image:
//        g2,
//     },
//     {
//       id: "MI-1389490",
//       name: "Mitali rajendra gaykwad",
//       age: 28,
//       location: "Mumbai, India",
//       profession: "Graphic Designer",
//       image:
//         g3,
//     },
//     {
//       id: "MI-1384560",
//       name: "Apurva chintaman bhosle",
//       age: 26,
//       location: "Kerala, India",
//       profession: "Doctor",
//       image:
//         g4,
//     },
//     {
//       id: "MI-1373342",
//       name: "Nidhi Manoj shinde",
//       age: 24,
//       location: "Bangalore, India",
//       profession: "Entrepreneur",
//       image:
//         g1,
//     },
//   ];

//   return (
//     <div className="bg-gray-100  py-8 mb-15 mt-15">
//       <div className="max-w-7xl mx-auto px-4">
//         <h1 className="text-3xl font-semibold text-center  text-[#6B46C1] mb-10">
//           Featured Girls Profiles
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {profiles.map((profile) => (
//             <div
//               key={profile.id}
//               className="bg-white shadow-lg rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-xl transition-all duration-300"
//             >
//               {/* Profile Image */}
//               <img
//                 src={profile.image}
//                 alt={profile.name}
//                 className="w-full h-48 object-fit"
//               />

//               {/* Profile Details */}
//               <div className="p-4 ">
//                 <h2 className="text-lg font-semibold text-gray-800">
//                   {profile.name}
//                 </h2>
//                 {/* <p className="text-sm text-gray-500">
//                   {profile.age} years old
//                 </p>
//                 <p className="text-sm text-gray-500">{profile.location}</p>
//                 <p className="text-sm text-gray-500">{profile.profession}</p> */}

//                 {/* Hover Button */}
//                 <div className="mt-4">
//                   <button className="w-full bg-[#4A4A4A] text-white py-2 rounded-lg text-sm uppercase hover:bg-pink-700 transition duration-300">
//                     View Profile
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default GirlsProfiles;

import React from "react";
import g2 from "../images/girl2.jpg";
import g3 from "../images/girl33.jpg";
import g4 from "../images/girl4.jpg";
import g1 from "../images/girl1.jpg";

const GirlsProfiles = () => {
  const profiles = [
    {
      id: "MI-1391468",
      name: "Samiksha Chetan Shelke",
      age: 25,
      location: "Delhi, India",
      profession: "Software Engineer",
      image: g2,
    },
   
    {
      id: "MI-1384560",
      name: "Apurva Chintaman Bhosle",
      age: 26,
      location: "Kerala, India",
      profession: "Doctor",
      image: g4,
    },
    {
      id: "MI-1389490",
      name: "Mitali Rajendra Gaykwad",
      age: 28,
      location: "Mumbai, India",
      profession: "Graphic Designer",
      image: g3,
    },
    {
      id: "MI-1373342",
      name: "Nidhi Manoj Shinde",
      age: 24,
      location: "Bangalore, India",
      profession: "Entrepreneur",
      image: g1,
    },
  ];

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-3xl font-semibold tracking-tight  text-center text-purple-700 mb-12">
          Featured Girls Profiles
        </h1>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.map((profile) => (
            <div
              key={profile.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              {/* Profile Image */}
              <div className="relative group">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-80 object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Profile Details */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {profile.name}
                </h2>
                <p className="text-sm text-gray-600">
                  {profile.age} years | {profile.profession}
                </p>
                <p className="text-sm text-gray-500">{profile.location}</p>

                {/* View Profile Button */}
                <div className="mt-4">
                  <button className="w-full bg-purple-600 text-white py-2 rounded-md text-sm font-medium uppercase hover:bg-purple-800 transition-all duration-300">
                    View Profile
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GirlsProfiles;
