// src/components/AdminModal.jsx
import React, { useState, useEffect } from 'react';

// Recibimos `initialData` en lugar de `initial`
export default function AdminModal({ initialData, onClose, onSave }) {
  const [animal, setAnimal] = useState(initialData);

  // Sincronizar estado si la data inicial cambia
  useEffect(() => {
    setAnimal(initialData);
  }, [initialData]);

  function handleChange(e) {
    const { name, value } = e.target;
    setAnimal(prev => ({ ...prev, [name]: value }));
  }

  function handleSave() {
    onSave(animal);
  }

  // Componente pequeño para los inputs
  const InputField = ({ label, name, value, onChange, placeholder = '', rows = 1 }) => (
    <label className="block mb-3">
      <span className="text-gray-700 font-bold">{label}</span>
      {rows > 1 ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      ) : (
        <input
          type="text"
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        />
      )}
    </label>
  );

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={onClose}>
      <div 
        className="bg-lime-100 border-8 border-lime-300 rounded-3xl p-8 w-full max-w-3xl relative shadow-lg h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4 text-lime-800">
          {initialData.isNew ? 'Añadir Nuevo Animal' : 'Editar Animal'}
        </h2>
        
        {/* Aquí iría el botón "EDITAR IMAGEN" de la Imagen 6 */}
        {/* Por ahora, usamos un input de URL para la imagen */}
        <div className="grid grid-cols-2 gap-x-6">
          <InputField label="Nombre" name="nombre" value={animal.nombre} onChange={handleChange} placeholder="Perdiz Chilena" />
          <InputField label="Nombre Científico" name="nombreCientifico" value={animal.nombreCientifico} onChange={handleChange} placeholder="Nothoprocta perdicaria" />
          <InputField label="Tipo" name="tipo" value={animal.tipo} onChange={handleChange} placeholder="Ave" />
          <InputField label="URL de Imagen" name="imageURL" value={animal.imageURL} onChange={handleChange} placeholder="https://..." />
        </div>

        <hr className="my-4 border-lime-300" />
        
        <InputField label="Dónde vive" name="dondeVive" value={animal.dondeVive} onChange={handleChange} placeholder="En Chile, desde Atacama hasta el Biobío..." rows={2} />
        <InputField label="Cómo es" name="comoEs" value={animal.comoEs} onChange={handleChange} placeholder="Pequeña, de color café..." rows={2} />
        <InputField label="Qué come" name="queCome" value={animal.queCome} onChange={handleChange} placeholder="Semillas, raíces, insectos..." rows={2} />
        <InputField label="Reproducción" name="reproduccion" value={animal.reproduccion} onChange={handleChange} placeholder="Pone hasta 12 huevos..." rows={2} />
        <InputField label="Dato curioso" name="datoCurioso" value={animal.datoCurioso} onChange={handleChange} placeholder="Su silbido es fuerte..." rows={2} />
        
        {/* Botones de acción */}
        <div className="flex justify-end gap-4 mt-6">
          <button onClick={onClose} className="px-6 py-2 bg-gray-600 text-white font-bold rounded-lg shadow hover:bg-gray-700 transition">
            Cancelar
          </button>
          <button onClick={handleSave} className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition">
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
}