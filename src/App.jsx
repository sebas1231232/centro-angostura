// src/App.jsx
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid'; // Necesitarás instalar uuid: npm install uuid

// Importar funciones de Firebase
import { 
  fetchAnimals, 
  saveAnimal, 
  createAnimal,
  deleteAnimal, 
  loginAdmin, 
  logoutAdmin, 
  onAdminStateChange 
} from './firebase';

// Importar Componentes
import Header from './components/Header.jsx';
import AnimalCard from './components/AnimalCard.jsx';
import AnimalModal from './components/AnimalModal.jsx';
import AdminLoginModal from './components/AdminLoginModal.jsx';
import AdminModal from './components/AdminModal.jsx'; // El modal de edición
import QRModal from './components/QRModal.jsx';

// Tus imágenes (asumiendo que tienes volver.png en public/images)
// Asegúrate de tener esta imagen en la carpeta `public`
const volverImg = '/images/volver.png'; 

function App() {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [isLoading, setIsLoading] = useState(true);

  // --- Estados de Modales ---
  const [selectedAnimal, setSelectedAnimal] = useState(null); // Para ver detalle
  const [animalToEdit, setAnimalToEdit] = useState(null); // Para editar
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  
  // --- Estado de Admin ---
  const [isAdmin, setIsAdmin] = useState(false);

  // --- Cargar Animales y Estado de Admin al inicio ---
  useEffect(() => {
    // Cargar animales desde Firestore
    const getAnimals = async () => {
      setIsLoading(true);
      const animalsData = await fetchAnimals();
      setAnimals(animalsData);
      setFilteredAnimals(animalsData);
      setIsLoading(false);
    };
    getAnimals();

    // Escuchar cambios de autenticación
    const unsubscribe = onAdminStateChange((user) => {
      setIsAdmin(!!user); // Si hay usuario, es admin
    });
    return () => unsubscribe(); // Limpiar al desmontar
  }, []);

  // --- Filtrado y Búsqueda ---
  useEffect(() => {
    let result = animals;

    // 1. Filtrar por tipo
    if (activeFilter !== 'Todos') {
      result = result.filter(animal => animal.tipo === activeFilter);
    }

    // 2. Filtrar por búsqueda
    if (searchTerm) {
      result = result.filter(animal => 
        animal.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredAnimals(result);
  }, [searchTerm, activeFilter, animals]);


  // --- Handlers (Manejadores de eventos) ---

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const handleFilter = (filter) => {
    setActiveFilter(filter);
  };

  const handleLogin = async (email, password) => {
    try {
      await loginAdmin(email, password);
      setIsLoginModalOpen(false);
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  const handleLogout = async () => {
    await logoutAdmin();
  };

  const handleSaveAnimal = async (animalData) => {
    // Si animalData.isNew es true, es un animal nuevo
    if (animalData.isNew) {
        delete animalData.isNew; // Limpiamos el flag
        await createAnimal(animalData);
    } else {
        // Es una edición
        await saveAnimal(animalData);
    }
    
    // Recargar la lista de animales
    const animalsData = await fetchAnimals();
    setAnimals(animalsData);
    
    setIsEditModalOpen(false);
    setAnimalToEdit(null);
  };

  const handleDeleteAnimal = async (animalId) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este animal?")) {
      await deleteAnimal(animalId);
      // Recargar la lista de animales
      const animalsData = await fetchAnimals();
      setAnimals(animalsData);
    }
  };

  // Abrir modal para Añadir
  const handleOpenAddModal = () => {
    setAnimalToEdit({
      id: uuidv4(), // Generamos un ID único
      nombre: '',
      nombreCientifico: '',
      tipo: 'Ave',
      dondeVive: '',
      comoEs: '',
      queCome: '',
      reproduccion: '',
      datoCurioso: '',
      imageURL: '',
      isNew: true // Flag para saber que es nuevo
    });
    setIsEditModalOpen(true);
  };
  
  // Abrir modal para Editar
  const handleOpenEditModal = (animal) => {
    setAnimalToEdit(animal);
    setIsEditModalOpen(true);
  };
  

  return (
    <div className="min-h-screen bg-gray-100">
      {/* --- Header / Navbar --- */}
      <nav className="bg-blue-500 p-4 shadow-md sticky top-0 z-40">
        <div className="container mx-auto flex justify-between items-center">
          <img src="/images/Logo-Angostura.png" alt="Angostura del Biobío" className="h-12" /> {/* Asegúrate de tener este logo */}
          
          {/* Barra de Búsqueda */}
          <div className="relative">
            <input 
              type="text" 
              placeholder="BUSCAR" 
              className="px-4 py-2 rounded-full w-64 text-sm"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>

          <div className="flex items-center gap-4">
            {/* Botón Compartir QR */}
            <button 
              className="flex items-center gap-2 text-white font-semibold"
              onClick={() => setIsQrModalOpen(true)}
            >
              COMPARTIR PANTALLA INTERACTIVA
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.186 2.25 2.25 0 0 0-3.933 2.186Z" />
              </svg>
            </button>
            
            {/* Botón Login/Logout Admin */}
            {isAdmin ? (
                <button onClick={handleLogout} className="p-2 rounded-full bg-red-500 text-white" title="Salir Modo Admin">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" /></svg>
                </button>
            ) : (
                <button onClick={() => setIsLoginModalOpen(true)} className="p-2 rounded-full bg-white text-blue-500" title="Modo Administrador">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" /></svg>
                </button>
            )}
            {/* Botón "Añadir" para Admin */}
            {isAdmin && (
                <button 
                  onClick={handleOpenAddModal} 
                  className="p-2 rounded-full bg-green-500 text-white" 
                  title="Añadir Animal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" /></svg>
                </button>
            )}
          </div>
        </div>
      </nav>

      {/* --- Filtros --- */}
      <div className="container mx-auto p-4 flex justify-center gap-3">
        {['Todos', 'Aves', 'Mamíferos', 'Reptiles', 'Anfibios', 'Peces'].map(filter => (
          <button 
            key={filter}
            onClick={() => handleFilter(filter)}
            className={`px-6 py-2 rounded-full font-bold text-sm shadow
              ${activeFilter === filter 
                ? 'bg-red-500 text-white' 
                : 'bg-white text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            {filter.toUpperCase()}
          </button>
        ))}
      </div>

      {/* --- Grilla de Animales --- */}
      <main className="container mx-auto p-4">
        {isLoading ? (
          <div className="text-center text-gray-500">Cargando animales...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAnimals.map(animal => (
              <AnimalCard 
                key={animal.id}
                animal={animal}
                isAdmin={isAdmin}
                onOpen={() => setSelectedAnimal(animal)}
                onEdit={() => handleOpenEditModal(animal)}
                onDelete={() => handleDeleteAnimal(animal.id)}
              />
            ))}
          </div>
        )}
      </main>

      {/* --- Modales --- */}
      {selectedAnimal && (
        <AnimalModal 
          animal={selectedAnimal} 
          onClose={() => setSelectedAnimal(null)} 
          volverImg={volverImg}
        />
      )}

      {isLoginModalOpen && (
        <AdminLoginModal 
          onClose={() => setIsLoginModalOpen(false)} 
          onSuccess={handleLogin}
        />
      )}
      
      {isQrModalOpen && (
        <QRModal onClose={() => setIsQrModalOpen(false)} />
      )}

      {isEditModalOpen && (
        <AdminModal 
          initialData={animalToEdit}
          onClose={() => { setIsEditModalOpen(false); setAnimalToEdit(null); }}
          onSave={handleSaveAnimal}
        />
      )}
    </div>
  );
}

export default App;