import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  
  // Configura un proxy de desarrollo.
  // Esto redirige las peticiones de React (ej. localhost:5173) al servidor XAMPP (localhost:80)
  // para evitar problemas de CORS y simular el entorno de producción.

  server: {
    proxy: {

      // Redirige peticiones de API (ej. /api/animals.php)
      '/api': {
        target: 'http://localhost',
        changeOrigin: true,
      },

      // Redirige peticiones de archivos (ej. /uploads/imagen.jpg)
      '/uploads': {
        target: 'http://localhost',
        changeOrigin: true,
      }
    }
  }
})