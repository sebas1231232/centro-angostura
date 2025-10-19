/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // --- AÑADE ESTO ---
      fontFamily: {
        luckiest: ['"Luckiest Guy"', 'cursive'], // Para títulos y principal
        quicksand: ['Quicksand', 'sans-serif'], // Para descripciones
      },
      // --- FIN DE LO AÑADIDO ---
    },
  },
  plugins: [],
}