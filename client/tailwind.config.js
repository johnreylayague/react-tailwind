/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    container: {
      padding: "15px",
      center: true,
    },
    screens: {
      sm: "576.50px",
      md: "720px",
      lg: "960px",
      xl: "1140px",
    },
    extend: {
      colors: {
        primary: "#38220F",
        "primary-emphasis": "#38220F",
        secondary: "#634832",
        "secondary-emphasis": "#38220F",
        light: "#fff",
        "light-emphasis": "#38220F",
      },
      fontFamily: {
        openSans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
