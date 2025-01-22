
// import React, { useState } from "react";

// import p2 from '../images/popular2.jpg'
// import p3 from '../images/popular3.jpg'
// import p1 from '../images/popular1.jpg'
// const BrideFroomCards = () => {
//   const profiles = [
//     {
//       id: "Shital mahadev pawar",
//       age: 30,
//       height: "5' 04\" (162 cm)",
//       gender: "Female",
//       religion: "Christian, Catholic, Malayalam",
//       location: "INDIA",
//       description:
//         "I am currently living in Maharashtra. I am a smart and dynamic girl who respects her culture very much. I belong to a simple Malay...",
//       image:p2,
//       fullDetails:
//         "I come from a well-cultured and modern family with strong values. My hobbies include reading, traveling, and cooking. Looking for a life partner who is understanding, kind, and has strong family values.",
//     },
//     {
//       id: "Dr. Anjali dipak raut",
//       age: 28,
//       height: "5' 03\" (160 cm)",
//       gender: "Female",
//       religion: "Hindu, Kunbi, Marathi",
//       location: "INDIA",
//       description:
//         "I am currently living in Maharashtra. I am a smart and dynamic girl who respects her culture very much. I belong to a simple Mara...",
//       image:p3,
//       fullDetails:
//         "I am a cheerful individual who believes in simplicity and positivity. I enjoy exploring new cuisines and spending quality time with family. Seeking someone who is optimistic and has a good sense of humor.",
//     },
//     {
//             id: "Ashwin anandrao jagtap", 
//             age: 25,
//             height: "5' 02\" (157 cm)",
//             gender: "Female",
//             religion: "Christian, Jacobite, Malayalam",
//             location: "INDIA",
//             description:
//               "I am currently living in Maharashtra. I am a smart and dynamic girl who respects her culture very much. I belong to a simple Malay...",
//             image: p1
//           },
    
//   ];

//   const [selectedProfile, setSelectedProfile] = useState(null);

//   const handleViewProfile = (profile) => {
//     setSelectedProfile(profile);
//   };

//   const handleCloseModal = () => {
//     setSelectedProfile(null);
//   };

//   return (
//     <div className=" bg-gray-100 mt-10 mb-20">
//       <div className="max-w-7xl mx-auto p-4">
//         <div className="flex justify-between items-center mb-4">
//           <h1 className="text-3xl font-bold font-san text-blue-500 text-center mb-6">Popular Profiles</h1>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {profiles.map((profile, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center "
//             >
//               <img
//                 src={profile.image}
//                 alt={profile.id}
//                 className="w-32 h-32 rounded-full mb-4"
//               />
//               <h2 className="text-lg font-medium">{profile.id}</h2>
//               <p className="text-sm text-gray-500">
//                 {profile.age}yrs / {profile.height}
//               </p>
//               {/* <p className="text-sm text-gray-500">{profile.gender}</p>
//               <p className="text-sm text-gray-500">{profile.religion}</p>
//               <p className="text-sm text-gray-500">{profile.location}</p>
//               <p className="text-sm text-gray-600 mt-2">{profile.description}</p> */}
//               <div className="mt-4 flex gap-2">
//                 <button className="bg-blue-500 text-white px-4 py-2 rounded">
//                   Send Message
//                 </button>
//                 <button
//                   onClick={() => handleViewProfile(profile)}
//                   className="bg-green-500 text-white px-4 py-2 rounded"
//                 >
//                   View Profile
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Modal for Viewing Profile */}
//       {selectedProfile && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full relative">
//             <button
//               onClick={handleCloseModal}
//               className="absolute top-2 right-2 text-gray-500 hover:text-black"
//             >
//               ✖
//             </button>
//             <img
//               src={selectedProfile.image}
//               alt={selectedProfile.id}
//               className="w-32 h-32 rounded-full mx-auto mb-4"
//             />
//             <h2 className="text-lg font-semibold text-center">
//               {selectedProfile.id}
//             </h2>
//             <p className="text-sm text-gray-600 text-center mt-2">
//               {selectedProfile.age}yrs / {selectedProfile.height}
//             </p>
//             <p className="text-sm text-gray-500 text-center">
//               {selectedProfile.gender}, {selectedProfile.religion}
//             </p>
//             <p className="text-sm text-gray-500 text-center">
//               {selectedProfile.location}
//             </p>
//             <p className="text-sm text-gray-600 mt-4">
//               {selectedProfile.fullDetails}
//             </p>
//             <div className="mt-6 text-center">
//               <p className="text-red-500 font-medium">
//                 Please log in to view full details!
//               </p>
//               <button className="bg-red-500 text-white px-4 py-2 rounded mt-4">
//                 Log In
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default BrideFroomCards;

import React, { useState } from "react";

import p2 from "../images/popular2.jpg";
import p3 from "../images/popular3.jpg";
import p1 from "../images/popular1.jpg";
import { useNavigate } from "react-router-dom";

const BrideFroomCards = () => {
  const navigate = useNavigate()
  const profiles = [
    {
      id: "Shital Mahadev Pawar",
      age: 30,
      height: "5' 04\" (162 cm)",
      gender: "Female",
      religion: "Christian, Catholic, Malayalam",
      location: "INDIA",
      description:
        "I am currently living in Maharashtra. I am a smart and dynamic girl who respects her culture very much. I belong to a simple Malay...",
      image: p2,
      fullDetails:
        "I come from a well-cultured and modern family with strong values. My hobbies include reading, traveling, and cooking. Looking for a life partner who is understanding, kind, and has strong family values.",
    },
    {
      id: "Dr. Anjali Dipak Raut",
      age: 28,
      height: "5' 03\" (160 cm)",
      gender: "Female",
      religion: "Hindu, Kunbi, Marathi",
      location: "INDIA",
      description:
        "I am currently living in Maharashtra. I am a smart and dynamic girl who respects her culture very much. I belong to a simple Mara...",
      image: p3,
      fullDetails:
        "I am a cheerful individual who believes in simplicity and positivity. I enjoy exploring new cuisines and spending quality time with family. Seeking someone who is optimistic and has a good sense of humor.",
    },
    {
      id: "Ashwin Anandrao Jagtap",
      age: 25,
      height: "5' 02\" (157 cm)",
      gender: "Female",
      religion: "Christian, Jacobite, Malayalam",
      location: "INDIA",
      description:
        "I am currently living in Maharashtra. I am a smart and dynamic girl who respects her culture very much. I belong to a simple Malay...",
      image: p1,
    },
  ];

  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleViewProfile = (profile) => {
    setSelectedProfile(profile);
  };

  const handleCloseModal = () => {
    setSelectedProfile(null);
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-2xl uppercase font-bruno text-[#0069a7] text-center mb-8">
          Popular Profiles 
        </h1>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center hover:shadow-xl hover:scale-105 transition-transform duration-300"
            >
              <img
                src={profile.image}
                alt={profile.id}
                className="w-40 h-40 rounded-full border-4 border-blue-200 shadow-md mb-4 object-cover"
              />
              <h2 className="text-xl font-semibold text-gray-800">
                {profile.id}
              </h2>
              <p className="text-sm text-gray-500 mb-2">
                {profile.age} yrs / {profile.height}
              </p>
              <p className="text-sm text-gray-600 text-center italic">
                {profile.description}
              </p>
              <div className="mt-4 flex space-x-4">
                <button className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 transition">
                  Send Message
                </button>
                <button
                  onClick={() => handleViewProfile(profile)}
                  className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 transition"
                >
                  View Profile
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedProfile && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full relative">
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-black text-lg"
            >
              ✖
            </button>
            <img
              src={selectedProfile.image}
              alt={selectedProfile.id}
              className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-blue-300 shadow-md object-cover"
            />
            <h2 className="text-xl font-semibold text-center text-gray-800">
              {selectedProfile.id}
            </h2>
            <p className="text-sm text-gray-600 text-center mt-2">
              {selectedProfile.age} yrs / {selectedProfile.height}
            </p>
            <p className="text-sm text-gray-500 text-center">
              {selectedProfile.gender}, {selectedProfile.religion}
            </p>
            <p className="text-sm text-gray-500 text-center">
              {selectedProfile.location}
            </p>
            <p className="text-sm text-gray-600 mt-4 text-center">
              {selectedProfile.fullDetails}
            </p>
            <div className="mt-6 text-center">
              <p className="text-red-500 font-medium">
                Please log in to view full details!
              </p>
              <button onClick={()=>navigate("/login")} className="bg-red-500 text-white px-6 py-2 rounded shadow hover:bg-red-600 transition mt-4">
                Log In 
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BrideFroomCards;
