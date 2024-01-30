import React from "react";

const ProductGallery = () => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-10">
      <div className="flex justify-end items-start col-start-1 row-start-1">
        <img
          className="object-cover rounded-md"
          src="src/assets/product-xx99-mark-two-headphones/desktop/image-gallery-1.jpg"
          alt="xx99-mark-one-headphones"
        />
      </div>
      <div className="flex justify-end items-end col-start-1 row-start-2">
        <img
          className="object-cover rounded-md"
          src="src/assets/product-xx99-mark-two-headphones/desktop/image-gallery-2.jpg"
          alt="xx99-mark-one-headphones"
        />
      </div>
      <div className="flex justify-start items-center col-start-2 row-start-1 row-span-2">
        <img
          className="object-cover rounded-md"
          src="src/assets/product-xx99-mark-two-headphones/desktop/image-gallery-3.jpg"
          alt="xx99-mark-one-headphones"
        />
      </div>
    </div>
  );
};

export default ProductGallery;
