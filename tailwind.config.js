/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'black': '	#1b1b1b',
      'grey': '#808080',
      'yellow': '#ffa500',
      'blacklight': '#292929',
      'white': '#ffffff',
    },
    screens: {
      'smallest': '440px',
    },
  },
  plugins: [],
}