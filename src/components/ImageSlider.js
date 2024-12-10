import React, { useState } from "react";

const ImageSlider = () => {
  // const slides = [
  //   {
  //     image: "https://via.placeholder.com/600x300", // Replace with actual image URL
  //     title: "Be Yourself",
  //     description:
  //       "Your first date is about authenticity. Relax, be genuine, and enjoy the moment!",
  //   },
  //   {
  //     image: "https://via.placeholder.com/600x300", // Replace with actual image URL
  //     title: "Respect Boundaries",
  //     description:
  //       "Everyone has personal preferences. Be mindful of your partner's comfort and boundaries.",
  //   },
  //   {
  //     image: "https://via.placeholder.com/600x300", // Replace with actual image URL
  //     title: "Dress Appropriately",
  //     description:
  //       "Choose an outfit that reflects your personality and suits the occasion. First impressions matter!",
  //   },
  //   {
  //     image: "https://via.placeholder.com/600x300", // Replace with actual image URL
  //     title: "Listen and Engage",
  //     description:
  //       "A great conversation is a two-way street. Show genuine interest in your partner's story.",
  //   },
  //   {
  //     image: "https://via.placeholder.com/600x300", // Replace with actual image URL
  //     title: "Plan a Comfortable Venue",
  //     description:
  //       "Pick a safe and relaxing location for both of you. It makes the experience memorable!",
  //   },
  // ];
  const slides = [
    {
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", // Relaxing moment placeholder
      title: "Be Yourself",
      description:
        "Your first date is about authenticity. Relax, be genuine, and enjoy the moment!",
    },
    {
      image:
        "https://images.unsplash.com/photo-1483721310020-03333e577078?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600", // Respect boundaries placeholder
      title: "Respect Boundaries",
      description:
        "Everyone has personal preferences. Be mindful of your partner's comfort and boundaries.",
    },
  ]
  
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-8">
      {/* Slider Container */}
      <h1 className="text-3xl text-pink-500 text-center mb-8 font-semibold">Must Read Before First Date</h1>
      <div className="overflow-hidden rounded-lg shadow-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className="min-w-full flex flex-col items-center bg-gray-100"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-56 object-cover"
              />
              <div className="p-4 text-center">
                <h3 className="text-xl font-bold text-gray-800">
                  {slide.title}
                </h3>
                <p className="text-gray-600 mt-2">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 -left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
      >
        &#8249;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 -right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-600 transition"
      >
        &#8250;
      </button>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 mx-1 rounded-full ${
              currentIndex === index ? "bg-gray-800" : "bg-gray-400"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
