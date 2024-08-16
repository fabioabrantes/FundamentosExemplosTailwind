/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './src/**/*.{js,jsx,ts,tsx}', './index.html'
  ],
  theme: {
    extend: {
      colors: {
        danger: '#ff5f40',
        info: {
          900: '#234e52',
          800: '#285e61',
        }
      },
    },
    fontFamily: {
      rale: ['Raleway'],
      robo: ['Roboto']
    },
  },
  plugins: [],
}

