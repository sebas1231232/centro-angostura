// frontend/src/components/AdminModal.jsx (Ejemplo de cambios clave)
import React, { useState, useEffect } from 'react';

// Recibe animal (para editar) o null (para añadir), categories, onClose, onSave
function AdminModal({ animal, categories = [], onClose, onSave }) {
  const [formData, setFormData] = useState({
    nombre_comun: '',
    nombre_cientifico: '',
    descripcion: '',
    id_categoria: '', // Cambiado de 'tipo'
    imagen_url: ''    // Cambiado de 'imageURL'
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(''); // Para errores al guardar

   // Rellenar formulario si estamos editando
  useEffect(() => {
    if (animal) {
      setFormData({
        nombre_comun: animal.nombre_comun || '',
        nombre_cientifico: animal.nombre_cientifico || '',
        descripcion: animal.descripcion || '',
        id_categoria: animal.id_categoria || '', // Asegurarse de usar el ID
        imagen_url: animal.imagen_url || ''
      });
    } else {
      // Si es para añadir, asegurarse que el select tenga un valor inicial válido si hay categorías
      setFormData({
        nombre_comun: '',
        nombre_cientifico: '',
        descripcion: '',
        id_categoria: categories.length > 0 ? categories[0].id_categoria : '', // Valor inicial
        imagen_url: ''
      });
    }
  }, [animal, categories]); // Depender de animal y categories


  // Manejador genérico para inputs y select
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Validar que se seleccionó una categoría válida
    if (!formData.id_categoria) {
      setError('Por favor, selecciona una categoría.');
      setLoading(false);
      return;
    }
    // Validar URL de imagen (simple)
    if (!formData.imagen_url.startsWith('http://') && !formData.imagen_url.startsWith('https://')) {
        setError('La URL de la imagen no parece válida.');
        setLoading(false);
        return;
    }

    try {
        await onSave(formData); // Llama a handleSaveAnimal en App.jsx
        // onClose(); // App.jsx ya cierra el modal si onSave tiene éxito
    } catch (apiError) {
        setError(apiError.message || 'Ocurrió un error al guardar.');
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-3xl font-bold leading-none"
          aria-label="Cerrar"
        >
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-6 text-center font-luckiest text-gray-800">
          {animal ? 'Editar Animal' : 'Añadir Nuevo Animal'}
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && <p className="mb-4 text-red-600 bg-red-100 p-2 rounded text-sm">{error}</p>}

          {/* Nombre Común */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="nombre_comun">
              Nombre Común*
            </label>
            <input
              type="text"
              id="nombre_comun"
              name="nombre_comun" // Coincide con el estado
              value={formData.nombre_comun}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Nombre Científico */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="nombre_cientifico">
              Nombre Científico
            </label>
            <input
              type="text"
              id="nombre_cientifico"
              name="nombre_cientifico" // Coincide con el estado
              value={formData.nombre_cientifico}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

           {/* Categoría */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="id_categoria">
              Categoría*
            </label>
            <select
              id="id_categoria"
              name="id_categoria" // Coincide con el estado
              value={formData.id_categoria}
              onChange={handleChange}
              required
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-white"
            >
              <option value="" disabled>Selecciona una categoría</option>
              {categories.map(cat => (
                <option key={cat.id_categoria} value={cat.id_categoria}>
                  {cat.nombre_categoria}
                </option>
              ))}
            </select>
          </div>

           {/* Descripción */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="descripcion">
              Descripción*
            </label>
            <textarea
              id="descripcion"
              name="descripcion" // Coincide con el estado
              value={formData.descripcion}
              onChange={handleChange}
              required
              rows={4}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>

          {/* URL de Imagen */}
          <div>
            <label className="block text-sm font-medium text-gray-700" htmlFor="imagen_url">
              URL de la Imagen*
            </label>
            <input
              type="url"
              id="imagen_url"
              name="imagen_url" // Coincide con el estado
              value={formData.imagen_url}
              onChange={handleChange}
              required
              placeholder="https://ejemplo.com/imagen.jpg"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          {/* Botones */}
          <div className="flex justify-end space-x-3 pt-4">
             <button
              type="button" // Evita que envíe el formulario
              onClick={onClose}
              className="px-4 py-2 bg-gray-200 text-gray-800 rounded hover:bg-gray-300 transition"
            >
              Cancelar
            </button>
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Guardando...' : 'Guardar Cambios'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AdminModal;