/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: "ciruela",
        secondary: ["Kablammo, cursive"],
      },

      colors: {
        primary: "#141414",
        secondary: "#222222",
        terciary: "#74DF16",
        quartenary: "#CBEF43",
        quintenary: "#26FFE6",
      },
    },
  },
  plugins: [],
};
