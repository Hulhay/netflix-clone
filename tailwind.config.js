/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ['Lato']
      },
      colors: {
        'chinese-black': '#171717'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
