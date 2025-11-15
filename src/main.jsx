import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css' // Importa los estilos de Tailwind

// Punto de entrada de la aplicación React
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)