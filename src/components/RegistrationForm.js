import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const RegistrationForm = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (<>
  <Navbar/>
    <div className="min-h-screen flex items-center justify-center bg-opacity-100">
      <div className="bg-gray-800 text-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Create Your Profile
        </h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm mb-2">Create Profile For</label>
            <select
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-pink-500"
              required
            >
              <option value="">Select</option>
              <option value="self">Self</option>
              <option value="parent">Parent</option>
              <option value="relative">Relative</option>
              <option value="friend">Friend</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Email Address</label>
            <input
              type="email"
              placeholder="someone@example.com"
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-pink-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Mobile No.</label>
            <div className="flex">
              <span className="px-3 py-2 bg-gray-700 border border-gray-600 rounded-l">
                +91
              </span>
              <input
                type="tel"
                placeholder="Enter your number"
                className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-r focus:outline-none focus:border-pink-500"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Create Password</label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                placeholder="Create Password"
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded focus:outline-none focus:border-pink-500"
                required
              />
              <button
                type="button"
                className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                onClick={togglePasswordVisibility}
              >
                {passwordVisible ? (
                  <i className="fas fa-eye-slash"></i>
                ) : (
                  <i className="fas fa-eye"></i>
                )}
              </button>
            </div>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" required />
              I agree to the{" "}
              <span className="text-pink-500 cursor-pointer ml-1">
                Terms & Conditions
              </span>{" "}
              and{" "}
              <span className="text-pink-500 cursor-pointer ml-1">
                Privacy Policy
              </span>
            </label>
          </div>
          <div className="mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" />
              Receive emails on latest offers & membership perks
            </label>
          </div>
          <button
            type="submit"
            className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600 transition"
          >
            Register for Free
          </button>
          <p className="text-xs text-center mt-4">
            Manage your contact & profile privacy settings, anytime!
          </p>
        </form>
      </div>
    </div>
    <Footer/>
    </>);
};

export default RegistrationForm;
