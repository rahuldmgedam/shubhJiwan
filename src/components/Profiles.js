
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import g2 from '../images/girl2.jpg'
import g3 from '../images/girl33.jpg'
import g4 from '../images/girl4.jpg'
import g1 from '../images/girl1.jpg'

const Profiles = () => {
  return (
    <>
      <div className="absolute w-full">
        <div className="relative fixed">
          <Navbar />
        </div>

        <div className="bg-gray-50 min-h-screen w-[100%] mt-10">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="grid grid-cols-12 gap-8">
              {/* Sidebar Filters */}
              <aside className="col-span-12 lg:col-span-3 bg-white shadow-md rounded-lg p-6 mt-14">
                <h3 className="text-xl font-bold mb-4">Filters</h3> 
                
                {/* Age Filter */}
                <div className="mb-4">
                  <label className="block font-medium mb-1">Age Between</label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Min Age"
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                    <input
                      type="number"
                      placeholder="Max Age"
                      className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                    />
                  </div>
                </div>

                {/* Gender Filter */}
                <div className="mb-4">
                  <label className="block font-medium mb-1">Gender</label>
                  <div className="flex flex-col gap-1">
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Male
                    </label>
                    <label className="flex items-center">
                      <input type="checkbox" className="mr-2" />
                      Female
                    </label>
                  </div>
                </div>

                {/* Religion Filter */}
                <div className="mb-4">
                  <label className="block font-medium mb-1">Religion</label>
                  <select
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select Religion</option>
                    <option value="hindu">Hindu</option>
                    <option value="muslim">Muslim</option>
                    <option value="christian">Christian</option>
                    <option value="sikh">Sikh</option>
                  </select>
                </div>

                {/* Caste Filter */}
                <div className="mb-4">
                  <label className="block font-medium mb-1">Caste</label>
                  <input
                    type="text"
                    placeholder="e.g., Maratha"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                {/* Location Filter */}
                <div className="mb-4">
                  <label className="block font-medium mb-1">Location</label>
                  <input
                    type="text"
                    placeholder="e.g., Pune, Maharashtra"
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  />
                </div>

                {/* Education Filter */}
                <div className="mb-4">
                  <label className="block font-medium mb-1">Education</label>
                  <select
                    className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                  >
                    <option value="">Select Education</option>
                    <option value="graduate">Graduate</option>
                    <option value="postgraduate">Postgraduate</option>
                    <option value="phd">PhD</option>
                  </select>
                </div>

                <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
                  Save Search
                </button>
              </aside>

              {/* Main Content */}
              <main className="col-span-12 lg:col-span-9">
                {/* Tabs */}
                <div className="flex justify-between items-center mb-6">
                  <div className="flex gap-4">
                    {["Latest", "Popular", "Featured", "Age"].map(
                      (tab, index) => (
                        <button
                          key={index}
                          className="px-4 py-2 text-sm font-medium bg-gray-200 rounded hover:bg-blue-600 hover:text-white transition"
                        >
                          {tab}
                        </button>
                      )
                    )}
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 bg-gray-200 rounded hover:bg-blue-600 hover:text-white transition">
                      <i className="fas fa-th"></i>
                    </button>
                    <button className="p-2 bg-gray-200 rounded hover:bg-blue-600 hover:text-white transition">
                      <i className="fas fa-list"></i>
                    </button>
                  </div>
                </div>

                {/* Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    {
                      name: "Shailesh Sutar",
                      age: 37,
                      description: "True Relationship",
                      image:
                        "https://swaroopvivah.in/wp-content/themes/DA10/_img.php?aid=10368&pid=10367&tt=1",
                    },
                    {
                      name: "Chaitanya Pulekar",
                      age: 28,
                      description: "Bohemian",
                      image:
                        "https://swaroopvivah.in/wp-content/themes/DA10/_img.php?aid=9590&pid=9573&tt=1",
                    },
                    {
                      name: "Chaitanya Deshpande",
                      age: 27,
                      description: "Perfect Match",
                      image:
                        "https://swaroopvivah.in/wp-content/themes/DA10/_img.php?aid=10192&pid=10191&tt=1",
                    },
                    {
                      name: "Samiksha Chetan Shelke",
                      age: 25,
                      description: "Creative Soul",
                      image:
                        g2,
                    },
                    {
                      name: "Mitali rajendra gaykwad",
                      age: 30,
                      description: "Adventurous Partner",
                      image:
                        g3,
                    },
                    {
                      name: "Apurva chintaman bhosle",
                      age: 29,
                      description: "Charming Personality",
                      image:
                        g1,
                    },
                  ].map((profile, index) => (
                    <div
                      key={index}
                      className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                      <img
                        src={profile.image}
                        alt={profile.name}
                        className="w-full h-80 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-bold text-lg">{profile.name}</h4>
                        <p className="text-sm text-gray-600">
                          {profile.age}, {profile.description.includes("Male") ? "Male" : "Female"}
                        </p>
                        <p className="text-sm text-gray-500">
                          {profile.description}
                        </p>
                      </div>
                      <div className="flex justify-between items-center p-4 border-t">
                        <button className="text-red-500 hover:text-red-700 transition">
                          <i className="fas fa-heart"></i> Like
                        </button>
                        <button className="text-blue-500 hover:text-blue-700 transition">
                          <i className="fas fa-envelope"></i> Message
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </main>
            </div>
          </div>
        </div>
        <div className="w-[100%]">
        <Footer />
        </div>
      
      </div>
    </>
  );
};

export default Profiles;
