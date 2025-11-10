import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

// Los props (onClick, isAdmin, onEdit, onDelete) vienen de App.jsx
function AnimalCard({ animal, onClick, isAdmin, onEdit, onDelete }) {
  // Desestructuramos con los NUEVOS nombres de la base de datos MySQL
  // 'nombre_categoria' viene del JOIN que hicimos en la API
  const { nombre_comun, nombre_categoria, imagen_url, id_animal } = animal;

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105 cursor-pointer relative">
      {/* El modo Admin funciona igual, solo pasamos los IDs correctos */}
      {isAdmin && (
        <div className="absolute top-2 right-2 z-10 flex space-x-2">
          <button
            onClick={(e) => {
              e.stopPropagation(); // Evita que se active el 'onClick' principal
              onEdit(animal); // Pasamos el animal completo para editar
            }}
            className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            title="Editar"
          >
            <FaEdit />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete(id_animal); // Pasamos solo el ID para borrar
            }}
            className="p-2 bg-red-600 text-white rounded-full hover:bg-red-700 transition"
            title="Eliminar"
          >
            <FaTrash />
          </button>
        </div>
      )}

      {/* El onClick principal sigue abriendo el modal */}
      <div onClick={() => onClick(animal)} className="w-full">
        {/* Usamos los nuevos nombres de campos */}
        <img src={imagen_url} alt={nombre_comun} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h3 className="text-xl font-bold font-luckiest text-gray-800">{nombre_comun}</h3>
          <p className="text-gray-600 font-semibold">{nombre_categoria}</p>
        </div>
      </div>
    </div>
  );
}

export default AnimalCard;