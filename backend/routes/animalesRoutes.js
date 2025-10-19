// backend/routes/animalesRoutes.js
const express = require('express');
const {
  getAnimales,
  getAnimalById,
  createAnimal,
  updateAnimal,
  deleteAnimal
} = require('../controllers/animalesController');
const { protect } = require('../middleware/authMiddleware'); // Middleware de protección

const router = express.Router();

router.route('/')
  .get(getAnimales)         // Ruta pública
  .post(protect, createAnimal); // Ruta protegida

router.route('/:id')
  .get(getAnimalById)       // Ruta pública
  .put(protect, updateAnimal)   // Ruta protegida
  .delete(protect, deleteAnimal); // Ruta protegida

module.exports = router;