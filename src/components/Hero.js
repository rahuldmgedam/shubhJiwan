import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import RegistrationForm from "./RegistrationForm";

const Hero = () => {
  const navigate = useNavigate();

  const handleRegisterClick = () => {
    navigate("/register");
  };

  return (
    <section
      id="home"
      className="relative h-screen flex flex-col justify-center items-start overflow-hidden px-6 lg:px-16"
      style={{
        background:
          "url('/assets/Landing-Background.jpg') no-repeat center center",
        backgroundSize: "cover",
        backgroundAttachment:"fixed",
        backgroundPosition:"center"
      }}
    >
      {/* Blurred Overlay */}
      <div
        className="absolute inset-0"
        style={{
          backdropFilter: "blur(0.1px)",
          WebkitBackdropFilter: "blur(0.1px)",
          background: "rgba(0, 0, 0, 0.1)",
        }}
      ></div>

      {/* Text and Call-to-Action */}
      <div className="absolute">
        <div>

        </div>
      </div>
  
      <div className="relative z-3 text-left ">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl lg:text-5xl font-bold mb-6 text-[#334155]  tracking-wide"
        >
          Discover Your Perfect Match
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="text-xl lg:text-2xl mb-10 max-w-md text-[#4B5563]"
        >
          Ready to meet someone special? Take the first step today and join a
          community where real connections are made.
        </motion.p>

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, ease: "easeInOut", delay: 0.6 }}
          onClick={handleRegisterClick}
          className="px-10 py-3 tracking-wider lg:px-12 lg:py-4 rounded-md shadow-lg text-lg lg:text-xl font-semibold bg-[#FF89B3]  text-white  transition-transform transform hover:shadow-2xl hover:scale-105"
          style={{
            borderRadius: "8px",
          }}
        >
          Get Started
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
