import React from "react";
import Hero from "../components/Hero";
import Reviews from "../components/Reviews";
import About from "../components/About";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BrideFroomCards from "../components/BrideGroomCards";
import ImageSlider from "../components/ImageSlider";
import HomePage2 from "./HomePage2";
import Navbar2 from "../components/Navbar2";
import MatchedBy from "../components/MatchBy";
import Navbar3 from "../components/Navbar3";
import SearchForMatches from "../components/SearchForMatches";
import MembershipPlans from "../components/MembershipPlans";
import GirlsProfiles from "../components/GirlsProfiles";

const HomePage = () => {
  return (
    <div>
      <Navbar />
      {/* <Navbar2/>  */}
      <Hero />
    
      {/* <Reviews /> */}
      <SearchForMatches/>
      <MatchedBy/>
      <BrideFroomCards/>
     <GirlsProfiles/>
      <HomePage2/>
    
      {/* <ImageSlider/> */}
     
      {/* <MembershipPlans/> */}
      {/* <Pricing /> */}
      <About />
      <Footer />
    </div>
  );
};

export default HomePage;
