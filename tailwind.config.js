/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'dark-300': '#2F3136',
        'dark-500': '#1E1E1E',
      },
      fontFamily: {
        sans: ['Epilogue', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
