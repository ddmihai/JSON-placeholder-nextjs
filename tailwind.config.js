/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      darkGrey: '#424242',

      orange: '#ff9e22',

      blackTransparent: 'rgba(0, 0, 0, 0.7)',

      simpleBlack: '#333333'
    },

    screens: {
      'sm': '640px',

      'md': '768px',

      'lg': '1024px',

      'xl': '1280px',

      '2xl': '1536px',
    },

    extend: {
      backgroundImage: {
        blackWaves: "url('/images/hero-bg.jpg')",
        pattern: "url('/images/hero-users.jpg')",
      },

      height: {
        250: '500px'
      }
    },
  },
  plugins: [],
}