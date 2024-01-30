import React from "react";

const ProductFeatures = () => {
  return (
    <div className="flex justify-between items-center m-40">
      <div className="flex flex-col justify-center items-start w-3/4">
        <h1 className="text-3xl font-manrope font-bold">FEATURES</h1>
        <p className="font-manrope font-medium text-m my-10">
          Featuring a genuine leather head strap and premium earcups, these
          headphones deliver superior comfort for those who like to enjoy
          endless listening. It includes intuitive controls designed for any
          situation. Whether you're taking a business call or just in your own
          personal space, the auto on/off and pause features ensure that you'll
          never miss a beat.
        </p>
        <p>
          The advanced Active Noise Cancellation with built-in equalizer allow
          you to experience your audio world on your terms. It lets you enjoy
          your audio in peace, but quickly interact with your surroundings when
          you need to. Combined with Bluetooth 5. 0 compliant connectivity and
          17 hour battery life, the XX99 Mark II headphones gives you superior
          sound, cutting-edge technology, and a modern design aesthetic.
        </p>
      </div>
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-3xl font-manrope font-bold">IN THE BOX</h1>
        <div className="flex flex-col justify-center items-start my-10">
          <div className="flex justify-between items-center">
            <p>1x Headphone Unit</p>
          </div>
          <div className="flex justify-between items-center">
            <p>2x Replacement Earcups</p>
          </div>
          <div className="flex justify-between items-center">
            <p>1x 3.5mm 5m Audio Cable</p>
          </div>
          <div className="flex justify-between items-center">
            <p>1x User Manual</p>
          </div>
          <div className="flex justify-between items-center">
            <p>1x Warranty Card</p>
          </div>
          <div className="flex justify-between items-center">
            <p>1x Travel Bag</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFeatures;
