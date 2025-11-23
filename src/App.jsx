// src/App.jsx
import React, { useState, useEffect, useRef } from 'react'; // Importar useRef
import AnimalCard from './components/AnimalCard.jsx';
import AnimalModal from './components/AnimalModal.jsx';
import QRModal from './components/QRModal.jsx';
import AdminLoginModal from './components/AdminLoginModal.jsx';
import AdminModal from './components/AdminModal.jsx'; 
import AudioControls from './components/AudioControls.jsx'; // Importar nuevo componente
import { v4 as uuidv4 } from 'uuid'; 

const volverImg = '/images/volver.png'; 

const API_URL_GET = '/api/animals.php';
const API_URL_LOGIN = '/api/admin_login.php';
const API_URL_CRUD = '/api/admin_crud.php';

function App() {
  const [animals, setAnimals] = useState([]);
  const [filteredAnimals, setFilteredAnimals] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null); 

  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Todos');
  const [selectedAnimal, setSelectedAnimal] = useState(null);
  const [isQrModalOpen, setIsQrModalOpen] = useState(false);
  
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editingAnimal, setEditingAnimal] = useState(null);

  // --- ESTADOS DE AUDIO ---
  const [isAudioSettingsOpen, setIsAudioSettingsOpen] = useState(false);
  const [bgVolume, setBgVolume] = useState(0.3); // Volumen inicial fondo (30%)
  const [animalVolume, setAnimalVolume] = useState(1.0); // Volumen inicial animales (100%)
  const [isBgPlaying, setIsBgPlaying] = useState(false);
  const bgAudioRef = useRef(null); // Referencia al audio de fondo
  // ------------------------

  const getAnimals = async () => {
    if (animals.length === 0) {
      setIsLoading(true);
    }
    setError(null); 
    try {
      const response = await fetch(API_URL_GET); 
      if (!response.ok) {
        throw new Error(`Error ${response.status}: No se pudieron cargar los datos.`);
      }
      const animalsData = await response.json();
      if (animalsData.error) {
         throw new Error(`Error de la API: ${animalsData.error}`);
      }
      setAnimals(animalsData);
    } catch (error) {
      console.error("Error al cargar animales:", error);
      setError(error.message); 
    }
    setIsLoading(false);
  };
  
  useEffect(() => {
    getAnimals();
  }, []);

  // --- EFECTO PARA AUDIO DE FONDO ---
  useEffect(() => {
    const audio = bgAudioRef.current;
    if (audio) {
      audio.volume = bgVolume;
      // Intentar reproducir automáticamente
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsBgPlaying(true);
          })
          .catch(error => {
            console.log("Autoplay bloqueado. El usuario debe iniciar el audio manualmente.");
            setIsBgPlaying(false);
          });
      }
    }
  }, []); // Se ejecuta solo al montar

  // Efecto para actualizar volumen en tiempo real
  useEffect(() => {
    if (bgAudioRef.current) {
      bgAudioRef.current.volume = bgVolume;
    }
  }, [bgVolume]);
  // ----------------------------------

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

  const handleSearch = (term) => { setSearchTerm(term); };
  const handleFilter = (filter) => { setActiveFilter(filter); };

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

  const handleLogout = () => { setIsAdmin(false); };

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
  const handleSaveAnimal = async (formData) => {
    const response = await fetch(API_URL_CRUD, {
      method: 'POST',
      body: formData
    });
    const data = await response.json();
    if (data.success) {
      handleCloseEdit();
      await getAnimals(); 
    } else {
      throw new Error(data.message || 'Error al guardar');
    }
  };
  const handleDeleteAnimal = async (animalId, imageURL, audioURL) => {
    if (!window.confirm("¿Estás seguro de que quieres eliminar este animal?")) {
      return;
    }
    try {
      const response = await fetch(API_URL_CRUD, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ accion: 'eliminar', id: animalId, imageURL: imageURL, audioURL: audioURL }) 
      });
      const data = await response.json();
      if (data.success) {
        await getAnimals(); 
      } else {
        throw new Error(data.message || 'Error al eliminar');
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
  };

  // Función para pausar/reproducir fondo manualmente
  const toggleBgMusic = () => {
    if (bgAudioRef.current) {
      if (isBgPlaying) {
        bgAudioRef.current.pause();
        setIsBgPlaying(false);
      } else {
        bgAudioRef.current.play();
        setIsBgPlaying(true);
      }
    }
  };

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
    <div className="min-h-screen font-luckiest relative">
      
      {/* --- AUDIO DE FONDO --- */}
      <audio ref={bgAudioRef} loop src="/audio/fondo.mp3" />
      
      <nav className="bg-blue-500 p-4 shadow-md sticky top-0 z-40">
        <div className="container mx-auto flex items-center px-2 md:px-4">
          <div className="flex-1">
            <img src="/images/Logo-Angostura.png" alt="Angostura del Biobío" className="h-12" />
          </div>
          <div className="flex-1 flex justify-center px-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="BUSCAR" 
                className="px-4 py-2 rounded-full w-64 md:w-96 text-sm"
                onChange={(e) => handleSearch(e.target.value)}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">🔍</span>
            </div>
          </div>
          <div className="flex-1 flex justify-end">
            <div className="flex items-center gap-3 md:gap-6">
              
              {/* --- BOTÓN DE CONFIGURACIÓN DE AUDIO --- */}
              <button 
                onClick={() => setIsAudioSettingsOpen(true)}
                className="p-2 rounded-full bg-white/20 hover:bg-white/40 text-white transition-colors"
                title="Configurar Sonido"
              >
                {isBgPlaying ? '🔊' : '🔇'}
              </button>

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
          <div className="text-center text-white text-xl p-4 bg-black/50 rounded-lg">Cargando...</div>
        ) : error ? (
          <div className="text-center text-yellow-400 bg-red-800 p-4 rounded-lg">
            <p className="font-bold text-2xl">Error al cargar</p>
            <p className="font-quicksand">{error}</p>
            <p className="font-quicksand mt-2 text-sm">Asegúrate de que XAMPP (Apache y MySQL) esté funcionando.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredAnimals.map(animal => (
              <AnimalCard 
                key={animal.id} 
                animal={animal} 
                isAdmin={isAdmin}
                onOpen={() => setSelectedAnimal(animal)}
                onEdit={() => handleOpenEdit(animal)}
                onDelete={() => handleDeleteAnimal(animal.id, animal.imageURL, animal.audioURL)}
              />
            ))}
          </div>
        )}
      </main>

      {selectedAnimal && (
        <AnimalModal 
          animal={selectedAnimal} 
          onClose={() => setSelectedAnimal(null)} 
          volverImg={volverImg}
          volume={animalVolume} // <-- Pasamos el volumen al modal
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

      {/* --- MODAL DE CONFIGURACIÓN DE AUDIO --- */}
      {isAudioSettingsOpen && (
        <AudioControls
          bgVolume={bgVolume}
          setBgVolume={setBgVolume}
          animalVolume={animalVolume}
          setAnimalVolume={setAnimalVolume}
          isBgPlaying={isBgPlaying}
          toggleBgMusic={toggleBgMusic}
          onClose={() => setIsAudioSettingsOpen(false)}
        />
      )}
    </div>
  );
}

export default App;