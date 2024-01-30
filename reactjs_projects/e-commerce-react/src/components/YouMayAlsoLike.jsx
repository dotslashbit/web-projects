import React from "react";

const YouMayAlsoLike = () => {
  return (
    <div>
      <h1 className="text-3xl font-manrope font-bold text-center mt-40 mb-10 ">
        You May Also Like
      </h1>
      <div className="grid grid-cols-3 gap-10 mx-40 mt-20 mb-60">
        <div className="flex flex-col items-center justify-center">
          <img
            className="object-cover"
            src="src/assets/shared/desktop/image-xx99-mark-one-headphones.jpg"
            alt="xx99-mark-one-headphones"
          />
          <h1 className="text-2xl font-manrope font-bold my-5">
            XX99 Mark I Headphones
          </h1>
          <button className="p-5 bg-orange-400 text-white">SEE PRODUCT</button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="object-cover"
            src="src/assets/shared/desktop/image-xx59-headphones.jpg"
            alt="xx59-headphones"
          />
          <h1 className="text-2xl font-manrope font-bold my-5">
            XX59 Headphones
          </h1>
          <button className="p-5 bg-orange-400 text-white">SEE PRODUCT</button>
        </div>
        <div className="flex flex-col items-center justify-center">
          <img
            className="object-cover"
            src="src/assets/shared/desktop/image-zx9-speaker.jpg"
            alt="zx9-speaker"
          />
          <h1 className="text-2xl font-manrope font-bold my-5">ZX9 Speaker</h1>
          <button className="p-5 bg-orange-400 text-white">SEE PRODUCT</button>
        </div>
      </div>
    </div>
  );
};

export default YouMayAlsoLike;
