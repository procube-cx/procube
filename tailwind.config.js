/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage:{
        vector: "url('./assets/images/vector.png')",
      }
    },
  },
  plugins: [],
}