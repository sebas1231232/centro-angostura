import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

/**
 * Componente reutilizable para un campo de texto o textarea del formulario.
 */
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

/**
 * Componente reutilizable para un <select> del formulario.
 */
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

/**
 * Modal de formulario para crear o editar un animal.
 */
export default function AdminModal({ initialData, onClose, onSave }) {
  
  // Inicializa el estado del formulario. Si no hay 'initialData',
  // crea un objeto nuevo con un ID único.
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
    audioURL: '',
  });

  // Estados para manejar los archivos seleccionados y sus vistas previas
  const [imageFile, setImageFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(initialData?.imageURL || null);
  const [audioFile, setAudioFile] = useState(null);
  const [audioPreview, setAudioPreview] = useState(initialData?.audioURL || null);
  
  const [isLoading, setIsLoading] = useState(false);

  // Actualiza el estado para campos de texto y select
  const handleChange = (e) => {
    const { name, value } = e.target;
    setAnimalData(prev => ({ ...prev, [name]: value }));
  };

  // Maneja la selección de archivo de imagen y genera una vista previa
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file); // Guarda el objeto File
      setImagePreview(URL.createObjectURL(file)); // Crea URL temporal para <img>
    }
  };

  // Maneja la selección de archivo de audio y genera una vista previa
  const handleAudioFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setAudioFile(file); // Guarda el objeto File
      if (audioPreview) {
        URL.revokeObjectURL(audioPreview); // Limpia la URL temporal anterior
      }
      setAudioPreview(URL.createObjectURL(file)); // Crea URL temporal para <audio>
    }
  };

  /**
   * Se ejecuta al enviar el formulario.
   * Construye un objeto FormData para enviar los datos de texto Y los archivos
   * a la API de PHP.
   */
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formData = new FormData();
    
    // 1. Identifica la acción (crear o editar)
    formData.append('accion', initialData ? 'editar' : 'crear');

    // 2. Agrega todos los datos de texto (nombre, tipo, etc.)
    for (const key in animalData) {
      formData.append(key, animalData[key]);
    }
    
    // 3. Agrega las URLs existentes (para que PHP sepa si debe borrar archivos antiguos)
    formData.append('imageURL_existente', initialData?.imageURL || '');
    formData.append('audioURL_existente', initialData?.audioURL || '');

    // 4. Agrega los archivos nuevos (si se seleccionaron)
    if (imageFile) {
      formData.append('imagen', imageFile);
    }
    if (audioFile) {
      formData.append('audio', audioFile);
    }

    try {
      await onSave(formData); // Llama a la función handleSaveAnimal en App.jsx
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
            
            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="imagen">
                Imagen o GIF
              </label>
              <input
                id="imagen" name="imagen" type="file"
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

            <div className="mb-4">
              <label className="block text-sm font-bold mb-2 text-gray-700" htmlFor="audio">
                Sonido (MP3, WAV)
              </label>
              <input
                id="audio" name="audio" type="file"
                accept="audio/mpeg, audio/wav, audio/ogg"
                onChange={handleAudioFileChange}
                className="w-full p-2 border border-gray-300 rounded-lg"
              />
              {audioPreview && (
                <div className="mt-2 p-2 border rounded-lg">
                  <p className="text-sm text-gray-500">Vista previa:</p>
                  <audio controls src={audioPreview} className="w-full">
                    Tu navegador no soporta audio.
                  </audio>
                </div>
              )}
            </div>
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