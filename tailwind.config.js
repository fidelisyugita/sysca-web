/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Playfair Display"', 'serif'], // Placeholder for "Clean, Serif"
        sans: ['Inter', 'sans-serif'],
        display: ['"Oswald"', 'sans-serif'], // Placeholder for "Bold, Expressive"
      },
    },
  },
  plugins: [],
}
