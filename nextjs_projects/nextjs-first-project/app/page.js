import Link from "next/link";
import React from "react";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-7xl">Home Page</h1>
      <Link className="text-xl" href="/about">
        about Page
      </Link>
    </div>
  );
};

export default HomePage;
