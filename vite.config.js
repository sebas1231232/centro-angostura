// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss' // <-- 1. Importa Tailwind

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // <-- 2. Añádelo como plugin
  ],
})