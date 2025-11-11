// src/components/AnimalCard.jsx
import React from 'react';

export default function AnimalCard({ animal, onOpen }) {
  return (
    // Contenedor azul redondeado
    <div className="bg-blue-600 text-white rounded-3xl shadow-lg overflow-hidden flex flex-col items-center p-4 relative">
      
      {/* Botones de Admin eliminados */}

      {/* Imagen */}
      <div 
        className="w-full h-48 rounded-2xl overflow-hidden mb-4 cursor-pointer"
        onClick={() => onOpen(animal)}
      >
        {animal.imageURL ? (
          <img 
            alt={animal.nombre} 
            src={animal.imageURL}
            className="w-full h-full object-contain transition-transform duration-300 hover:scale-110"
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