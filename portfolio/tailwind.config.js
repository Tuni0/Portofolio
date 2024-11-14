/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
      fontFamily: {
        abeezee: 'abeezee',
      }
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}