import React, { useEffect, useState } from "react";
import b1 from "../images/boy4.jpg";
import b2 from "../images/boy5.jpg";
import b3 from "../images/boy6.jpg";
import b4 from "../images/boy4.jpg";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { fetchProfiles } from "../redux/actions/profileActions";

const BoysProfiles = () => {

  //   {
  //     id: "BI-1201340",
  //     name: "Sarthak Gholap",
  //     age: 32,
  //     location: "Mumbai, India",
  //     profession: "Architect",
  //     image: b1,
  //   },
  //   {
  //     id: "BI-1302980",
  //     name: "Abhijit Deshmukh",
  //     age: 27,
  //     location: "Delhi, India",
  //     profession: "Business Analyst",
  //     image: b2,
  //   },
  //   {
  //     id: "BI-1403790",
  //     name: "Shreyas Mehendale",
  //     age: 29,
  //     location: "Pune, India",
  //     profession: "Entrepreneur",
  //     image: b3,
  //   },
  //   // {
  //   //   id: "BI-1504892",
  //   //   name: "Kabir Manoj Sharma",
  //   //   age: 26,
  //   //   location: "Bangalore, India",
  //   //   profession: "Civil Engineer",
  //   //   image: b4,
  //   // },
  // ];
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profiles.profiles);

  useEffect(() => {
    dispatch(fetchProfiles());
    byGender()
  }, [dispatch]);

  const byGender =()=>  profiles.filter((el)=>{
    return el.profileType==="Boy"
  })

  console.log("byGender",byGender);
// const [profiless,setProfiless] = useState([])
//   const fetchBoysProfiles = ()=>{
//     const url = "http://localhost:5000/boysProfile/"
//     axios.get(url)
//     .then((res)=>{
//         setProfiless(res.data)
//     })
//   }

//   useEffect(()=>{
//     fetchBoysProfiles();
//   },[])
console.log("profiless",profiles);
  return (
    <div className="bg-gray-100 py-10 flex justify-center">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <h1 className="text-3xl uppercase font-semibold  font-syne  text-center text-[#0069a7] mb-12">
          Featured Boys Profiles
        </h1>

        {/* Profile Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {profiles.filter((el)=>{
          return el.profileType==="Boy"
          }).map((profile) => (
            <div
              key={profile.id}
              className="bg-white shadow-md rounded-lg overflow-hidden transform hover:scale-105 hover:shadow-lg transition-all duration-300"
            >
              {/* Profile Image */}
              <div className="relative group">
                <img
                  src={profile.image}
                  alt={profile.fullName}
                  className="w-full h-80 object-cover"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Profile Details */}
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  {profile.fullName}
                </h2>
                <p className=" hidden text-sm text-gray-600">
                  {profile.age} years 
                </p>
                <p className="text-sm hidden text-gray-500">{profile.location}</p>

                {/* View Profile Button */}
                <div className="mt-4">
                  <button className="w-full bg-[#0069a7] text-white py-2 rounded-md text-sm font-medium uppercase hover:bg-violet-600 transition-all duration-300">
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

export default BoysProfiles;

// import React, { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchProfiles } from "../redux/actions/profileActions";

// const BoysProfiles = () => {
//   const dispatch = useDispatch();
//   const profiles = useSelector((state) => state.profiles.profiles);

//   useEffect(() => {
//     dispatch(fetchProfiles());
//   }, [dispatch]);

//   return (
//     <div>
//       {profiles.map((profile) => (
//         <div key={profile.id}>{profile.name}</div>
//       ))}
//     </div>
//   );
// };

// export default BoysProfiles;
