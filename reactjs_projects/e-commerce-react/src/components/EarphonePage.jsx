import React from "react";
import Navbar from "./Navbar";
import EarphoneBody from "./EarphoneBody";
import EarphoneFooter from "./EarphoneFooter";

const EarphonePage = () => {
  return (
    <div>
      <nav className="bg-black mb-20">
        <Navbar />
        <h1 className="text-white font-manrope font-bold text-3xl text-center pb-20">
          EARPHONES
        </h1>
      </nav>
      <EarphoneBody />
      <EarphoneFooter />
    </div>
  );
};

export default EarphonePage;
