/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        grid: "grid 15s linear infinite",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
      },
      keyframes: {
        grid: {
          "0%": { transform: "translateY(-50%)" },
          "100%": { transform: "translateY(0)" },
        },
        "spin-around": {
          "0%": { transform: "translateZ(0) rotate(0)" },
          "15%, 35%": { transform: "translateZ(0) rotate(90deg)" },
          "65%, 85%": { transform: "translateZ(0) rotate(270deg)" },
          "100%": { transform: "translateZ(0) rotate(360deg)" },
        },
        slide: {
          to: { transform: "translate(calc(100cqw - 100%), 0)" },
        },
      },
      fontFamily: {
        anton: ['Anton', 'sans-serif'],
        josefin: ['Josefin Sans', 'sans-serif'],
        oswald: ['Oswald', 'sans-serif'],
      },
      colors: {
        primary: '#FFFFFF', // White
        secondary: '#FF0000', // Red
        accent: '#00FF00', // Green
        info: '#0000FF', // Blue
        warning: '#FFFF00', // Yellow
      },
    },
  },
  plugins: [],
};
