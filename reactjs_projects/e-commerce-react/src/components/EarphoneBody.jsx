import React from "react";
import Categories from "./Categories";
import About from "./About";

const EarphoneBody = () => {
  return (
    <div>
      <div className="grid grid-rows-1 grid-cols-2 gap-y-40 pt-20 mb-20">
        <div className="col-span-1 flex items-center justify-center">
          <img
            className="object-cover w-4/6"
            src="src/assets/product-yx1-earphones/desktop/image-product.jpg"
            alt="xx99-mark-one-headphones"
            border="0"
          />
        </div>
        <div className="col-span-1 mx-20 px-20 flex items-center">
          <div className="flex flex-col items-start justify-center">
            <p className="font-thin font-manrope text-orange-400 my-5">
              NEW PRODUCT
            </p>
            <h1 className="text-5xl font-manrope font-bold my-2">
              XX99 MARK II HEADPHONES
            </h1>
            <p className="font-manrope font-thin text-m my-10">
              The new XX99 Mark II headphones is the pinnacle of pristine audio.
              It redefines your premium headphone experience by reproducing the
              balanced depth and precision of studio-quality sound.
            </p>
            <button className="p-5 bg-orange-400 text-white">
              SEE PRODUCT
            </button>
          </div>
        </div>
      </div>
      <div className="my-20 py-20">
        <Categories />
      </div>
      <div className="mx-20 px-20 my-20 pb-20">
        <About />
      </div>
    </div>
  );
};

export default EarphoneBody;
