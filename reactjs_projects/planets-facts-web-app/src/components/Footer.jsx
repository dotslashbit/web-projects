function Footer() {
  return (
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
  );
}

export default Footer;
