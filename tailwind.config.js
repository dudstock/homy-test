/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        '-sm': {
          max: '479px',
        },
        md: '768px',
        '-md': {
          max: '767px',
        },
        lg: '980px',
        '-lg': {
          max: '979px',
        },
        xl: '1024px',
        '-xl': {
          max: '1023px',
        },
        '2xl': '1280px',
        '-2xl': {
          max: '-1279px',
        },
        '3xl': '1440px',
        '-3xl': {
          max: '-1439px',
        },
      },
      colors: {
        white: '#fff',
        black: '#000',
        blue: '#19467F',
        red: '#fb1100',
        gray: '#f4f4f4',
        'dark-gray': '#777',
        green: '#0aae23',
        yellow: '#e6b01f',
      },
    },
  },
  plugins: [],
}

