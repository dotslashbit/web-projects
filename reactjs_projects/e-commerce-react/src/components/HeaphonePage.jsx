import React from "react";
import Navbar from "./Navbar";
import HeadphoneBody from "./HeadphoneBody";
import HeadphoneFooter from "./HeadphoneFooter";

const HeadphonePage = () => {
  return (
    <div>
      <nav className="bg-black mb-20">
        <Navbar />
        <h1 className="text-white font-manrope font-bold text-3xl text-center pb-20">
          HEADPHONES
        </h1>
      </nav>
      <HeadphoneBody />
      <HeadphoneFooter />
    </div>
  );
};

export default HeadphonePage;
