// src/App.jsx
import React, { useState, useEffect } from 'react';

// Importa los datos locales como respaldo
import initialAnimals from './data/animals.js'; 

import AnimalCard from './components/AnimalCard.jsx';
import AnimalModal from './components/AnimalModal.jsx';
// Los modales de Admin se han eliminado
import QRModal from './components/QRModal.jsx';

// La ruta a la imagen 'volver' (asegúrate que esté en 'public/images/')
const volverImg = '/images/volver.png'; 

function App() {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [isLoading, setIsLoading] = useState(true);
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  
  // Todos los estados de Admin (isAdmin, isLoginModalOpen, etc.) se han eliminado.

  useEffect(() => {
    // Esta función ahora carga desde tu API (XAMPP) o usa los datos locales.
    const getAnimals = async () => {
      setIsLoading(true);
      try {
        // 1. Intenta cargar desde tu API local (XAMPP)
        // CAMBIA ESTA URL por la ruta a tu API real
        const response = await fetch('/api/animals.php'); 
        
        if (!response.ok) {
          throw new Error('La API local falló. Usando datos de respaldo.');
        }
        
        const animalsData = await response.json();
        setAnimals(animalsData);
        setFilteredAnimals(animalsData);

      } catch (error) {
        console.warn(error.message);
        // 2. Si falla, usa los datos locales del archivo importado
        setAnimals(initialAnimals);
        setFilteredAnimals(initialAnimals);
      }
      setIsLoading(false);
    };
    
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

  // Todas las funciones de Admin (handleLogin, handleSaveAnimal, etc.) se han eliminado.

  // --- Colores para los filtros (Sin cambios) ---
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
    // Añadimos 'position: relative' para que el z-index funcione con el video
    <div className="min-h-screen bg-gray-100 font-luckiest relative">
      
      {/* --- FONDO DE VIDEO AÑADIDO --- */}
      {/* Debes crear la carpeta 'public/videos' y añadir 'fondo.mp4' */}
      <video autoPlay loop muted playsInline className="video-background">
        <source src="/videos/fondo.mp4" type="video/mp4" />
      </video>
      
      {/* --- Header / Navbar (Modificado) --- */}
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
            
            {/* Los botones de Admin han sido eliminados */}

          </div>
        </div>
      </nav>

      {/* --- Filtros (Sin cambios) --- */}
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

      {/* --- Grilla de Animales (Modificada) --- */}
      <main className="container mx-auto p-4">
        {isLoading ? (
          <div className="text-center text-gray-500">Cargando...</div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAnimals.map(animal => (
              <AnimalCard 
                key={animal.id} 
                animal={animal} 
                // Se eliminaron las props de admin
                onOpen={() => setSelectedAnimal(animal)}
              />
            ))}
          </div>
        )}
      </main>

      {/* --- Modales (Modificado) --- */}
      {selectedAnimal && (
        <AnimalModal 
          animal={selectedAnimal} 
          onClose={() => setSelectedAnimal(null)} 
          volverImg={volverImg}
        />
      )}
      {isQrModalOpen && ( <QRModal onClose={() => setIsQrModalOpen(false)} /> )}
      
      {/* Los modales de Admin han sido eliminados */}
    </div>
  );
}

export default App;