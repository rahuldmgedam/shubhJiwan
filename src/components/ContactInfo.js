import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="space-y-4">
      <h3 className="text-lg font-bold">Contact Us</h3>
      <div className="flex items-center">
        <FaPhoneAlt className="text-xl mr-2" />
        <p>7276664792</p>
      </div>
      <div className="flex items-center">
        <FaEnvelope className="text-xl mr-2" />
        <p>info@shubhjiwan.com</p>
      </div>
      <div className="flex items-center">
        <FaMapMarkerAlt className="text-xl mr-2" />
        <p>Aurangabad</p>
      </div>
    </div>
  );
};

export default ContactInfo;
