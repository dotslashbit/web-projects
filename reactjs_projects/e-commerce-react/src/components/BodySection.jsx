import React from "react";
import Categories from "./Categories";
import Banner from "./Banner";
import About from "./About";

const BodySection = () => {
  return (
    <div className="px-20 py-20 my-20">
      <Categories />
      <Banner />
    </div>
  );
};

export default BodySection;
