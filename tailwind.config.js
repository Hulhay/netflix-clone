/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato'],
      },
      colors: {
        'chinese-black': '#171717',
        'eerie-black': '#1A1A1A',
        'black-olive': '#3b3a3a',
        'quartz': '#4a4848',
        'raisin-black': '#202020',
        'dark-charcoal': '#323232'
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar-hide'),
  ],
};
