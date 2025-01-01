import React from "react";

const PaymentDetails = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="text-3xl font-bold text-center  text-[#0069a7] mb-8 animate-fade-in">
          Payment Details
        </h1>
        <div className="bg-white shadow-md rounded-lg p-6 md:p-10 space-y-6 transition-transform duration-500 hover:scale-105">
          <div className="space-y-4">
            <h2 className="text-xl font-semibold  text-[#0069a7]">
              Bank Account Details
            </h2>
            <p className="text-gray-600">
              <strong>Bank Name:</strong> Bank of India
            </p>
            <p className="text-gray-600">
              <strong>Account Holder:</strong> Shubh Jivan Samajik Vivha Sanstha
            </p>
            <p className="text-gray-600">
              <strong>IFSC Code:</strong> BKID0008755
            </p>
            <p className="text-gray-600">
              <strong>Account Number:</strong> 875520110000355
            </p>
          </div>
          <hr className="border-gray-300" />
          <div className="space-y-4">
            <h2 className="text-xl font-semibold  text-[#0069a7]">
              Google Pay Service
            </h2>
            <p className="text-gray-600">
              <strong>Contact Name:</strong> Nisha
            </p>
            <p className="text-gray-600">
              <strong>Phone Number:</strong> 7276664792
            </p>
          </div>
        </div>
        <div className="mt-10 text-center">
          <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-colors duration-300">
            Pay Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentDetails;
