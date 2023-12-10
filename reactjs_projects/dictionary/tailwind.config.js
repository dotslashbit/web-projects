/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: {
        darkest: "#050505",
        dark: "#1f1f1f",
        DEFAULT: "#2d2d2d",
        light: "#3a3a3a",
      },
      white: {
        darkest: "#757575",
        dark: "#e9e9e9",
        light: "#f4f4f4",
        DEFAULT: "#ffffff",
      },
      violet: "#a445ed",
      red: "#ff5252",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
