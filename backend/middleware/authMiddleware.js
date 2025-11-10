// backend/middleware/authMiddleware.js
const jwt = require('jsonwebtoken');
require('dotenv').config();

const protect = (req, res, next) => {
  let token;
  const authHeader = req.headers.authorization;

  if (authHeader && authHeader.startsWith('Bearer')) {
    try {
      // Obtener token del header (Bearer TOKEN)
      token = authHeader.split(' ')[1];

      // Verificar token
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Añadir datos del admin (ej: id) al request para usarlo en controladores
      // Aquí asumimos que guardaste el id en el token. Ajusta según lo que guardes.
      req.admin = { id: decoded.id_admin };
      next(); // Pasa al siguiente middleware/controlador
    } catch (error) {
      console.error('Error de autenticación:', error.message);
      res.status(401).json({ message: 'No autorizado, token inválido' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'No autorizado, sin token' });
  }
};

module.exports = { protect };