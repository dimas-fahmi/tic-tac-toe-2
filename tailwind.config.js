/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0b132b",
        secondary: "#1c2541",
        tertiary: "#3a506b",
        quaternary: "#5bc0be",
        quinary: "#6fffe9",
        septenary: "#fbff00",
      },
    },
  },
  plugins: [],
};