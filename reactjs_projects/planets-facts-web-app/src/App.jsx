import { useState } from "react";

function App() {
  return (
    <div className="w-full h-screen m-0 p-0 bg-hero bg-darkBlue ">
      <nav className="flex justify-between items-center m-0 py-5   bg-hero bg-darkBlue text-white">
        <p className="w-full text-3xl font-antonio">Planets</p>
        <div className="flex justify-between items-center w-full font-spartan font-thin">
          <p>Mercury</p>
          <p>Venus</p>
          <p>Earth</p>
          <p>Mars</p>
          <p>Jupiter</p>
          <p>Saturn</p>
          <p>Uranus</p>
          <p>Neptune</p>
        </div>
      </nav>
      <main className=" text-white">
        <section className="flex justify-center items-center bg-hero mx-20 p-20">
          <div className="w-full">
            <img src="src/assets/planet-earth.svg" alt="planet earth" />
          </div>

          <div className="flex flex-col justify-between items-start w-full gap-10">
            <h1 className="font-antonio font-extrabold text-6xl">Earth</h1>
            <p className="font-spartan font-extralight text-xl">
              Third planet from the Sun and the only known planet to harbor
              life. About 29.2% of Earth's surface is land with remaining 70.8%
              is covered with water. Earth's distance from the Sun, physical
              properties and geological history have allowed life to evolve and
              thrive.
            </p>
            <a href="#">Source : www.example.com</a>
          </div>
        </section>
      </main>
      <footer className="flex justify-between items-center text-white w-full mx-20">
        <div className="flex flex-col justify-between items-start gap-5 w-full ">
          <p className="text-gray font-spartan">Rotation time</p>
          <p className="font-antonio text-5xl">0.99 Days</p>
        </div>
        <div className="flex flex-col justify-between items-start gap-5 w-full">
          <p className="text-gray font-spartan">Revolution Time</p>
          <p className="font-antonio text-5xl">365.26 Days</p>
        </div>
        <div className="flex flex-col justify-between items-start gap-5 w-full">
          <p className="text-gray font-spartan">Radius</p>
          <p className="font-antonio text-5xl">6,371 KM</p>
        </div>
        <div className="flex flex-col justify-between items-start gap-5 w-full">
          <p className="text-gray font-spartan">Average Temp</p>
          <p className="font-antonio text-5xl">16°C</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
