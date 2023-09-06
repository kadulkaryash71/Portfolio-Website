/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: 'Poppins',
      },
      keyframes: {
        enter: {
          from: { opacity: 0, transform: "translateY(-50%)" },
          to: { opacity: 100, transform: "translateY(0)"}
        },
        exit: {
          from: { opacity: 100, transform: "translateY(0)" },
          to: { opacity: 0, transform: "translateY(-10%)"}
        },
      },
      animation: {
        entrance: "enter 0.6s linear",
        exit: "exit 0.6s linear"
      }
    },
  },
  plugins: [],
}

