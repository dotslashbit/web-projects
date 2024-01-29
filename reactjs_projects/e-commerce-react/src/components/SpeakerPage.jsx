import React from "react";
import Navbar from "./Navbar";
import SpeakerBody from "./SpeakerBody";
import SpeakerFooter from "./SpeakerFooter";

const SpeakerPage = () => {
  return (
    <div>
      <nav className="bg-black mb-20">
        <Navbar />
        <h1 className="text-white font-manrope font-bold text-3xl text-center pb-20">
          SPEAKERS
        </h1>
      </nav>
      <SpeakerBody />
      <SpeakerFooter />
    </div>
  );
};

export default SpeakerPage;
