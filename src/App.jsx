import React, { useMemo, useState, useEffect } from 'react';
import Header from './components/Header';
import AnimalCard from './components/AnimalCard';
import AdminModal from './components/AdminModal';
import AnimalModal from './components/AnimalModal';
import AdminLoginModal from './components/AdminLoginModal';
import initialAnimals from './data/animals';
import useLocalStorage from './hooks/useLocalStorage';

const ADMIN_PASSWORD = 'admin1234';
const ADMIN_TIMEOUT = 5 * 60 * 1000; // 5 minutos en milisegundos

export default function App() {
  const [animals, setAnimals] = useLocalStorage('angostura_animals', initialAnimals);
  const [query, setQuery] = useState('');
  const [filterType, setFilterType] = useState('Todos');
  const [selected, setSelected] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminLoginOpen, setAdminLoginOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [toEdit, setToEdit] = useState(null);

  const types = useMemo(() => ['Todos', ...Array.from(new Set(animals.map(a => a.type || 'Otro')))], [animals]);

  // Lógica para cerrar sesión de administrador por inactividad
  useEffect(() => {
    let timeoutId;
    if (isAdmin) {
      const resetTimeout = () => {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          setIsAdmin(false);
          alert('Modo administrador desactivado por inactividad.');
        }, ADMIN_TIMEOUT);
      };

      const handleUserActivity = () => {
        resetTimeout();
      };

      window.addEventListener('mousemove', handleUserActivity);
      window.addEventListener('keydown', handleUserActivity);
      window.addEventListener('click', handleUserActivity);
      resetTimeout();

      return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('mousemove', handleUserActivity);
        window.removeEventListener('keydown', handleUserActivity);
        window.removeEventListener('click', handleUserActivity);
      };
    }
  }, [isAdmin]);

  function handleSearch(q) {
    setQuery(q);
  }

  function openAdminPrompt() {
    setAdminLoginOpen(true);
  }

  function closeAdminSession() {
    setIsAdmin(false);
    setSelected(null);
    alert('Modo administrador desactivado.');
  }

  function handleAdd() {
    setToEdit(null);
    setAdminModalOpen(true);
  }

  function handleEdit(animal) {
    setToEdit(animal);
    setAdminModalOpen(true);
  }

  function handleDelete(id) {
    if (!confirm('¿Eliminar este animal?')) return;
    setAnimals(prev => prev.filter(p => p.id !== id));
  }
  function handleOpenAnimalModal(animal) {
  setSelected(animal); // Asegúrate de que esta línea esté presente y correcta
  }

  function saveAnimal(an) {
    if (!an.name) return alert('Debe indicar un nombre');
    setAnimals(prev => {
      const exists = prev.find(p => p.id === an.id);
      if (exists) return prev.map(p => p.id === an.id ? an : p);
      return [an, ...prev];
    });
    setAdminModalOpen(false);
  }

  const filtered = animals.filter(a => {
    const matchesQuery = a.name.toLowerCase().includes(query.toLowerCase()) || (a.description || '').toLowerCase().includes(query.toLowerCase());
    const matchesType = filterType === 'Todos' || (a.type || 'Otro') === filterType;
    return matchesQuery && matchesType;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header
        title={"Fauna del Centro Turístico"}
        onSearch={handleSearch}
        isAdmin={isAdmin}
        onOpenAdminPrompt={openAdminPrompt}
        onOpenAdd={handleAdd}
        onCloseAdminSession={closeAdminSession}
      />

      <main className="p-6 flex-1 app-container">
        <div className="filter-row">
          <span className="text-sm font-semibold">Filtrar:</span>
          {types.map((t) => (
            <button
              key={t}
              onClick={() => setFilterType(t)}
              className={`filter-button ${filterType === t ? 'active' : ''}`}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="text-sm text-gray-300 mt-4">Resultados: {filtered.length}</div>
        
        <div className="content-grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {filtered.map((a) => (
            <AnimalCard
              key={a.id}
              animal={a}
              onOpen={(x) => setSelected(x)}
              isAdmin={isAdmin}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </main>

      <footer className="p-4 text-center text-xs text-gray-500">
        Centro de Visitantes Angostura — Región del Bío Bío
      </footer>

      {selected && <AnimalModal animal={selected} onClose={() => setSelected(null)} />}
      {adminModalOpen && (
        <AdminModal
          initial={toEdit}
          onClose={() => setAdminModalOpen(false)}
          onSave={saveAnimal}
        />
      )}
      {adminLoginOpen && (
        <AdminLoginModal
          onClose={() => setAdminLoginOpen(false)}
          onSuccess={() => {
            setIsAdmin(true);
            alert("Modo administrador activado");
            setAdminLoginOpen(false);
          }}
        />
      )}
    </div>
  );
}