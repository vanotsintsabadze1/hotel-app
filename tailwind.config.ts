import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
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
      dropShadow: {
        "text-xs": ".0rem .1rem .1rem rgba(0,0,0,0.4)",
        "text-soft": ".1rem .1rem .3rem rgba(0,0,0,0.5)",
        "text-md": ".1rem .1rem .5rem rgba(0,0,0,0.7)",
      },
      boxShadow: {
        xs: "0 .1px .4rem 1rem rgba(0, 0, 0, 0.16)",
        soft: "0 0 .5rem .1rem rgba(99, 99, 99, 0.5)",
        md: " 0 .3rem .8rem .3rem rgba(0, 0, 0, 0.4)",
        lg: " 0 0 1rem .4rem rgba(0, 0, 0, 0.24)",
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

export default config;
