import React from "react";
import Navbar from "./Navbar";
import ProductCard from "./ProductCard";
import ProductFeatures from "./ProductFeatures";
import ProductGallery from "./ProductGallery";
import YouMayAlsoLike from "./YouMayAlsoLike";
import Categories from "./Categories";
import About from "./About";
import Footer from "./Footer";

const ProductDetailPage = () => {
  return (
    <div>
      <nav className="bg-black mb-20">
        <Navbar />
      </nav>
      <ProductCard />
      <ProductFeatures />
      <ProductGallery />
      <YouMayAlsoLike />
      <Categories />
      <div className="mx-40 my-20">
        <About />
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailPage;
