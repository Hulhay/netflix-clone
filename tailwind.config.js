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
        'chinese-black': '#171717',
        'eerie-black': '#1A1A1A',
        'black-olive': '#3b3a3a'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
