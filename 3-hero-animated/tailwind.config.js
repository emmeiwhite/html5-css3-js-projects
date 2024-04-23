/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  theme: {
    extend: {
      colors: {
        blue: "#1fb6ff",
        purple: "#7e5bef",
        pink: "#ff49db",
        orange: "#ff7849",
        green: "#13ce66",
        yellow: "#ffc82c",
        "gray-dark": "#273444",
        gray: "#8492a6",
        "gray-light": "#d3dce6",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        dosis: ["Dosis", "sans-serif"],
      },
      backgroundImage: {
        hero: "linear-gradient(rgba(53,82,66,0.5),rgba(47,80,63,0.6)), url('images/hero.jpg')",
      },
    },
  },
  plugins: [],
};
