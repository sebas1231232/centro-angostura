// backend/controllers/authController.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { pool } = require('../config/db');
require('dotenv').config();

const loginAdmin = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Por favor, proporciona email y contraseña' });
  }

  try {
    // Busca al administrador por email
    const [rows] = await pool.query('SELECT * FROM administradores WHERE email = ?', [email]);

    if (rows.length === 0) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    const admin = rows[0];

    // Compara la contraseña enviada con el hash almacenado
    const isMatch = await bcrypt.compare(password, admin.password_hash);

    if (!isMatch) {
      return res.status(401).json({ message: 'Credenciales inválidas' });
    }

    // Si las credenciales son correctas, genera el token JWT
    const token = jwt.sign(
      { id_admin: admin.id_admin, email: admin.email }, // Payload del token
      process.env.JWT_SECRET,
      { expiresIn: '1h' } // Duración del token (ej: 1 hora)
    );

    res.json({
      message: 'Login exitoso',
      token: token,
      admin: { // Opcional: devolver info básica del admin
        id: admin.id_admin,
        email: admin.email
      }
    });

  } catch (error) {
    console.error('Error en login:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};

module.exports = { loginAdmin };