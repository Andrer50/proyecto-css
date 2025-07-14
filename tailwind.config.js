/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    theme: {
      extend: {
        fontFamily: {
          koulen: ['"Koulen"', "sans-serif"],
          marvel: ['"Marvel"', "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
