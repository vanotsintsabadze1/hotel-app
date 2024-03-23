/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "Montserrat",
        secondary: "IBM Plex Serif",
      },
      colors: {
        primary: "#E0B973",
        secondary: "#14274A",
      },
      backgroundImage: {
        "hero-image": "url('/background-images/hero.webp')",
        "room-image": "url('/background-images/room-page-bg.webp')",
      },
      dropShadow: {
        "text-soft": "0.1rem 0.1rem 0.4rem rgba(0,0,0,0.4)",
        "text-medium": "0.2rem 0.2rem 0.4rem rgba(0, 0, 0, 0.6)",
        "text-heavy": "0 0 1rem rgba(0, 0, 0, 0.7)",
      },
      boxShadow: {
        soft: "0rem 0.2rem .5rem 0.6rem rgba(169,169,169,0.5)",
      },
    },
    screens: {
      xs: { min: "320px", max: "399px" },
      sm: { min: "400px", max: "767px" },
      md: { min: "768px", max: "1023px" },
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
