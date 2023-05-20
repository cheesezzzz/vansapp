/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent': '#FF8C38',
        'light-orange': "#FFCC8D"
      },
      backgroundImage: {
        'home-hero': "linear-gradient(0deg, rgba(0, 0, 0, 0.46), rgba(0, 0, 0, 0.46)), url('/src/assets/images/home-hero.png')"
      },
      fontFamily: {
        'noto': ['Noto Sans JP', 'sans-serif']
      }
    },
  },
  plugins: [],
}