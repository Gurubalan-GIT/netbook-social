/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const { fontFamily } = defaultTheme;

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./common/components/**/*.{js,ts,jsx,tsx}",
    "./common/components-ui/**/*.{js,ts,jsx,tsx}",
    "./common/components-helpers/**/*.{js,ts,jsx,tsx}",
    "./modules/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./common/constants/**/*.{js,ts}",
  ],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    colors: {
      blue: "#217BF4",
    },
    extend: {
      grey: {
        700: "#2B2B39",
        800: "#20202D",
      },
    },
    fontFamily: {
      sans: ["Inter", ...fontFamily.sans],
    },
  },
  plugins: [require("@tailwindcss/typography")],
  corePlugins: {
    preflight: false,
  },
};
