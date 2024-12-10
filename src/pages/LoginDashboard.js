import React from "react";

const LoginDashboard = () => {
  const matches = [
    {
      id: "SH006855515",
      age: 26,
      profession: "Executive",
      education: "Bachelors",
      religion: "Buddhism",
      location: "Maharashtra, India",
    },
    {
      id: "SH004739019",
      age: 22,
      profession: "Engineer",
      education: "Bachelors",
      religion: "Buddhism",
      location: "Maharashtra, India",
    },
    {
      id: "SH006843865",
      age: 29,
      profession: "Nurse",
      education: "Bachelors",
      religion: "Buddhism",
      location: "Maharashtra, India",
    },
    {
      id: "SH006846254",
      age: 25,
      profession: "Human Resource",
      education: "Bachelors",
      religion: "Buddhism",
      location: "Maharashtra, India",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="bg-[#ed519e] text-white">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3">
          <div className="text-2xl font-semibold">
            <span className="text-yellow-100">❤️SHUBH JIWAN</span>
            <span className="text-sm block italic"></span>
          </div>
          <nav className="flex gap-4 text-sm">
            <a href="/home" className="hover:text-yellow-300">
              HOME
            </a>
            <a href="/matches-near-me" className="hover:text-yellow-300">
              MATCHES NEAR ME
            </a>
            <a href="/my-matches" className="relative hover:text-yellow-300">
              MY MATCHES
              <span className="absolute top-0 right-0 text-xs bg-red-500 rounded-full px-2 py-0">
                162
              </span>
            </a>
            <a href="/search" className="hover:text-yellow-300">
              SEARCH
            </a>
            <a href="/messages" className="hover:text-yellow-300">
              MESSAGES
            </a>
            <a
              href="/help"
              className="hover:text-yellow-300 bg-red-500 px-2 py-1 rounded text-sm"
            >
              ONLINE HELP 24/7
            </a>
            <a href="/logout" className="hover:text-yellow-300">
              LOGOUT
            </a>
          </nav>
        </div>
      </header>

      {/* Matches Section */}
      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-semibold mb-4 text-gray-700">My Matches</h1>

        <div className="flex justify-between items-center mb-6">
          <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded">
            Previous Page
          </button>
          <div className="flex items-center gap-2">
            <span>Page No:</span>
            <input
              type="number"
              className="w-12 p-1 border rounded text-center"
              value={1}
              readOnly
            />
          </div>
          <button className="bg-teal-500 text-white px-4 py-2 rounded">
            Next Page
          </button>
        </div>

        {/* Matches Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {matches.map((match, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-4 flex flex-col items-center"
            >
              <div className="relative">
                <img
                  src="https://via.placeholder.com/150"
                  alt={match.id}
                  className="rounded-full w-32 h-32 mb-4"
                />
                <span className="absolute top-0 right-0 bg-red-500 text-white text-xs px-2 rounded">
                  FREE
                </span>
              </div>
              <h2 className="text-lg font-medium text-gray-800">{match.id}</h2>
              <p className="text-sm text-gray-600">{match.age} Yrs | {match.profession}</p>
              <p className="text-sm text-gray-600">Education: {match.education}</p>
              <p className="text-sm text-gray-600">Religion: {match.religion}</p>
              <p className="text-sm text-gray-600">{match.location}</p>
              <div className="mt-4 flex gap-2">
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                  Like
                </button>
                <button className="bg-blue-500 text-white px-4 py-2 rounded">
                  Connect
                </button>
              </div>
              <a
                href="/favorites"
                className="text-sm text-teal-500 mt-2 underline"
              >
                Add to Favorites
              </a>
              <a
                href="/view-profile"
                className="text-sm text-teal-500 underline"
              >
                View full profile
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default LoginDashboard;
