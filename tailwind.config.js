/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#1a1a1a',
        'gold': '#CBB26A',
        'gold-light': '#D4C38B',
        'gray-light': '#d1d1d1'
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

