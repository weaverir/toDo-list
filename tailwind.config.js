/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "main" : "url('./../5192479.jpg' )"
      }
    },
    fontFamily: {
      'yekan' : ['yekan-reg'],
      'yekan-bold' : ['yekan-bold'],
      'awsome' : ['awsome']
    },
  },
  plugins: [],
}

