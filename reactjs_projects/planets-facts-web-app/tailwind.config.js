/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#ffffff",
      darkBlue: "#070724",
      fadedBlue: "#38384f",
      gray: "#838391",
      skyBlue: "#419ebb",
      yellow: "#eda249",
      violet: "#6f2ed6",
      orange: "#d14c32",
      orangeRed: "#d83a34",
      fadedOrange: "#cd5120",
      cyan: "#1ec2a4",
      blue: "#2d68f0",
    },
    fontFamily: {
      sans: ["Spartan", "sans-serif"],
      antonio: ["Antonio", "sans-serif"],
      spartan: ["League Spartan", "sans-serif"],
    },

    extend: {
      backgroundImage: {
        hero: "url('/src/assets/background-stars.svg')",
      },
    },
  },
  plugins: [],
};
