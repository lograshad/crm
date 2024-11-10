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
        customBlue: '#E0E0FF',
        customHeroBlack: '#162450',
        customHeroBlack2: '#121212',
        lightBlue: '#E0E0FF1A',
        orange: {
          100: '#FAEDE9',
          400: '#D47A5F'
        },
        grey: {
          300: '#808080',
          400: '#616161'
        },
        purple: {
          100: '#F0E9FF',
          200: '#F9F9FB',
          400: '#EDEFF6'
        },
        pink: {
          100: '#FEEFFA',
          400: '#501641'
        },
        green: {
          100: '#165025',
          400: '#DFF5E5'
        },
        brown: {
          100: '#504216',
          400: '#F5F0E0'
        },
        maroon: {
          100: '#D47A5F',
          400: '#F9E9E4'
        },
        // secondary: '#00ff00',
        // tertiary: '#0000ff',
      },
      lineHeight: {
        '110': '1.1'
      },
      with: {
        'fit': 'fit-content'
      }
    },
  },
  plugins: [],
}

