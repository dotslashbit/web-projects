import React from "react";

const About = () => {
  return (
    <div className="flex flex-row justify-between items-center gap-20 mt-20 col-span-full h-full w-full">
      <div className="flex flex-col items-start gap-20 justify-center w-1/2">
        <h1 className="font-manrope font-bold text-4xl text-black">
          Bringing you the <span className="text-orange-500">best</span> audio
          gear
        </h1>
        <p className="font-thin">
          Located at the heart of New York City, Audiophile is the premier store
          for high-end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <img
        className="w-1/2 rounded-md"
        src="src/assets/shared/desktop/image-best-gear.jpg"
        alt="best-gear"
      />
    </div>
  );
};

export default About;
