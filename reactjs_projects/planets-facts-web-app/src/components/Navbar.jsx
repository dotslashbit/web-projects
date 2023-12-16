function Navbar() {
  return (
    <div>
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
    </div>
  );
}

export default Navbar;
