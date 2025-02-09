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
      keyframes: {
        scroll: {
          to: { transform: "translate(calc(-50% - 0.5rem))" },
        },
      },
      animation: {
        scroll: "scroll var(--_animation-duration, 280s) var(--_animation-direction, forwards) linear infinite",
      },
    },
  },
  plugins: [],
};