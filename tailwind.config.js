/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blau-fort': '#224b66',
        'turquesa': '#BDDADB',
        'negre': '#1E2829',
        'blanc': '#FAFAFA',
        'blau': '#82A4BB',
        'beige': '#F4F1E9',
      }
    },
  },
  plugins: [],
}