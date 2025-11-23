import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    // Configuración de Proxy para redirigir peticiones del frontend (puerto 5173)
    // al backend XAMPP (puerto 80) durante el desarrollo.
    proxy: {
      '/api': {
        target: 'http://localhost',
        changeOrigin: true,
      },
      '/uploads': {
        target: 'http://localhost',
        changeOrigin: true,
      }
    }
  }
})