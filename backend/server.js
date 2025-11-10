// backend/server.js
const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { testConnection } = require('./config/db'); // Importar para probar conexión

// Importar rutas
const authRoutes = require('./routes/authRoutes');
const animalesRoutes = require('./routes/animalesRoutes');
const categoriasRoutes = require('./routes/categoriasRoutes');

// Crear instancia de Express
const app = express();

// Probar conexión a la BD al iniciar
testConnection();

// Middlewares
app.use(cors()); // Habilitar CORS para permitir peticiones desde el frontend
app.use(express.json()); // Para parsear JSON en el body de las requests
app.use(express.urlencoded({ extended: false })); // Para parsear datos de formularios

// Rutas de la API
app.use('/api/auth', authRoutes);
app.use('/api/animales', animalesRoutes);
app.use('/api/categorias', categoriasRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('API del Centro Angostura funcionando!');
});

// Middleware para manejar rutas no encontradas (404)
app.use((req, res, next) => {
    res.status(404).json({ message: 'Ruta no encontrada' });
});

// Middleware para manejo de errores generales
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Error interno del servidor', error: err.message });
});


// Puerto
const PORT = process.env.PORT || 5000;

// Iniciar servidor
app.listen(PORT, () => console.log(`🚀 Servidor corriendo en el puerto ${PORT}`));