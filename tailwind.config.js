/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          gold_primary: '#E1BE70', 
          gold_secondary: '#BC9549',
          gold_tertiary: '#BC9549',
          blue_primary: '#0E2A2F',
          green_primary: '#144736',
      },
      fontFamily: {
        barlow: ["Barlow Semi Condensed", "sans-serif"],
      },
    },
  },
  plugins: [],
};