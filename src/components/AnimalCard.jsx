// src/components/AnimalCard.jsx
import React from 'react';

export default function AnimalCard({ animal, onOpen, isAdmin, onEdit, onDelete }) {
  return (
    // Contenedor azul redondeado
    <div className="bg-blue-600 text-white rounded-3xl shadow-lg overflow-hidden flex flex-col items-center p-4 relative">
      
      {/* Botones de Admin (Imagen 5) */}
      {isAdmin && (
        <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
          <button
            onClick={(e) => { e.stopPropagation(); onEdit(animal); }}
            className="w-10 h-10 rounded-full bg-black bg-opacity-70 text-white flex items-center justify-center hover:bg-opacity-100"
            title="Editar"
          >
            {/* Icono de lápiz */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" /></svg>
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onDelete(animal.id); }}
            className="w-10 h-10 rounded-full bg-black bg-opacity-70 text-white flex items-center justify-center hover:bg-opacity-100"
            title="Eliminar"
          >
            {/* Icono de basura */}
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12.54 0c.04.03.079.062.118.095m-1.18-.095a48.145 48.145 0 0 1-3.478-.397m15.708 0-1.08-1.173A1.125 1.125 0 0 0 16.31 4.23l-1.32.378m-1.32-.378L12.9 3.12a1.125 1.125 0 0 0-1.8 0L9.81 4.23m-1.32.378-1.08 1.173A1.125 1.125 0 0 0 6.19 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12.54 0c.04.03.079.062.118.095m-1.18-.095a48.145 48.145 0 0 1-3.478-.397M15 8.25v9.75M8.25 8.25v9.75" /></svg>
          </button>
        </div>
      )}

      {/* Imagen */}
      <div 
        className="w-full h-48 rounded-2xl overflow-hidden mb-4 cursor-pointer"
        onClick={() => onOpen(animal)}
      >
        {animal.imageURL ? (
          <img 
            alt={animal.nombre} 
            src={animal.imageURL} // Usamos imageURL
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-sm">
            Sin imagen
          </div>
        )}
      </div>

      {/* Footer de la Card */}
      <div className="text-center">
        <h3 className="text-xl font-extrabold uppercase">{animal.nombre}</h3>
        <div className="text-sm opacity-80 uppercase">{animal.tipo}</div>
      </div>
    </div>
  );
}