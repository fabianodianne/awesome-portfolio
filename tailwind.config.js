/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: '#57375D',
        light: '#FDF4F3',
        primary: '#8EA7E9',
        secondary: '#7286D3', 
        accent: '#C683D7',
      }
    },
  },
  plugins: [],
}
