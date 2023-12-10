function Navbar() {
  return (
    <nav className="flex justify-between">
      <img src="assets/images/logo.svg" />
      <div className="flex justify-between items-center gap-4">
        <select className="py-3 px-4 pe-9 border-none text-sm">
          <option>San Serif</option>
          <option>Roboto</option>
          <option>Inter</option>
        </select>
        <div className="flex justify-between items-center gap-2">
          <img src="assets/images/toggle-off.svg" className="w-10 h-10" />
          <img src="assets/images/icon-moon.svg" />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
