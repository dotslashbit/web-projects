import React from "react";
import MoonIcon from "./MoonIcon";
import ToggleOnIcon from "./ToggleOnIcon";
import ToggleOffIcon from "./ToggleOffIcon";
import arrowDown from "../../public/assets/images/icon-arrow-down.svg";

function Navbar({
  selectedFont,
  onHandleSelectedFont,
  darkMode,
  onHandleDarkMode,
}) {
  return (
    <nav className={`flex justify-between`}>
      <img src="assets/images/logo.svg" alt="Logo" />
      <div className={`flex justify-between items-center gap-4`}>
        <div
          className={`py-3 px-4 pe-9 border-none text-sm ${
            darkMode ? "bg-black-darkest text-white" : "bg-white text-black"
          }`}
        >
          <select
            className="w-full bg-transparent text-inherit border-none appearance-none pr-10"
            style={{
              backgroundImage: `url(${arrowDown})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 0.5rem center",
              backgroundSize: "1em",
            }}
            value={selectedFont}
            onChange={onHandleSelectedFont}
          >
            <option>San Serif</option>
            <option>Kalnia</option>
            <option>Dhurjati</option>
          </select>
        </div>
        <div
          className="flex justify-between items-center gap-2 cursor-pointer"
          onClick={onHandleDarkMode}
        >
          {darkMode ? <ToggleOnIcon /> : <ToggleOffIcon />}
          <MoonIcon color={darkMode ? "#a445ed" : "#000"} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
