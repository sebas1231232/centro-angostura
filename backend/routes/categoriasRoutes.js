// backend/routes/categoriasRoutes.js
const express = require('express');
const {
    getCategorias,
    createCategoria, // Importar si se implementa CRUD
    updateCategoria, // Importar si se implementa CRUD
    deleteCategoria  // Importar si se implementa CRUD
} = require('../controllers/categoriasController');
const { protect } = require('../middleware/authMiddleware'); // Middleware de protección

const router = express.Router();

router.get('/', getCategorias);

// --- Rutas protegidas opcionales para CRUD de categorías ---
// router.post('/', protect, createCategoria);
// router.put('/:id', protect, updateCategoria);
// router.delete('/:id', protect, deleteCategoria);

module.exports = router;