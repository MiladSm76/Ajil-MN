/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'BackGroundN': "url('../public/img/BackgroundP.png')",
      }
    },
  },
  plugins: [],
}