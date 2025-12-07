/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all of your component files.
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: '#C5FFFD',
        secondary: '#88D9E6',
        accent: '#8686AA',
        lightgrey: '#7D7D7D',
        grey: '#374B4A',
        icon: '#21194E',
        border: '#000000'
      }
    },
  },
  plugins: [],
}