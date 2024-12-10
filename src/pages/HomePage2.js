import React from "react";

const HomePage2 = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
      style={{
        backgroundImage:
          "url('https://via.placeholder.com/1920x1080')", // Replace with a high-quality matrimony background image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Main Content */}
      <div className="relative z-10 text-white">
{/*        
        <section id="features" className="py-16 bg-gray-100 text-gray-800">
          <div className="max-w-7xl mx-auto px-4">
            <h3 className="text-3xl font-bold text-center mb-8">Our Features</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white shadow-md rounded-lg">
                <h4 className="text-xl font-bold mb-4">Advanced Search</h4>
                <p className="text-gray-600">
                  Find matches based on your preferences like age, location,
                  profession, and more.
                </p>
              </div>
              <div className="p-6 bg-white shadow-md rounded-lg">
                <h4 className="text-xl font-bold mb-4">Verified Profiles</h4>
                <p className="text-gray-600">
                  Our team ensures all profiles are authentic and verified for
                  your safety and trust.
                </p>
              </div>
              <div className="p-6 bg-white shadow-md rounded-lg">
                <h4 className="text-xl font-bold mb-4">Instant Messaging</h4>
                <p className="text-gray-600">
                  Connect directly and securely with potential matches to build
                  a meaningful connection.
                </p>
              </div>
            </div>
          </div>
        </section>


        <section
          id="testimonials"
          className="py-32 bg-gradient-to-r from-blue-300 to-indigo-500 text-white"
        >
          <div className="max-w-7xl mx-auto px-4 text-center">
            <h3 className="text-3xl font-bold mb-8">What Our Users Say</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 bg-white text-gray-800 shadow-md rounded-lg">
                <p>
                  "I found my soulmate here! The platform is easy to use and
                  trustworthy. Highly recommended!"
                </p>
                <h4 className="mt-4 font-bold">- Priya</h4>
              </div>
              <div className="p-6 bg-white text-gray-800 shadow-md rounded-lg">
                <p>
                  "The advanced search features helped me find exactly what I
                  was looking for. Thank you!"
                </p>
                <h4 className="mt-4 font-bold">- Rahul</h4>
              </div>
              <div className="p-6 bg-white text-gray-800 shadow-md rounded-lg">
                <p>
                  "Safe, secure, and reliable. I couldn't have asked for a
                  better experience."
                </p>
                <h4 className="mt-4 font-bold">- Anjali</h4>
              </div>
            </div>
          </div>
        </section>

     
       */}
  <div>
      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-100 text-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <h3 className="text-3xl font-bold text-center mb-12">Our Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Advanced Search",
                description:
                  "Find matches based on your preferences like age, location, profession, and more.",
                icon: "🔍", // Use an emoji or replace with an icon
              },
              {
                title: "Verified Profiles",
                description:
                  "Our team ensures all profiles are authentic and verified for your safety and trust.",
                icon: "✅",
              },
              {
                title: "Instant Messaging",
                description:
                  "Connect directly and securely with potential matches to build a meaningful connection.",
                icon: "💬",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-white shadow-md rounded-lg group hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <div className="text-4xl mb-4 group-hover:text-red-500 transition-colors duration-300">
                  {feature.icon}
                </div>
                <h4 className="text-xl font-bold mb-4">{feature.title}</h4>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="py-32 bg-gradient-to-r from-blue-300 to-indigo-500 text-white"
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-12">What Our Users Say</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                text: `"I found my soulmate here! The platform is easy to use and trustworthy. Highly recommended!"`,
                author: "- Priya",
              },
              {
                text: `"The advanced search features helped me find exactly what I was looking for. Thank you!"`,
                author: "- Rahul",
              },
              {
                text: `"Safe, secure, and reliable. I couldn't have asked for a better experience."`,
                author: "- Anjali",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-6 bg-white text-gray-800 shadow-md rounded-lg hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                <p className="italic text-gray-600">{testimonial.text}</p>
                <h4 className="mt-4 font-bold text-red-500">
                  {testimonial.author}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
 
      </div>
    </div>
  );
};

export default HomePage2;
