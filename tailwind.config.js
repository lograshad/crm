/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.vue',
    './src/**/*.js',
    './src/**/*.ts',
    './src/**/*.jsx',
    './src/**/*.tsx',
    './templates/**/*.vue',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#162450',
        grey: {
          300: '#808080',
          400: '#616161'
        }
        // secondary: '#00ff00',
        // tertiary: '#0000ff',
      },
    },
  },
  plugins: [],
}

