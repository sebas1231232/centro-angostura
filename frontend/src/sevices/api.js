// frontend/src/services/api.js
import axios from 'axios';

// Configura la URL base de tu API backend
// Asegúrate de que coincida con donde corre tu backend (ej: http://localhost:5000)
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Interceptor para añadir el token JWT a las peticiones protegidas
apiClient.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('adminToken'); // O donde almacenes el token
    if (token && config.headers) {
        // Asegúrate de que config.headers no sea undefined
       config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// --- Funciones para interactuar con la API ---

// Auth
export const loginAdmin = (email, password) => {
  return apiClient.post('/auth/login', { email, password });
};

// Categorías
export const getCategorias = () => {
  return apiClient.get('/categorias');
};
// Añadir create, update, delete si es necesario...

// Animales
export const getAnimales = (params = {}) => {
  // params puede ser { categoria: id, buscar: 'texto' }
  return apiClient.get('/animales', { params });
};

export const getAnimalById = (id) => {
  return apiClient.get(`/animales/${id}`);
};

export const createAnimal = (animalData) => {
  return apiClient.post('/animales', animalData);
};

export const updateAnimal = (id, animalData) => {
  return apiClient.put(`/animales/${id}`, animalData);
};

export const deleteAnimal = (id) => {
  return apiClient.delete(`/animales/${id}`);
};

export default apiClient; // Puedes exportar la instancia si necesitas más flexibilidad