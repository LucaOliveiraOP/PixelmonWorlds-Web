/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        movePikachu: "movePikachu 10s linear infinite",
      },
      keyframes: {
        movePikachu: {
          "0%": { transform: "translateX(-100vw)" },
          "100%": { transform: "translateX(100vw)" },
        },
      },
      fontFamily: {
        silkscreen: ['Silkscreen', 'cursive'],
      },
    },
  },
  plugins: [],
}

