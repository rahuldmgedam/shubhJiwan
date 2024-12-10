import React from "react";
import ContactInfo from "./ContactInfo";
import QuickLinks from "./QuickLinks";
import NewsletterSignup from "./NewsletterSignup";
import SocialMediaLinks from "./SocialMediaLinks";

const Footer = () => {
  return (
    <footer className="bg-[#2E294E] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <ContactInfo />
          <QuickLinks />
          <NewsletterSignup />
        </div>
        <SocialMediaLinks />
        <p className="text-center">
          &copy; {new Date().getFullYear()} Shubh Jiwan. All rights reserved.
        <br /> Design & Developed by © Royals WebTech - All Right Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
