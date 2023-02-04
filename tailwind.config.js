/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#fdf8f6",
          100: "#f2e8e5",
          200: "#eaddd7",
          300: "#e0cec7",
          400: "#d2bab0",
          500: "#bfa094",
          600: "#a18072",
          700: "#977669",
          800: "#846358",
          900: "#43302b",
        },
        "primary-purple": "#7D5AA7",
        "primary-pink": "#8D5E82",
        "primary-gray-dark": "#2E2C36",
        "primary-gray-light": "#423C51",
      },
    },
  },
  plugins: [],
};
