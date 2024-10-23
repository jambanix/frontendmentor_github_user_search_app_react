/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
   extend: {
    colors: {
      "dark-main": "#141d2f",
      "light-main": "#f6f8ff",
      "dark-body": "#1e2a47",
      "light-body": "#fefefe",
      "blue": "#0079ff",
      "light-blue": "#5da9fc",
      "ivory": "#f6f8ff"
    }
   }
  },
  plugins: [],
}

