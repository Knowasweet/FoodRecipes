/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '375px',
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
    fontFamily: {
      playfair: ['Playfair Display', 'serif'],
    },
    extend: {},
  },
  plugins: [],
}
