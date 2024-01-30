import React from "react";

const ProductCard = () => {
  return (
    <div className="flex justify-between items-center mx-40">
      <div>
        <img
          className="object-cover w-4/6"
          src="src/assets/product-xx99-mark-two-headphones/desktop/image-category-page-preview.jpg"
          alt="xx99-mark-one-headphones"
        />
      </div>
      <div>
        <p className="font-thin font-manrope text-orange-400 my-5">
          NEW PRODUCT
        </p>
        <h1 className="text-6xl font-manrope font-bold">
          XX99 Mark II Headphones
        </h1>
        <p className="font-manrope font-thin text-m my-10">
          The new XX99 Mark II headphones is the pinnacle of pristine audio. It
          redefines your premium headphone experience by reproducing the
          balanced depth and precision of studio-quality sound.
        </p>
        <p>$ 2,999</p>
        <div className="flex justify-start gap-10 items-center">
          <select>
            <option value="0">Select Quantity</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
          <button className="p-5 bg-orange-400 text-white">ADD TO CART</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
