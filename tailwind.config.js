/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'pink': '#F6D1C9',
      'orange': '#E68B7B',
      'white': '#ffffff',
      'black': '#000000',
      'gray': '#6F6F6F',
    },
    fontFamily: {
      serif: ['CMU Serif', 'serif'],
      sans: ['Beautifully Delicious', 'sans-serif'],
    },
    
  },
  plugins: [],
}

