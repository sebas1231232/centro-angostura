// backend/controllers/categoriasController.js
const { pool } = require('../config/db');

// Obtener todas las categorías (Público)
const getCategorias = async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM categorias ORDER BY nombre_categoria');
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// --- Opcional: CRUD para categorías (si el admin puede gestionarlas) ---

// Crear categoría (Protegido)
const createCategoria = async (req, res) => {
  const { nombre_categoria } = req.body;
  if (!nombre_categoria) {
    return res.status(400).json({ message: 'El nombre de la categoría es requerido' });
  }
  try {
    const [result] = await pool.query(
      'INSERT INTO categorias (nombre_categoria) VALUES (?)',
      [nombre_categoria]
    );
    res.status(201).json({ id_categoria: result.insertId, nombre_categoria });
  } catch (error) {
    console.error('Error al crear categoría:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Actualizar categoría (Protegido)
const updateCategoria = async (req, res) => {
  const { id } = req.params;
  const { nombre_categoria } = req.body;
  if (!nombre_categoria) {
    return res.status(400).json({ message: 'El nombre de la categoría es requerido' });
  }
  try {
    const [result] = await pool.query(
      'UPDATE categorias SET nombre_categoria = ? WHERE id_categoria = ?',
      [nombre_categoria, id]
    );
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    res.json({ id_categoria: id, nombre_categoria });
  } catch (error) {
    console.error('Error al actualizar categoría:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Eliminar categoría (Protegido)
const deleteCategoria = async (req, res) => {
  const { id } = req.params;
  try {
    // Opcional: Verificar si hay animales asociados antes de borrar
    const [animalesAsociados] = await pool.query('SELECT COUNT(*) as count FROM animales WHERE id_categoria = ?', [id]);
    if (animalesAsociados[0].count > 0) {
      return res.status(400).json({ message: 'No se puede eliminar la categoría porque tiene animales asociados.' });
    }

    const [result] = await pool.query('DELETE FROM categorias WHERE id_categoria = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Categoría no encontrada' });
    }
    res.status(204).send(); // No content
  } catch (error) {
    console.error('Error al eliminar categoría:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};


module.exports = {
  getCategorias,
  createCategoria, // Exportar si se implementa CRUD
  updateCategoria, // Exportar si se implementa CRUD
  deleteCategoria  // Exportar si se implementa CRUD
};