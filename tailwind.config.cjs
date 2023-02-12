/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: "#1C2F61",
        primary: {
          100: "#D1E9FF",
          200: "#B2DDFF",
          300: "#84CAFF",
          400: "#53B1FD",
          500: "#2E90FA",
          600: "#1570EF",
          700: "#175CD3",
          800: "#1849A9",
          900: "#194185",
        },
      },
    },
  },
  plugins: [],
};
