// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // --- AÑADE ESTA SECCIÓN ---
  server: {
    proxy: {
      // Si React pide algo a /api...
      '/api': {
        target: 'http://localhost', // ...redirígelo a XAMPP
        changeOrigin: true,
      },
      // Si React pide algo a /uploads...
      '/uploads': {
        target: 'http://localhost', // ...redirígelo a XAMPP
        changeOrigin: true,
      }
    }
  }
  // --- FIN DE LA SECCIÓN ---
})