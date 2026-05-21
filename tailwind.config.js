/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // enable class based dark mode
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6366F1",
        secondary: "#EC4899",
      },
    },
  },
  plugins: [],
};

