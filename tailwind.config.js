/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
const { fontFamily } = defaultTheme;
const plugin = require("tailwindcss/plugin");

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
    extend: {
      colors: {
        blue: {
          200: "#E2EEFF",
          800: "#217BF4",
          950: "#0A093D",
        },
        gray: {
          300: "#8C8C8C",
        },
        grey: {
          0: "#fff",
          100: "#fafafa",
          200: "#eaeaea",
          250: "#5D5B70",
          300: "#656464",
          400: "#4A4A56",
          700: "#2B2B39",
          800: "#20202D",
        },
      },
    },
    fontFamily: {
      sans: ["Inter", ...fontFamily.sans],
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    plugin(function ({ addVariant }) {
      addVariant("optional", "&:optional");
      addVariant("group-optional", ":merge(.group):optional &");
      addVariant("peer-optional", ":merge(.peer):optional ~ &");
    }),
  ],
  corePlugins: {
    preflight: false,
  },
};
