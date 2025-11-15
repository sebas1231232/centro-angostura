// src/components/AdminModal.jsx
import React, { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

// (Los componentes FormInput y FormSelect no cambian)
const FormInput = ({ label, name, value, onChange, type = 'text' }) => (
  <div className="mb-4">
    <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor={name}>
      {label}
    </label>
    {type === 'textarea' ? (
      <textarea id={name} name={name} value={value} onChange={onChange} rows="3" className="w-full p-2 border border-gray-300 rounded-lg"/>
    ) : (
      <input id={name} name={name} type={type} value={value} onChange={onChange} className="w-full p-2 border border-gray-300 rounded-lg"/>
    )}
  </div>
);
const FormSelect = ({ label, name, value, onChange, options }) => (
  <div className="mb-4">
    <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor={name}>
      {label}
    </label>
    <select id={name} name={name} value={value} onChange={onChange} className="w-full p-2 border border-gray-300 rounded-lg bg-white">
      {options.map(option => (<option key={option} value={option}>{option}</option>))}
    </select>
  </div>
);
// --- FIN DE Componentes Sin Cambios ---

export default function AdminModal({ initialData, onClose, onSave }) {
  
  // Estado para los datos de texto del animal
  const [animalData, setAnimalData] = useState(initialData || {
    id: uuidv4(),
    nombre: '',
    nombreCientifico: '',
    tipo: 'Ave',
    dondeVive: '',
    comoEs: '',
    queCome: '',
    reproduccion: '',
    datoCurioso: '',
    imageURL: '',
  });

  // --- AÑADIDO: Estado separado para el archivo de imagen ---
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(initialData?.imageURL || null);
  // --- FIN DE AÑADIDO ---
  
  const [isLoading, setIsLoading] = useState(false);

  // Maneja cambios en los inputs de TEXTO
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnimalData(prev => ({ ...prev, [name]: value }));
  };

  // --- AÑADIDO: Maneja el cambio del input de ARCHIVO ---
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file); // Guardamos el archivo
      setImagePreview(URL.createObjectURL(file)); // Creamos una URL temporal para la vista previa
    }
  };
  // --- FIN DE AÑADIDO ---

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // --- CAMBIO: Usamos FormData en lugar de JSON ---
    const formData = new FormData();
    
    // 1. Añadimos la acción (crear o editar)
    formData.append('accion', initialData ? 'editar' : 'crear');

    // 2. Añadimos todos los datos de texto del animal
    for (const key in animalData) {
      formData.append(key, animalData[key]);
    }
    // (PHP usará 'id', 'nombre', 'tipo', etc. desde aquí)
    
    // 3. Añadimos la imagen existente (para que PHP sepa si no se cambió)
    formData.append('imageURL_existente', initialData?.imageURL || '');

    // 4. Si el usuario seleccionó un nuevo archivo, lo añadimos
    if (imageFile) {
      formData.append('imagen', imageFile);
    }
    // --- FIN DE CAMBIO ---

    try {
      await onSave(formData); // Enviamos el FormData a App.jsx
    } catch (error) {
      alert("Error al guardar: " + error.message);
      setIsLoading(false);
    }
  };
  
  const tiposDeAnimal = ["Ave", "Mamífero", "Reptil", "Anfibio", "Pez"];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4" onClick={onClose}>
      <div 
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {initialData ? 'Editar Animal' : 'Añadir Nuevo Animal'}
        </h2>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
            <FormInput label="Nombre" name="nombre" value={animalData.nombre} onChange={handleChange} />
            <FormInput label="Nombre Científico" name="nombreCientifico" value={animalData.nombreCientifico} onChange={handleChange} />
            <FormSelect label="Tipo" name="tipo" value={animalData.tipo} onChange={handleChange} options={tiposDeAnimal} />
            
            {/* --- CAMBIO: Input de Archivo y Vista Previa --- */}
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="imagen">
                Imagen o GIF
              </label>
              <input
                id="imagen"
                name="imagen"
                type="file"
                accept="image/jpeg, image/png, image/gif, image/webp"
                onChange={handleFileChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              {imagePreview && (
                <div className="mt-2 p-2 border rounded-lg">
                  <p className="text-sm text-gray-500">Vista previa:</p>
                  <img src={imagePreview} alt="Vista previa" className="w-32 h-32 object-contain" />
                </div>
              )}
            </div>
            {/* --- FIN DE CAMBIO --- */}
          </div>

          <FormInput label="Dónde vive" name="dondeVive" value={animalData.dondeVive} onChange={handleChange} type="textarea" />
          <FormInput label="Cómo es" name="comoEs" value={animalData.comoEs} onChange={handleChange} type="textarea" />
          <FormInput label="Qué come" name="queCome" value={animalData.queCome} onChange={handleChange} type="textarea" />
          <FormInput label="Reproducción" name="reproduccion" value={animalData.reproduccion} onChange={handleChange} type="textarea" />
          <FormInput label="Dato Curioso" name="datoCurioso" value={animalData.datoCurioso} onChange={handleChange} type="textarea" />

          <div className="flex justify-end gap-4 mt-6">
            <button type="button" onClick={onClose} disabled={isLoading} className="px-6 py-2 bg-gray-600 text-white font-bold rounded-lg shadow hover:bg-gray-700 transition">
              Cancelar
            </button>
            <button type="submit" disabled={isLoading} className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition">
              {isLoading ? 'Guardando...' : 'Guardar'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}