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
      },
      boxShadow: {
        "button-shadow": "0 0rem 1.5rem 0.5rem rgba(169,169,169,0.4)",
      },
    },
  },
  plugins: [],
};
