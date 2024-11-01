/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: '#1A1AFF',
        customPurple: '#FF8000',  
      },
    },
  },
  plugins: [],
}
