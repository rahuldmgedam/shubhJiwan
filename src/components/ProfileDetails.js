// import React from "react";
// import Navbar from "./Navbar";
// import Footer from "./Footer";
// import b1 from "../images/boy4.jpg";
// // import b1 from "../images/boy4.jpg";
// import b2 from "../images/boy5.jpg";
// import b3 from "../images/boy6.jpg";
// import b4 from "../images/boy3.jpg";
// import g2 from "../images/girl2.jpg";
// import g3 from "../images/girl33.jpg";
// import g4 from "../images/girl4.jpg";
// const ProfileDetails = () => {
//   const profiles = [
//     {
//       id: "BI-1201340",
//       name: "Sarthak Gholap",
//       age: 32,
//       location: "Mumbai, India",
//       profession: "Architect",
//       image: b1,
//     },
//     {
//       id: "BI-1302980",
//       name: "Abhijit Deshmukh",
//       age: 27,
//       location: "Delhi, India",
//       profession: "Business Analyst",
//       image: b2,
//     },
//     {
//       id: "BI-1403790",
//       name: "Shreyas Mehendale",
//       age: 29,
//       location: "Pune, India",
//       profession: "Entrepreneur",
//       image: b3,
//     },
//     {
//       id: "BI-1504892",
//       name: "Kabir Manoj Sharma",
//       age: 26,
//       location: "Bangalore, India",
//       profession: "Civil Engineer",
//       image: b4,
//     },
//   ];

//   return (<>
//   <div>
//     <Navbar/>
//   </div>
//     <div className="bg-gray-100 min-h-screen py-10 px-4">
//       <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
//         {/* Header Section */}
//         <div className="relative bg-gradient-to-r from-pink-500 to-purple-500 h-56">
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="text-center text-white">
//               <h1 className="text-4xl font-bold mt-10">Sarthak Gholap</h1>
//               <p className="text-lg mt-2">Perfect</p>
//               <span className="inline-flex items-center px-3 py-1 bg-green-600 text-white rounded-full text-sm mt-2">
//                 <span className="mr-2 w-2 h-2 bg-green-400 rounded-full"></span>
//                 Online Now
//               </span>
//             </div>
//           </div>
//           <img
//             src={b1}
//             alt="Profile"
//             className="absolute bottom-[-50px] left-8 w-60 h-60 rounded-full border-4 border-white shadow-md"
//           />
//         </div>

//         {/* Action Buttons */}
//         <div className="flex justify-between items-center mt-16 px-8">
//           <div className="flex space-x-4">
//             <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 hover:shadow-lg transition">
//               Message Me
//             </button>
//             <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 hover:shadow-lg transition">
//               Wink for Free
//             </button>
//             <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 hover:shadow-lg transition">
//               Send Gift
//             </button>
//           </div>
//           <button className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition">
//             Share
//           </button>
//         </div>

//         {/* Profile Details */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-8 py-6">
//           {/* Left Section */}
//           <div>
//             <h2 className="text-xl font-semibold mb-4">Details</h2>
//             <ul className="space-y-2 text-gray-600">
//               <li>Age: <span className="font-medium">27</span></li>
//               <li>Sexuality: <span className="font-medium">Straight</span></li>
//               <li>Nationality: <span className="font-medium">Indian</span></li>
//               <li>Gender: <span className="font-medium">Male</span></li>
//               <li>Caste: <span className="font-medium">Maratha 96 Kuli</span></li>
//             </ul>
//           </div>

//           {/* Center Section */}
//           <div>
//             <h2 className="text-xl font-semibold mb-4">My Interests</h2>
//             <ul className="space-y-2 text-gray-600">
//               <li className="flex items-center">
//                 <span className="text-pink-500 mr-2">✔</span>
//                 Reviewing Things
//               </li>
//               {/* Add more interests here */}
//             </ul>
//           </div>

//           {/* Right Section */}
//           <div>
//             <h2 className="text-xl font-semibold mb-4">I'm Looking For</h2>
//             <p className="text-gray-600 mb-4">
//               Female / Between 20 & 30 <br />
//               Graduate, Any job, Vegetarian, 96 Kuli Maratha
//             </p>
//             <div className="flex space-x-4">
//               <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 hover:shadow-lg transition">
//                 Send Message
//               </button>
//               <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 hover:shadow-lg transition">
//                 Send Gift
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Recommended Profiles */}
//         {/* <div className="bg-gray-50 py-6 px-8">
//           <h2 className="text-xl font-semibold mb-4">Recommended For You</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {Array(4)
//               .fill("")
//               .map((_, index) => (
//                 <div
//                   key={index}
//                   className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
//                 >
//                   <img
//                     src="https://via.placeholder.com/150"
//                     alt="Profile"
//                     className="w-full h-40 object-cover"
//                   />
//                   <div className="p-4">
//                     <h3 className="font-medium text-lg">User {index + 1}</h3>
//                     <p className="text-gray-500">Age: 25, Male</p>
//                     <button className="mt-2 bg-pink-500 text-white px-4 py-1 rounded-md hover:bg-pink-600 hover:shadow-lg transition">
//                       View Profile
//                     </button>
//                   </div>
//                 </div>
//               ))}
//           </div>
//         </div> */}
//         {/* Recommended Profiles */}
// <div className="mt-12">
//   <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
//     Recommended For You
//   </h2>
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//     {profiles.map((profile) => (
//       <div
//         key={profile.id}
//         className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300"
//       >
//         <div className="relative group">
//           <img
//             src={profile.image}
//             alt={profile.name}
//             className="w-full h-64 object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//         </div>
//         <div className="p-4">
//           <h3 className="text-lg font-semibold text-gray-800 mb-1">
//             {profile.name}
//           </h3>
//           <p className="text-sm text-gray-600">
//             Age: {profile.age}, {profile.profession}
//           </p>
//           <p className="text-sm text-gray-500">{profile.location}</p>
//           <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 transition">
//             View Profile
//           </button>
//         </div>
//       </div>
//     ))}
//   </div>
// </div>

//       </div>
//     </div>
//     <div>
//    <Footer/>
//     </div>

//     </>
//   );
// };

// export default ProfileDetails;


import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import b1 from "../images/boy4.jpg";
// import b1 from "../images/boy4.jpg";
import b2 from "../images/boy5.jpg";
import b3 from "../images/boy6.jpg";
import b4 from "../images/boy3.jpg";
import g2 from "../images/girl2.jpg";
import g3 from "../images/girl33.jpg";
import g4 from "../images/girl4.jpg";
const ProfileDetails = () => {
  const profiles = [
    {
      id: "BI-1201340",
      name: "Sarthak Gholap",
      age: 32,
      location: "Mumbai, India",
      profession: "Architect",
      image: b1,
    },
    {
      id: "BI-1302980",
      name: "Abhijit Deshmukh",
      age: 27,
      location: "Delhi, India",
      profession: "Business Analyst",
      image: b2,
    },
    {
      id: "BI-1403790",
      name: "Shreyas Mehendale",
      age: 29,
      location: "Pune, India",
      profession: "Entrepreneur",
      image: b3,
    },
    {
      id: "BI-1504892",
      name: "Kabir Manoj Sharma",
      age: 26,
      location: "Bangalore, India",
      profession: "Civil Engineer",
      image: b4,
    },
  ];

  return (<>
  <div>
    <Navbar/>
  </div>
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="relative bg-gradient-to-r from-pink-500 to-purple-500 h-56">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white">
              <h1 className="text-4xl font-bold mt-10">Sarthak Gholap</h1>
              <p className="text-lg mt-2">Perfect</p>
              <span className="inline-flex items-center px-3 py-1 bg-green-600 text-white rounded-full text-sm mt-2">
                <span className="mr-2 w-2 h-2 bg-green-400 rounded-full"></span>
                Online Now
              </span>
            </div>
          </div>
          <img
            src={b1}
            alt="Profile"
            className="absolute bottom-[-50px] left-8 w-60 h-60 rounded-full border-4 border-white shadow-md"
          />
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-16 px-8">
          <div className="flex space-x-4">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 hover:shadow-lg transition">
              Message Me
            </button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 hover:shadow-lg transition">
              Wink for Free
            </button>
            <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 hover:shadow-lg transition">
              Send Gift
            </button>
          </div>
          <button className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition">
            Share
          </button>
        </div>

        {/* Profile Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-8 py-6">
          {/* Left Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Details</h2>
            <ul className="space-y-2 text-gray-600">
              <li>Age: <span className="font-medium">27</span></li>
              <li>Sexuality: <span className="font-medium">Straight</span></li>
              <li>Nationality: <span className="font-medium">Indian</span></li>
              <li>Gender: <span className="font-medium">Male</span></li>
              <li>Caste: <span className="font-medium">Maratha 96 Kuli</span></li>
            </ul>
          </div>

          {/* Center Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">My Interests</h2>
            <ul className="space-y-2 text-gray-600">
              <li className="flex items-center">
                <span className="text-pink-500 mr-2">✔</span>
                Reviewing Things
              </li>
              {/* Add more interests here */}
            </ul>
          </div>

          {/* Right Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4">I'm Looking For</h2>
            <p className="text-gray-600 mb-4">
              Female / Between 20 & 30 <br />
              Graduate, Any job, Vegetarian, 96 Kuli Maratha
            </p>
            <div className="flex space-x-4">
              <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-600 hover:shadow-lg transition">
                Send Message
              </button>
              <button className="bg-yellow-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600 hover:shadow-lg transition">
                Send Gift
              </button>
            </div>
          </div>
        </div>

        {/* Recommended Profiles */}
        {/* <div className="bg-gray-50 py-6 px-8">
          <h2 className="text-xl font-semibold mb-4">Recommended For You</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Array(4)
              .fill("")
              .map((_, index) => (
                <div
                  key={index}
                  className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition"
                >
                  <img
                    src="https://via.placeholder.com/150"
                    alt="Profile"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="font-medium text-lg">User {index + 1}</h3>
                    <p className="text-gray-500">Age: 25, Male</p>
                    <button className="mt-2 bg-pink-500 text-white px-4 py-1 rounded-md hover:bg-pink-600 hover:shadow-lg transition">
                      View Profile
                    </button>
                  </div>
                </div>
              ))}
          </div>
        </div> */}
        {/* Recommended Profiles */}
<div className="mt-12">
  <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
    Recommended For You
  </h2>
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {profiles.map((profile) => (
      <div
        key={profile.id}
        className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300"
      >
        <div className="relative group">
          <img
            src={profile.image}
            alt={profile.name}
            className="w-full h-64 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-800 mb-1">
            {profile.name}
          </h3>
          <p className="text-sm text-gray-600">
            Age: {profile.age}, {profile.profession}
          </p>
          <p className="text-sm text-gray-500">{profile.location}</p>
          <button className="mt-2 bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 transition">
            View Profile
          </button>
        </div>
      </div>
    ))}
  </div>
</div>

      </div>
    </div>
    <div>
   <Footer/>
    </div>

    </>
  );
};

export default ProfileDetails;
