/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        vector: "url('./assets/images/vector.png')",
        vector2: "url('./assets/images/Partner/background.png')",
      }
    },
  },
  plugins: [],
}