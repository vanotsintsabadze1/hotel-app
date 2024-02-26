/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        secondary: "IBM Plex Serif",
      },
      colors: {
        primary: "#E0B973",
        secondary: "#14274A",
      },
      backgroundImage: {
        "hero-image": "url('/background-images/hero.webp')",
      },
      dropShadow: {
        "hero-text": "0 0 1rem rgba(0, 0, 0, 0.7)",
        "navigation-text": "0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 1)",
      },
      boxShadow: {
        "button-shadow": "0 0rem 1.5rem 0.5rem rgba(169,169,169,0.4)",
      },
    },
    screens: {
      sm: { min: "320px", max: "639px" },
      md: { min: "640px" },
      lg: { min: "1024px" },
      xl: { min: "1280px" },

      // "max-lg": { max: "1279px" },
      // "max-md": { max: "1023px" },
      // "max-sm": { max: "767px" },
    },
  },
  plugins: [],
};
