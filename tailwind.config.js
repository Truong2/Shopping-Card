/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        tajawal: ['"Tajawal"', "sans-serif"],
      },
      backgroundColor: {
        primary: "#f9f9f9",
      },
      fontWeight: {
        550: "550",
      },
    },
  },
  plugins: [],
};
