/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '320px',
      lg: '1440px',
    },
    colors: {
      transparent: 'transparent',
      current: '#000000',
      orange: '#ff642f',
      rose: '#ffd7c9',
      lightblue: '#e3f1ff',
      black: '#000000',
      gray: '#7f7f7f',
      lightgray: '#e8e8e8',
      white: '#f9f9f9',
    },
    fontSize: {
      xs: '0.5rem',
      sm: '0.7rem',
      base: '1rem',
      xl: '1.25rem',
      '2xl': '1.500rem',
      '3xl': '1.835rem',
      '4xl': '2.441rem',
      '5xl': '3.052rem',
    },
    fontFamily: {
      playfair: ['Playfair Display', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
