import React from "react";

function Navbar({
  selectedFont,
  onHandleSelectedFont,
  darkMode,
  onHandleDarkMode,
}) {
  // const darkModeStyles = darkMode ? "dark:bg-black-darkest" : "";

  return (
    <nav className={`flex justify-between`}>
      <img src="assets/images/logo.svg" alt="Logo" />
      <div className={`flex justify-between items-center gap-4`}>
        <select
          className="py-3 px-4 pe-9 border-none text-sm"
          value={selectedFont}
          onChange={onHandleSelectedFont}
        >
          <option>San Serif</option>
          <option>Kalnia</option>
          <option>Dhurjati</option>
        </select>
        <div
          className="flex justify-between items-center gap-2 cursor-pointer"
          onClick={onHandleDarkMode}
        >
          {/* FIXME: Add dark mode styles to the select element*/}
          <img
            src={`assets/images/toggle-${darkMode ? "on" : "off"}.svg`}
            alt={`Toggle ${darkMode ? "on" : "off"}`}
            className="w-10 h-10"
          />
          <img
            src="assets/images/icon-moon.svg"
            alt="Moon Icon"
            className={`${darkMode ? " text-violet fill-current" : ""}`}
          />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
