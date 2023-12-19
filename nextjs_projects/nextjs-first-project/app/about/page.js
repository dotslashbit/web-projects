import Link from "next/link";
import React from "react";

const AboutPage = () => {
  return (
    <div>
      <h1 className="text-7xl">About Page</h1>
      <Link className="text-xl" href="/">
        home Page
      </Link>
    </div>
  );
};

export default AboutPage;
