import { useState } from "react";

function App() {
  return (
    <div className="w-full m-0 p-0 bg-hero bg-darkBlue ">
      <nav className="flex justify-between items-center m-0 py-5   bg-hero bg-darkBlue text-white border-b border-gray">
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
            <a
              className="p-5 bg-skyBlue w-full font-spartan font-bold text-2xl"
              href="#"
            >
              <div className="flex justify-start gap-10 items-center">
                <p className="text-gray">01</p>
                <p>Overview</p>
              </div>
            </a>
            <a
              className="p-5 bg-skyBlue w-full font-spartan font-bold text-2xl"
              href="#"
            >
              <div className="flex justify-start gap-10 items-center">
                <p className="text-gray">02</p>
                <p>Internal Structure</p>
              </div>
            </a>
            <a
              className="p-5 bg-skyBlue w-full font-spartan font-bold text-2xl"
              href="#"
            >
              <div className="flex justify-start gap-10 items-center">
                <p className="text-gray">03</p>
                <p>Surface Geology</p>
              </div>
            </a>
            <div className="flex justify-start items-center w-full gap-2 text-xl font-extrabold">
              <p className="text-fadedBlue font-spartan font-bold">Source :</p>
              <div className="flex justify-start items-center gap-2 text-gray font-spartan font-extrabold">
                <a className="underline decoration-2" href="www.example.com">
                  www.example.com
                </a>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12">
                  <path
                    fill="#FFF"
                    d="M11.34.66C10.9.22 10.37 0 9.75 0h-7.5C1.63 0 1.1.22.66.66.22 1.1 0 1.63 0 2.25v7.5c0 .62.22 1.15.66 1.59.44.44.97.66 1.59.66h7.5c.62 0 1.15-.22 1.59-.66.44-.44.66-.97.66-1.59v-7.5c0-.62-.22-1.15-.66-1.59zM10 6.25a.467.467 0 01-.305.46.544.544 0 01-.195.04.465.465 0 01-.352-.149L8.023 5.476 3.852 9.648a.481.481 0 01-.352.149.48.48 0 01-.352-.149l-.796-.797a.48.48 0 01-.149-.351.48.48 0 01.149-.352l4.172-4.172-1.125-1.125c-.162-.15-.198-.333-.11-.546A.467.467 0 015.75 2H9.5c.135 0 .253.05.352.148A.48.48 0 0110 2.5v3.75z"
                    opacity=".5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex justify-between items-center text-white w-full p-20 gap-10">
        <div className="flex flex-col justify-between items-start gap-5 w-full border border-gray p-10 ">
          <p className="text-gray font-spartan">Rotation time</p>
          <p className="font-antonio text-5xl">0.99 Days</p>
        </div>
        <div className="flex flex-col justify-between items-start gap-5 w-full border border-gray p-10">
          <p className="text-gray font-spartan">Revolution Time</p>
          <p className="font-antonio text-5xl">365.26 Days</p>
        </div>
        <div className="flex flex-col justify-between items-start gap-5 w-full border border-gray p-10">
          <p className="text-gray font-spartan">Radius</p>
          <p className="font-antonio text-5xl">6,371 KM</p>
        </div>
        <div className="flex flex-col justify-between items-start gap-5 w-full border border-gray p-10">
          <p className="text-gray font-spartan">Average Temp</p>
          <p className="font-antonio text-5xl">16°C</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
