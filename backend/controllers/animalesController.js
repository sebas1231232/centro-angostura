// backend/controllers/animalesController.js
const { pool } = require('../config/db');

// Obtener todos los animales (con filtros) (Público)
const getAnimales = async (req, res) => {
  const { categoria, buscar } = req.query;
  let query = `
    SELECT a.*, c.nombre_categoria
    FROM animales a
    JOIN categorias c ON a.id_categoria = c.id_categoria
  `;
  const params = [];

  const conditions = [];
  if (categoria && categoria !== 'Todos') {
    // Asumiendo que 'categoria' es el id_categoria numérico
    const categoriaId = parseInt(categoria, 10);
    if (!isNaN(categoriaId)) {
        conditions.push('a.id_categoria = ?');
        params.push(categoriaId);
    } else {
        // Podrías buscar por nombre de categoría si pasas el nombre
        // conditions.push('c.nombre_categoria = ?');
        // params.push(categoria);
    }
  }
  if (buscar) {
    conditions.push('(a.nombre_comun LIKE ? OR a.nombre_cientifico LIKE ?)');
    params.push(`%${buscar}%`);
    params.push(`%${buscar}%`);
  }

  if (conditions.length > 0) {
    query += ' WHERE ' + conditions.join(' AND ');
  }

  query += ' ORDER BY a.nombre_comun'; // Opcional: ordenar

  try {
    const [rows] = await pool.query(query, params);
    res.json(rows);
  } catch (error) {
    console.error('Error al obtener animales:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Obtener un animal por ID (Público)
const getAnimalById = async (req, res) => {
  const { id } = req.params;
  try {
    const [rows] = await pool.query(`
      SELECT a.*, c.nombre_categoria
      FROM animales a
      JOIN categorias c ON a.id_categoria = c.id_categoria
      WHERE a.id_animal = ?
    `, [id]);
    if (rows.length === 0) {
      return res.status(404).json({ message: 'Animal no encontrado' });
    }
    res.json(rows[0]);
  } catch (error) {
    console.error(`Error al obtener animal ${id}:`, error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

// Crear un nuevo animal (Protegido)
const createAnimal = async (req, res) => {
  const { nombre_comun, nombre_cientifico, descripcion, id_categoria, imagen_url } = req.body;

  // Validación básica
  if (!nombre_comun || !id_categoria || !imagen_url || !descripcion) {
    return res.status(400).json({ message: 'Faltan campos requeridos (nombre común, categoría, descripción, imagen URL)' });
  }

  try {
    const [result] = await pool.query(
      'INSERT INTO animales (nombre_comun, nombre_cientifico, descripcion, id_categoria, imagen_url) VALUES (?, ?, ?, ?, ?)',
      [nombre_comun, nombre_cientifico || null, descripcion, id_categoria, imagen_url]
    );
    res.status(201).json({
      id_animal: result.insertId,
      nombre_comun, nombre_cientifico, descripcion, id_categoria, imagen_url
    });
  } catch (error) {
    console.error('Error al crear animal:', error);
    // Podrías añadir manejo específico para claves foráneas inválidas (id_categoria)
    res.status(500).json({ message: 'Error interno del servidor al crear el animal' });
  }
};

// Actualizar un animal (Protegido)
const updateAnimal = async (req, res) => {
  const { id } = req.params;
  const { nombre_comun, nombre_cientifico, descripcion, id_categoria, imagen_url } = req.body;

   // Validación básica
   if (!nombre_comun || !id_categoria || !imagen_url || !descripcion) {
    return res.status(400).json({ message: 'Faltan campos requeridos (nombre común, categoría, descripción, imagen URL)' });
  }

  try {
    const [result] = await pool.query(
      `UPDATE animales SET
        nombre_comun = ?,
        nombre_cientifico = ?,
        descripcion = ?,
        id_categoria = ?,
        imagen_url = ?
       WHERE id_animal = ?`,
      [nombre_comun, nombre_cientifico || null, descripcion, id_categoria, imagen_url, id]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Animal no encontrado' });
    }
    res.json({ id_animal: id, nombre_comun, nombre_cientifico, descripcion, id_categoria, imagen_url });
  } catch (error) {
    console.error(`Error al actualizar animal ${id}:`, error);
    res.status(500).json({ message: 'Error interno del servidor al actualizar el animal' });
  }
};

// Eliminar un animal (Protegido)
const deleteAnimal = async (req, res) => {
  const { id } = req.params;
  try {
    const [result] = await pool.query('DELETE FROM animales WHERE id_animal = ?', [id]);
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Animal no encontrado' });
    }
    res.status(204).send(); // No content
  } catch (error) {
    console.error(`Error al eliminar animal ${id}:`, error);
    res.status(500).json({ message: 'Error interno del servidor al eliminar el animal' });
  }
};


module.exports = {
  getAnimales,
  getAnimalById,
  createAnimal,
  updateAnimal,
  deleteAnimal
};