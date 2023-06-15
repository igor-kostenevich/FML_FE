/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['./src/**/*.js', './src/**/*.vue'],
  theme: {
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
    colors: {
      white: '#FFFFFF',
      black: {
        DEFAULT: '#000000',
        light: '#2E2F32',
        dark: '#191C20',
      },
      transparent: 'transparent',
      gray: {
        DEFAULT: '#E2E3E3',
        dark: '#A3A3A3',
        light: '#EEEEEE',
      },
      primary: {
        DEFAULT: '#47A447',
        hover: '#398339',
      },
      secondary: {
        DEFAULT: '#0088CC',
        hover: '#006DA3',
      },
      red: {
        opacity: '#fbe2de',
        light: '#F3A095',
        DEFAULT: '#ED6A5A',
        dark: '#D15D4F',
      },
    },
    zIndex: {
      0: 0,
      1: 1,
      2: 2,
      10: 10,
      20: 20,
      30: 30,
      50: 50,
      75: 75,
      100: 100,
      99999: 99999,
      auto: 'auto',
    },
    fontSize: {
      xs: ['.714rem', '1.25'],
      sm: ['.857rem', '1.25'],
      base: ['1rem', '1.43'],
      lg: ['1.286rem', '1.25'],
      xl: ['1.714rem', '1.25'],
      '2xl': ['2.857rem', '1.25'],
      '3xl': ['4.571rem', '1.25'],
    },
    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      2: '2px',
      3: '3px',
      4: '4px',
    },
    boxShadow: theme => ({
      DEFAULT: '0 2px 4px 0 rgba(0, 0, 0, 0.25)',
      md: '0 2px 3px 0 rgba(0, 0, 0, 0.25)',
      'border-red': 'inset 0px 0px 0px 1px ' + theme('colors.red.DEFAULT'),
      lg: '0 20px 60px -2px rgba(27, 33, 58, 0.4)',
      none: 'none',
    }),
    extend: {
      screen: {
        ...defaultTheme.screens,
      },
      fontFamily: {
        sans: ['Assistant, Alegreya Sans', ...defaultTheme.fontFamily.sans],
      },
      fill: theme => theme('colors'),
    },
  },
  plugins: [],
}
