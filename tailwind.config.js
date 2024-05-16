/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
      },
      colors: {
        background: "#fff7fe",
        primary: "rgb(145 80 205)",
        "text-primary": "rgb(58 58 58)",
        success: "rgb(115 255 130)",
        "text-neutral": "rgb(192 190 195)",
        secondary: "#ffffff",
      },
    },
  },
  plugins: [],
};
