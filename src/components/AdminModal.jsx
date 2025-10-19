// src/components/AdminModal.jsx
import React, { useState } from 'react'; // Eliminamos useEffect de aquí

// Componente pequeño para los inputs (sin cambios)
const InputField = ({ label, name, value, onChange, placeholder = '', rows = 1 }) => (
  <label className="block mb-3 font-quicksand"> {/* Aplicamos Quicksand a las etiquetas */}
    <span className="text-gray-700 font-bold">{label}</span>
    {rows > 1 ? (
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows={rows}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 font-quicksand" // Fuente Quicksand
      />
    ) : (
      <input
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 font-quicksand" // Fuente Quicksand
      />
    )}
  </label>
);


export default function AdminModal({ initialData, onClose, onSave }) {
  // --- CAMBIO AQUÍ: Inicialización del estado más simple ---
  // Usamos una función para que initialData solo se lea una vez al inicio.
  const [animal, setAnimal] = useState(() => initialData);

  // Ya NO necesitamos el useEffect que actualizaba 'animal' si 'initialData' cambiaba

  function handleChange(e) {
    const { name, value } = e.target;
    setAnimal(prev => ({ ...prev, [name]: value }));
  }

  function handleSave() {
    onSave(animal);
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        // Usamos un fondo sólido simple para el modal de admin, más claro
        className="bg-white rounded-2xl p-6 md:p-8 w-full max-w-3xl relative shadow-lg h-[90vh] overflow-y-auto" 
        onClick={(e) => e.stopPropagation()}
      >
        {/* Fuente Luckiest para el título */}
        <h2 className="text-2xl font-bold mb-6 text-gray-800 font-luckiest text-center"> 
          {initialData?.isNew ? 'Añadir Nuevo Animal' : 'Editar Animal'}
        </h2>
        
        {/* Formulario con campos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4">
          <InputField label="Nombre" name="nombre" value={animal.nombre} onChange={handleChange} placeholder="Perdiz Chilena" />
          <InputField label="Nombre Científico" name="nombreCientifico" value={animal.nombreCientifico} onChange={handleChange} placeholder="Nothoprocta perdicaria" />
          <InputField label="Tipo" name="tipo" value={animal.tipo} onChange={handleChange} placeholder="Ave terrestre" />
          <InputField label="URL de Imagen" name="imageURL" value={animal.imageURL} onChange={handleChange} placeholder="https://..." />
        
          {/* Usamos col-span-2 para que estos campos ocupen todo el ancho en desktop */}
          <div className="md:col-span-2">
             <InputField label="Dónde vive" name="dondeVive" value={animal.dondeVive} onChange={handleChange} placeholder="En Chile, desde Atacama hasta el Biobío..." rows={2} />
          </div>
          <div className="md:col-span-2">
            <InputField label="Cómo es" name="comoEs" value={animal.comoEs} onChange={handleChange} placeholder="Pequeña, de color café..." rows={2} />
          </div>
          <div className="md:col-span-2">
            <InputField label="Qué come" name="queCome" value={animal.queCome} onChange={handleChange} placeholder="Semillas, raíces, insectos..." rows={2} />
          </div>
           <div className="md:col-span-2">
            <InputField label="Reproducción" name="reproduccion" value={animal.reproduccion} onChange={handleChange} placeholder="Pone hasta 12 huevos..." rows={2} />
          </div>
           <div className="md:col-span-2">
            <InputField label="Dato curioso" name="datoCurioso" value={animal.datoCurioso} onChange={handleChange} placeholder="Su silbido es fuerte..." rows={2} />
          </div>
        </div>
        
        {/* Botones de acción (con fuente Luckiest) */}
        <div className="flex justify-end gap-4 mt-8">
          <button onClick={onClose} className="px-6 py-2 bg-gray-500 text-white font-bold rounded-lg shadow hover:bg-gray-600 transition font-luckiest">
            Cancelar
          </button>
          <button onClick={handleSave} className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition font-luckiest">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}