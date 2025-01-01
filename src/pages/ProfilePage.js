import React from "react";

const ProfilePage = () => {
  const stats = {
    requestsReceived: 1,
    matches: 160,
    profileViews: 0,
  };

  const blogs = [
    {
      title: "Love Marriage vs Arranged Marriage - Finding the Right Match For You",
      link: "#",
    },
    { title: "Dating tips for Cricket fans", link: "#" },
    { title: "The Secret Recipe for Success on Shubh Jiwan.com", link: "#" },
    { title: "Making a good first impression", link: "#" },
  ];

  const updates = [
    { name: "Swati", message: "Phone number is activated" },
    { name: "Reena", message: "Become now star member" },
    { name: "Suvarna", message: "Phone number is activated" },
  ];

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="bg-teal-600 p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">Shubh Jiwan.com</h1>
        <div>
          <button className="bg-red-600 px-4 py-2 rounded hover:bg-red-500">
            Logout
          </button>
        </div>
      </header>

      {/* Main Content */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Column */}
        <div className="col-span-1">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <div className="text-center">
              <div className="bg-gray-700 h-32 w-32 mx-auto rounded-full"></div>
              <h2 className="text-xl font-semibold mt-4">Rahul</h2>
              <p className="text-sm">SH006854114</p>
              <p className="mt-4 text-red-400">Membership Type: FREE MEMBER</p>
              <button className="text-teal-400 underline mt-2">
                Upgrade Membership
              </button>
            </div>

            <div className="mt-6">
              <h3 className="font-bold">Phone No Privacy</h3>
              <label className="block mt-2">
                <input type="radio" name="privacy" className="mr-2" /> Cell
                Number Protected
              </label>
              <label className="block mt-2">
                <input type="radio" name="privacy" className="mr-2" /> Show to
                Paid Members
              </label>
            </div>

            <div className="mt-6">
              <h3 className="font-bold">Verification</h3>
              <div className="flex items-center space-x-4 mt-4">
                <span className="bg-green-500 px-3 py-1 rounded text-sm">
                  Email: Verified
                </span>
                <span className="bg-green-500 px-3 py-1 rounded text-sm">
                  Phone: Verified
                </span>
                <span className="bg-yellow-500 px-3 py-1 rounded text-sm">
                  ID Proof: Upload Now
                </span>
              </div>
            </div>

            <div className="mt-6">
              <h3 className="font-bold">Quick Actions</h3>
              <ul className="mt-4 space-y-2">
                <li>
                  <button className="text-teal-400 underline">
                    Upload Photo
                  </button>
                </li>
                <li>
                  <button className="text-teal-400 underline">Edit Profile</button>
                </li>
                <li>
                  <button className="text-teal-400 underline">
                    Change Password
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Center Column */}
        <div className="col-span-1 lg:col-span-2">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-6">My Stats</h2>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <h3 className="text-2xl font-bold">{stats.requestsReceived}</h3>
                <p className="text-gray-400">Requests Received</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">{stats.matches}</h3>
                <p className="text-gray-400">My Matches</p>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold">{stats.profileViews}</h3>
                <p className="text-gray-400">Profile Views</p>
              </div>
            </div>

            <div className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Members Updates</h2>
              {updates.map((update, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center mb-4"
                >
                  <p>
                    <span className="font-semibold">{update.name}</span>:{" "}
                    {update.message}
                  </p>
                  <span className="bg-teal-500 px-2 py-1 text-sm rounded-full">
                    ⭐
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-1">
          <div className="bg-gray-800 p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-4">Shubh Jiwan Blogs</h2>
            <ul>
              {blogs.map((blog, index) => (
                <li key={index} className="mb-4">
                  <a
                    href={blog.link}
                    className="text-teal-400 hover:underline"
                  >
                    {blog.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
