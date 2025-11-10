// frontend/src/App.jsx (Ejemplo de cambios clave)
import React, { useState, useEffect, useCallback } from 'react';
import Header from './components/Header';
import AnimalCard from './components/AnimalCard';
import AnimalModal from './components/AnimalModal';
import AdminLoginModal from './components/AdminLoginModal';
import AdminModal from './components/AdminModal';
import QRModal from './components/QRModal'; // Asumiendo que tienes este componente
import { getAnimales, getCategorias, deleteAnimal, createAnimal, updateAnimal, loginAdmin } from './services/api'; // Importar desde api.js

function App() {
  const [animales, setAnimales] = useState([]);
  const [categorias, setCategorias] = useState([]); // Nuevo estado para categorías
  const [filteredAnimales, setFilteredAnimales] = useState([]);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos'); // Usaremos 'Todos' o el id_categoria

  // Estado de Modales
  const [showAnimalModal, setShowAnimalModal] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showQRModal, setShowQRModal] = useState(false); // Asumiendo QRModal
  const [editingAnimal, setEditingAnimal] = useState(null); // Para saber si editamos o añadimos

  // Estado de Autenticación
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminToken, setAdminToken] = useState(localStorage.getItem('adminToken')); // Leer token inicial

  // Estado de Carga y Error
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // --- Carga Inicial de Datos ---
  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const [animalesRes, categoriasRes] = await Promise.all([
        getAnimales(), // Carga inicial sin filtros
        getCategorias()
      ]);
      setAnimales(animalesRes.data);
      setFilteredAnimales(animalesRes.data); // Mostrar todos al inicio
      // Crear un objeto 'Todos' para los filtros
      setCategorias([{ id_categoria: 'Todos', nombre_categoria: 'Todos' }, ...categoriasRes.data]);
    } catch (err) {
      console.error("Error al cargar datos:", err);
      setError('No se pudieron cargar los datos. Intenta de nuevo más tarde.');
    } finally {
      setLoading(false);
    }
  }, []); // useCallback para evitar recreación innecesaria

  useEffect(() => {
    fetchData();
    // Verificar si hay un token válido al cargar la app
    if (adminToken) {
        // Podrías añadir una llamada a una ruta protegida /api/auth/verify para asegurarte que el token es válido
        // Si es válido:
        setIsAdmin(true);
        // Si no es válido (ej: expiró):
        // handleLogout();
    }
  }, [fetchData, adminToken]); // Dependencia adminToken para re-evaluar si cambia

  // --- Filtrado y Búsqueda ---
  useEffect(() => {
    let result = animales;

    // Filtrar por categoría (usando id_categoria)
    if (selectedCategory !== 'Todos') {
       const categoryIdNum = parseInt(selectedCategory, 10); // Asegurarse que es número
      result = result.filter(animal => animal.id_categoria === categoryIdNum);
    }

    // Filtrar por término de búsqueda
    if (searchTerm) {
      result = result.filter(animal =>
        animal.nombre_comun.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (animal.nombre_cientifico && animal.nombre_cientifico.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    setFilteredAnimales(result);
  }, [searchTerm, selectedCategory, animales]);

   // --- Manejadores de Modales ---
   const handleCardClick = (animal) => {
    setSelectedAnimal(animal);
    setShowAnimalModal(true);
  };

  const closeAnimalModal = () => {
    setShowAnimalModal(false);
    setSelectedAnimal(null);
  };

  const openAdminModal = (animal = null) => {
    setEditingAnimal(animal); // Si es null, es añadir; si tiene datos, es editar
    setShowAdminModal(true);
  };

  const closeAdminModal = () => {
    setShowAdminModal(false);
    setEditingAnimal(null);
  };

   const openLoginModal = () => setShowLoginModal(true);
   const closeLoginModal = () => setShowLoginModal(false);

   const openQRModal = () => setShowQRModal(true); // Asumiendo QRModal
   const closeQRModal = () => setShowQRModal(false); // Asumiendo QRModal

  // --- Lógica de Admin ---
  const handleLogin = async (email, password) => {
    try {
      const response = await loginAdmin(email, password);
      if (response.data.token) {
        localStorage.setItem('adminToken', response.data.token);
        setAdminToken(response.data.token); // Actualizar estado
        setIsAdmin(true);
        closeLoginModal();
        setError(null); // Limpiar errores previos
      }
    } catch (err) {
      console.error('Error de login:', err.response?.data?.message || err.message);
      // Mostrar error al usuario en el modal de login
      return err.response?.data?.message || 'Error al iniciar sesión';
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    setAdminToken(null);
    setIsAdmin(false);
  };

  const handleSaveAnimal = async (animalData) => {
    try {
      if (editingAnimal) {
        // Actualizar
        await updateAnimal(editingAnimal.id_animal, animalData);
      } else {
        // Crear
        await createAnimal(animalData);
      }
      closeAdminModal();
      fetchData(); // Recargar la lista de animales
    } catch (err) {
      console.error("Error al guardar animal:", err.response?.data?.message || err.message);
      // Aquí podrías mostrar un error al usuario dentro del AdminModal
      alert(`Error al guardar: ${err.response?.data?.message || err.message}`);
    }
  };

  const handleDeleteAnimal = async (id) => {
    // Confirmación (como la tenías antes)
    if (window.confirm('¿Estás seguro de que deseas eliminar este animal?')) {
      try {
        await deleteAnimal(id);
        fetchData(); // Recargar la lista
      } catch (err) {
        console.error("Error al eliminar animal:", err.response?.data?.message || err.message);
         alert(`Error al eliminar: ${err.response?.data?.message || err.message}`);
      }
    }
  };

  // --- Renderizado ---
  return (
    <div className="min-h-screen bg-gray-100 font-quicksand">
      <Header
        onSearch={setSearchTerm}
        onCategoryChange={setSelectedCategory}
        categories={categorias} // Pasar categorías al Header
        selectedCategory={selectedCategory}
        onLoginClick={openLoginModal}
        onLogoutClick={handleLogout}
        isAdmin={isAdmin}
        onAddAnimalClick={() => openAdminModal()} // Pasar manejador para abrir modal de añadir
        onShareClick={openQRModal} // Asumiendo QRModal
      />

      <main className="container mx-auto p-4 pt-28 md:pt-32"> {/* Ajustar padding top si es necesario */}
         {loading && <p className="text-center text-gray-600">Cargando animales...</p>}
         {error && <p className="text-center text-red-600 bg-red-100 p-3 rounded">{error}</p>}

        {!loading && !error && (
            filteredAnimales.length > 0 ? (
                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredAnimales.map((animal) => (
                    <AnimalCard
                        key={animal.id_animal} // Usar id_animal de la BD
                        animal={animal}
                        onClick={() => handleCardClick(animal)}
                        isAdmin={isAdmin}
                        onEdit={() => openAdminModal(animal)}
                        onDelete={() => handleDeleteAnimal(animal.id_animal)}
                    />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-500 mt-10">No se encontraron animales con esos criterios.</p>
            )
        )}
      </main>

      {/* --- Modales --- */}
      {showAnimalModal && selectedAnimal && (
        <AnimalModal animal={selectedAnimal} onClose={closeAnimalModal} />
      )}

      {showLoginModal && (
        <AdminLoginModal onClose={closeLoginModal} onLogin={handleLogin} />
      )}

      {showAdminModal && (
        <AdminModal
          animal={editingAnimal}
          categories={categorias.filter(c => c.id_categoria !== 'Todos')} // No pasar 'Todos' al modal admin
          onClose={closeAdminModal}
          onSave={handleSaveAnimal}
        />
      )}

       {/* Asumiendo QRModal */}
      {showQRModal && (
          <QRModal onClose={closeQRModal} />
      )}
    </div>
  );
}

export default App;