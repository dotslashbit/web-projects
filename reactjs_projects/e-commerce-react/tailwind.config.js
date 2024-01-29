/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern-desktop":
          "url('/Users/introvertedbot/Documents/Projects/web_projects/reactjs_projects/e-commerce-react/src/assets/home/desktop/image-hero.jpg')",
        "zx7-banner-image":
          "url('/Users/introvertedbot/Documents/Projects/web_projects/reactjs_projects/e-commerce-react/src/assets/home/desktop/image-speaker-zx7.jpg')",
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
    },
  },
  plugins: [],
};
