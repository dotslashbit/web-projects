import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";

const Header = () => {
  return (
    <div className="bg-hero-pattern-desktop pb-10 bg-cover bg-no-repeat bg-center">
      <Navbar />
      <HeroSection />
    </div>
  );
};

export default Header;
