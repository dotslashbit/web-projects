import React from "react";

const Categories = () => {
  return (
    <div className="flex items-center justify-between m-20 px-20 text-black font-bold font-manrope">
      <div className="relative bg-gray-200 px-32 pt-20 pb-5 text-center">
        <img
          className="absolute top-[-50%] left-1/2 transform -translate-x-1/2 w-2/4 h-auto"
          src="src/assets/shared/desktop/image-category-thumbnail-headphones.png"
          alt="category headphones thumbnail"
        />
        <p>Headphones</p>
        <p className="text-sm font-medium font-manrope text-gray-400">
          Shop <span className="text-orange-500">&gt;</span>
        </p>
      </div>
      <div className="relative bg-gray-200 px-32 pt-20 pb-5 text-center">
        <img
          className="absolute top-[-50%] left-1/2 transform -translate-x-1/2 w-2/4 h-auto"
          src="src/assets/shared/desktop/image-category-thumbnail-speakers.png"
          alt="category speakers thumbnail"
        />
        <p>Speakers</p>
        <p className="text-sm font-medium font-manrope text-gray-400">
          Shop <span className="text-orange-500">&gt;</span>
        </p>
      </div>
      <div className="relative bg-gray-200 px-32 pt-20 pb-5 text-center">
        <img
          className="absolute top-[-50%] left-1/2 transform -translate-x-1/2 w-2/4 h-auto"
          src="src/assets/shared/desktop/image-category-thumbnail-earphones.png"
          alt="category earphones thumbnail"
        />
        <p>Earphones</p>
        <p className="text-sm font-medium font-manrope text-gray-400">
          Shop <span className="text-orange-500">&gt;</span>
        </p>
      </div>
    </div>
  );
};

export default Categories;
