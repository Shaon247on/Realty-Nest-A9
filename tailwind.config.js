/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      backgroundImage: {
        'apartments': 'url("https://i.ibb.co/y5G5dRt/apartments-dinein.jpg")',
        'family': 'url("https://i.ibb.co/9nWXnR6/Single-family-homes.jpg")',
        'rentals': 'url("https://i.ibb.co/R0vDshk/vacation-rentals.jpg")',
        'animated': 'url("/src/assets/Animated-Shape.svg")',
        'meteor': 'url("/src/assets/Meteor.svg")',
        'wave': 'url("/src/assets/Wave-Line.svg")',
        'logo': 'url("/src/assets/Untitled design.png")'
      },
      fontFamily:{
        'open':'"Open Sans", sans-serif;'
      }      
    },
  },
  plugins: [require("daisyui")],
}

