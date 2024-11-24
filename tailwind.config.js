/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Include all JS, JSX, TS, TSX files in the src directory
    "./public/index.html",        // Include your HTML file if needed
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};