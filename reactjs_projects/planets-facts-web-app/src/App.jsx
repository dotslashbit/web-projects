import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full m-0 p-0 bg-hero bg-darkBlue ">
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
