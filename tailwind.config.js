/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./assets/**/.{html,js}",
    "./index.html"
],
  theme: {
    extend: {
      listStyleImage: {
        'tick': 'url("./assets/images/tick.svg")',
      },
    },
  },
  plugins: [],
}

