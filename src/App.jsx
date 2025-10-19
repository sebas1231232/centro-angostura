// src/App.jsx
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { 
  fetchAnimals, saveAnimal, createAnimal, deleteAnimal, 
  loginAdmin, logoutAdmin, onAdminStateChange 
} from './firebase'; // Asegúrate que la ruta sea correcta si moviste el archivo

import AnimalCard from './components/AnimalCard.jsx';
import AnimalModal from './components/AnimalModal.jsx';
import AdminLoginModal from './components/AdminLoginModal.jsx';
import AdminModal from './components/AdminModal.jsx';
import QRModal from './components/QRModal.jsx';

const volverImg = '/volver.png'; 

function App() {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [animalToEdit, setAnimalToEdit] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const getAnimals = async () => {
      setIsLoading(true);
      try {
        const animalsData = await fetchAnimals();
        setAnimals(animalsData);
        setFilteredAnimals(animalsData);
      } catch (error) {
        console.error("Error al cargar animales:", error);
      }
      setIsLoading(false);
    };
    getAnimals();

    const unsubscribe = onAdminStateChange((user) => {
      setIsAdmin(!!user);
    });
    return () => unsubscribe();
  }, []);

  // --- ARREGLO FILTROS ---
  useEffect(() => {
    let result = animals;

    // 1. Filtrar por tipo (más flexible)
    if (activeFilter !== 'Todos') {
      // Compara si el 'tipo' guardado INCLUYE el texto del filtro
      // Ej: "Ave terrestre" incluye "Ave"
      // Convertimos a minúscula para evitar problemas de mayúsculas
      const filterLower = activeFilter.toLowerCase().slice(0, -1); // Quitamos la 's' final (Aves -> Ave)
      result = result.filter(animal => 
        animal.tipo && animal.tipo.toLowerCase().includes(filterLower)
      );
    }

    // 2. Filtrar por búsqueda
    if (searchTerm) {
      result = result.filter(animal => 
        animal.nombre.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredAnimals(result);
  }, [searchTerm, activeFilter, animals]);


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
    if (animalData.isNew) {
        delete animalData.isNew;
        await createAnimal(animalData);
    } else {
        await saveAnimal(animalData);
    }
    
    const animalsData = await fetchAnimals();
    setAnimals(animalsData);
    setIsEditModalOpen(false);
    setAnimalToEdit(null);
  };

  const handleDeleteAnimal = async (animalId) => {
    if (window.confirm("¿Estás seguro?")) {
      await deleteAnimal(animalId);
      const animalsData = await fetchAnimals();
      setAnimals(animalsData);
    }
  };

  const handleOpenAddModal = () => {
    setAnimalToEdit({ id: uuidv4(), nombre: '', nombreCientifico: '', tipo: 'Ave', dondeVive: '', comoEs: '', queCome: '', reproduccion: '', datoCurioso: '', imageURL: '', isNew: true });
    setIsEditModalOpen(true);
  };
  
  const handleOpenEditModal = (animal) => {
    setAnimalToEdit(animal);
    setIsEditModalOpen(true);
  };
  
  // --- Colores para los filtros ---
  const filterColors = {
    Todos: 'bg-purple-400',
    Aves: 'bg-sky-400',
    Mamíferos: 'bg-green-400',
    Reptiles: 'bg-orange-400',
    Anfibios: 'bg-lime-400',
    Peces: 'bg-yellow-400',
  };
  const activeColor = 'bg-red-500 text-white scale-110'; // Estilo activo más llamativo
  const inactiveColor = 'text-gray-800 hover:scale-105'; // Estilo inactivo

  return (
    // --- CAMBIO: Fuente principal ---
    <div className="min-h-screen bg-gray-100 font-luckiest">
      {/* --- Header / Navbar --- */}
      <nav className="bg-blue-500 p-4 shadow-md sticky top-0 z-40">
        {/* --- CAMBIO: Ajuste de padding y contenedor --- */}
        <div className="container mx-auto flex justify-between items-center px-2 md:px-4">
          <img src="/Logo-Angostura.png" alt="Angostura del Biobío" className="h-12" />
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="BUSCAR" 
              className="px-4 py-2 rounded-full w-40 md:w-64 text-sm"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>

          {/* --- CAMBIO: Aumentado el espacio (gap-6) --- */}
          <div className="flex items-center gap-3 md:gap-6">
            <button 
              className="flex items-center gap-2 text-white font-semibold text-xs md:text-base" // Texto más pequeño en móvil
              onClick={() => setIsQrModalOpen(true)}
            >
              <span className="hidden md:inline">COMPARTIR PANTALLA INTERACTIVA</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.186 2.25 2.25 0 0 0-3.933 2.186Z" />
              </svg>
            </button>
            
            {isAdmin ? ( /* Botones Admin sin cambios de fuente */
                <button onClick={handleLogout} className="p-2 rounded-full bg-red-500 text-white" title="Salir">...</button>
            ) : (
                <button onClick={() => setIsLoginModalOpen(true)} className="p-2 rounded-full bg-white text-blue-500" title="Admin">...</button>
            )}
            {isAdmin && (
                <button onClick={handleOpenAddModal} className="p-2 rounded-full bg-green-500 text-white" title="Añadir">...</button>
            )}
          </div>
        </div>
      </nav>

      {/* --- Filtros --- */}
      <div className="container mx-auto p-4 flex justify-center gap-3 flex-wrap">
        {/* Usamos Object.keys para obtener los nombres de los filtros */}
        {Object.keys(filterColors).map(filter => (
          <button 
            key={filter}
            onClick={() => handleFilter(filter)}
            // --- CAMBIO: Aplicando colores dinámicos y fuente ---
            className={`px-6 py-2 rounded-full font-bold text-sm shadow-md transition-transform duration-150 ease-in-out font-luckiest tracking-wider
              ${activeFilter === filter 
                ? activeColor // Estilo activo con rojo
                : `${filterColors[filter]} ${inactiveColor}` // Color base + estilo inactivo
              }
            `}
          >
            {filter.toUpperCase()}
          </button>
        ))}
      </div>

      {/* --- Grilla de Animales (Aplicará font-luckiest por herencia) --- */}
      <main className="container mx-auto p-4">
        {isLoading ? (
          <div className="text-center text-gray-500">Cargando...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAnimals.map(animal => (
              <AnimalCard 
                key={animal.id} animal={animal} isAdmin={isAdmin}
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
      {isLoginModalOpen && ( <AdminLoginModal onClose={() => setIsLoginModalOpen(false)} onSuccess={handleLogin} /> )}
      {isQrModalOpen && ( <QRModal onClose={() => setIsQrModalOpen(false)} /> )}
      {isEditModalOpen && ( <AdminModal initialData={animalToEdit} onClose={() => { setIsEditModalOpen(false); setAnimalToEdit(null); }} onSave={handleSaveAnimal} /> )}
    </div>
  );
}

export default App;