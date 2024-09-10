/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        grid: "grid 15s linear infinite",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        slide: "slide var(--speed) ease-in-out infinite alternate",
        spinner: "spinner 1.5s linear infinite",
        'pulse-slow': 'pulse 2s ease-in-out infinite',
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 2s ease-in-out infinite',
        'spin-fast': 'spin 1s linear infinite',
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
        spinner: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        pulse: {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.2)', opacity: '0.5' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        spin: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        bounce: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
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
        loader: '#3498db', // Loader color (blue)
      },
    },
  },
  plugins: [],
};
