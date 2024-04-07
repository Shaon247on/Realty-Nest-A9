/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage:{
        'sea': 'url("https://i.ibb.co/Bww2zfy/undraw-Login-re-4vu2-1.png")'
      }
    },
  },
  plugins: [require("daisyui")],
}

