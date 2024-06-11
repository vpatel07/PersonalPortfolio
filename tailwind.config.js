/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        test1: "#666666",
        test2: "#FFF7F8",
      },
    },
  },
  plugins: [],
};
