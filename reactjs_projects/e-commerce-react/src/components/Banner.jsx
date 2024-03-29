import React from "react";

const Banner = () => {
  return (
    <div className="grid grid-rows-3 grid-cols-2 gap-6">
      <div className="grid grid-cols-2 items-center rounded-md col-span-full bg-orange-500">
        <div className="flex justify-center col-span-1">
          <img
            className="w-1/2 max-w-xs"
            src="src/assets/home/desktop/image-speaker-zx9.png"
            alt="speaker"
          />
        </div>
        <div className="flex flex-col items-start justify-center h-full col-span-1 px-6 text-white">
          <h1 className="font-bold font-manrope text-4xl">ZX9 Speaker</h1>
          <p>
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <button className="p-3 bg-black text-white">See product</button>
        </div>
      </div>
      <div className="flex flex-col rounded-md justify-center items-start px-6 col-span-full bg-zx7-banner-image bg-no-repeat bg-cover h-full w-full">
        <h1 className="font-bold font-manrope text-4xl">ZX7 Speaker</h1>
        <button className="p-3 border-black border-2 text-black">
          See product
        </button>
      </div>
      <div className="w-full h-full">
        <img
          className="w-full h-full object-cover rounded-md"
          src="src/assets/home/desktop/image-earphones-yx1.jpg"
          alt="earphones"
        />
      </div>
      <div className="bg-gray-300 flex flex-col rounded-md items-start justify-center w-full">
        <h1 className="ml-6 my-4 font-manrope text-xl font-bold">
          YX1 Earphones
        </h1>
        <button className="ml-6 p-2 border-black border-2 text-black bg-gray-400">
          See product
        </button>
      </div>
      {/* <div className="flex flex-row justify-between items-center gap-6 mt-6 col-span-full h-full w-full">
        <div className="flex flex-col items-start gap-6 justify-center w-1/2">
          <h1 className="font-manrope font-bold text-4xl text-black">
            Bringing you the <span className="text-orange-500">best</span> audio
            gear
          </h1>
          <p className="font-thin">
            Located at the heart of New York City, Audiophile is the premier
            store for high-end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <img
          className="w-1/2 rounded-md"
          src="src/assets/shared/desktop/image-best-gear.jpg"
          alt="best-gear"
        />
      </div> */}
    </div>
  );
};

export default Banner;
