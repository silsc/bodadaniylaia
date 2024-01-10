/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'pink': '#F6D1C9',
      'white': '#ffffff',
      'black': '#000000',
      'gray': 'C1C1C1',
    },
    fontFamily: {
      serif: ['CMU Serif', 'serif'],
      sans: ['Beautifully Delicious', 'sans-serif'],
    },
    
  },
  plugins: [],
}

