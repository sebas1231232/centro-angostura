// src/App.jsx
import React, { useState, useEffect } from 'react';
import initialAnimals from './data/animals.js'; 
import AnimalCard from './components/AnimalCard.jsx';
import AnimalModal from './components/AnimalModal.jsx';
import QRModal from './components/QRModal.jsx';
import AdminLoginModal from './components/AdminLoginModal.jsx';
import AdminModal from './components/AdminModal.jsx'; 
import { v4 as uuidv4 } from 'uuid'; 

const volverImg = '/images/volver.png'; 

const API_URL_GET = 'http://localhost/api/animals.php';
const API_URL_LOGIN = 'http://localhost/api/admin_login.php';
const API_URL_CRUD = 'http://localhost/api/admin_crud.php';

function App() {
  // ... (estados sin cambios) ...
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingAnimal, setEditingAnimal] = useState(null);

  // ... (getAnimals, useEffect de carga, useEffect de filtro, handleSearch, handleFilter, handleLogin, handleLogout, handleOpenAdd, handleOpenEdit, handleCloseEdit - todos sin cambios) ...
  const getAnimals = async () => {
    if (animals.length === 0) {
      setIsLoading(true);
    }
    try {
      const response = await fetch(API_URL_GET); 
      if (!response.ok) {
        throw new Error('La API local falló. Usando datos de respaldo.');
      }
      const animalsData = await response.json();
      setAnimals(animalsData);
    } catch (error) {
      console.warn(error.message);
      setAnimals(initialAnimals);
    }
    setIsLoading(false);
  };
  
  useEffect(() => {
    getAnimals();
  }, []);

  useEffect(() => {
    let result = animals;
    if (activeFilter !== 'Todos') {
      const filterLower = activeFilter.toLowerCase().slice(0, -1); 
      result = result.filter(animal => 
        animal.tipo && animal.tipo.toLowerCase().includes(filterLower)
      );
    }
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
    const response = await fetch(API_URL_LOGIN, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    if (data.success) {
      setIsAdmin(true);
      setIsLoginModalOpen(false);
    } else {
      alert(`Error: ${data.message}`);
      throw new Error(data.message || 'Error de login');
    }
  };

  const handleLogout = () => {
    setIsAdmin(false);
  };

  const handleOpenAdd = () => {
    setEditingAnimal(null); 
    setIsEditModalOpen(true);
  };

  const handleOpenEdit = (animal) => {
    setEditingAnimal(animal);
    setIsEditModalOpen(true);
  };

  const handleCloseEdit = () => {
    setIsEditModalOpen(false);
    setEditingAnimal(null);
  };
  
  // --- CAMBIO: handleSaveAnimal ahora recibe FormData ---
  const handleSaveAnimal = async (formData) => {
    // Ya no necesita JSON.stringify ni headers
    const response = await fetch(API_URL_CRUD, {
      method: 'POST',
      body: formData // Simplemente envía el FormData
    });

    const data = await response.json();

    if (data.success) {
      handleCloseEdit();
      await getAnimals(); // Recargamos los animales
    } else {
      throw new Error(data.message || 'Error al guardar');
    }
  };
  // --- FIN DE CAMBIO ---

  // --- CAMBIO: handleDeleteAnimal ahora recibe la imageURL ---
  const handleDeleteAnimal = async (animalId, imageURL) => {
    if (!window.confirm("¿Estás seguro de que quieres eliminar este animal?")) {
      return;
    }

    try {
      const response = await fetch(API_URL_CRUD, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Añadimos la imageURL para que PHP sepa qué archivo borrar
        body: JSON.stringify({ 
          accion: 'eliminar', 
          id: animalId,
          imageURL: imageURL 
        }) 
      });

      const data = await response.json();

      if (data.success) {
        await getAnimals(); // Recargamos
      } else {
        throw new Error(data.message || 'Error al eliminar');
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };
  // --- FIN DE CAMBIO ---


  const filterColors = {
    Todos: 'bg-purple-400',
    Aves: 'bg-sky-400',
    Mamíferos: 'bg-green-400',
    Reptiles: 'bg-orange-400',
    Anfibios: 'bg-lime-400',
    Peces: 'bg-yellow-400',
  };
  const activeColor = 'bg-red-500 text-white scale-110';
  const inactiveColor = 'text-gray-800 hover:scale-105';

  return (
    <div className="min-h-screen bg-gray-100 font-luckiest relative">
      <video autoPlay loop muted playsInline className="video-background">
        {/* --- CAMBIO: Usamos tu nombre de video --- */}
        <source src="/videos/video_fondo.mp4" type="video/mp4" />
      </video>
      
      {/* ... (Nav, Filtros - sin cambios) ... */}
       <nav className="bg-blue-500 p-4 shadow-md sticky top-0 z-40">
        <div className="container mx-auto flex justify-between items-center px-2 md:px-4">
          <img src="/images/Logo-Angostura.png" alt="Angostura del Biobío" className="h-12" />
          
          <div className="relative">
            <input 
              type="text" 
              placeholder="BUSCAR" 
              className="px-4 py-2 rounded-full w-40 md:w-64 text-sm"
              onChange={(e) => handleSearch(e.target.value)}
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
          </div>

          <div className="flex items-center gap-3 md:gap-6">
            
            <button 
              className="flex items-center gap-2 text-white font-semibold text-xs md:text-base"
              onClick={() => setIsQrModalOpen(true)}
            >
              <span className="hidden md:inline">COMPARTIR PANTALLA INTERACTIVA</span>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.186 2.25 2.25 0 0 0-3.933 2.186Z" />
              </svg>
            </button>
            
            {isAdmin ? (
              <>
                <button onClick={handleOpenAdd} className="p-2 rounded-full bg-green-500 text-white" title="Añadir nuevo animal">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </button>
                <button onClick={handleLogout} className="p-2 rounded-full bg-red-500 text-white" title="Salir del modo Admin">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                  </svg>
                </button>
              </>
            ) : (
              <button onClick={() => setIsLoginModalOpen(true)} className="p-2 rounded-full bg-white text-blue-500" title="Modo Admin">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </nav>

      <div className="container mx-auto p-4 flex justify-center gap-3 flex-wrap">
        {Object.keys(filterColors).map(filter => (
          <button 
            key={filter}
            onClick={() => handleFilter(filter)}
            className={`px-6 py-2 rounded-full font-bold text-sm shadow-md transition-transform duration-150 ease-in-out font-luckiest tracking-wider
              ${activeFilter === filter 
                ? activeColor
                : `${filterColors[filter]} ${inactiveColor}`
              }
            `}
          >
            {filter.toUpperCase()}
          </button>
        ))}
      </div>

      <main className="container mx-auto p-4">
        {isLoading ? (
          <div className="text-center text-gray-500">Cargando...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAnimals.map(animal => (
              <AnimalCard 
                key={animal.id} 
                animal={animal} 
                isAdmin={isAdmin}
                onOpen={() => setSelectedAnimal(animal)}
                onEdit={() => handleOpenEdit(animal)}
                // --- CAMBIO: Pasamos la imageURL al borrar ---
                onDelete={() => handleDeleteAnimal(animal.id, animal.imageURL)}
              />
            ))}
          </div>
        )}
      </main>

      {/* ... (Modales - sin cambios) ... */}
      {selectedAnimal && (
        <AnimalModal 
          animal={selectedAnimal} 
          onClose={() => setSelectedAnimal(null)} 
          volverImg={volverImg}
        />
      )}
      {isQrModalOpen && ( <QRModal onClose={() => setIsQrModalOpen(false)} /> )}
      
      {isLoginModalOpen && (
        <AdminLoginModal 
          onClose={() => setIsLoginModalOpen(false)}
          onSuccess={handleLogin}
        />
      )}

      {isEditModalOpen && (
        <AdminModal 
          key={editingAnimal ? editingAnimal.id : 'new'} 
          initialData={editingAnimal}
          onClose={handleCloseEdit}
          onSave={handleSaveAnimal}
        />
      )}
    </div>
  );
}

export default App;