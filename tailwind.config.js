/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#15803d',
          dark: '#166534',
          light: '#dcfce7',
        }
      }
    },
  },
  plugins: [],
}
