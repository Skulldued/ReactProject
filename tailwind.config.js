/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
       "primary" : ["Philosopher", "sans-serif"],
       "secondary": [ "Montserrat", "sans-serif"]
      },
      colors:{
        "heroBg" : "#0e1122",
        "paragraph" : "rgb(0 0 0 /80%)",
        "primary" : "#06a055",
        "buttonBg" :"green"
      }
    },
  },
  plugins: [],
}