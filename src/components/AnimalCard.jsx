// src/components/AnimalCard.jsx
import React from 'react';

// Recibimos 'isAdmin' pero aún no lo usamos. Lo haremos en el próximo paso.
export default function AnimalCard({ animal, onOpen, isAdmin }) {
  return (
    // --- CAMBIO AQUÍ ---
    // Añadido: cursor-pointer, transition-transform, hover:scale-105
    // Movido: onClick={() => onOpen(animal)}
    <div 
      className="bg-blue-600 text-white rounded-3xl shadow-lg overflow-hidden flex flex-col items-center p-4 relative cursor-pointer transition-transform hover:scale-105"
      onClick={() => onOpen(animal)}
    >
      
      {/* (Próximamente) Aquí irán los botones de Admin si isAdmin={true} */}

      {/* Imagen */}
      {/* --- CAMBIO AQUÍ --- 
          Se eliminó: cursor-pointer y onClick
      */}
      <div className="w-full h-48 rounded-2xl overflow-hidden mb-4">
        {animal.imageURL ? (
          <img 
            alt={animal.nombre} 
            src={animal.imageURL}
            className="w-full h-full object-contain"
          />
        ) : (
          <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500 text-sm">
            Sin imagen
          </div>
        )}
      </div>

      {/* Footer de la Card (Sin cambios) */}
      <div className="text-center">
        <h3 className="text-xl font-extrabold uppercase">{animal.nombre}</h3>
        <div className="text-sm opacity-80 uppercase">{animal.tipo}</div>
      </div>
    </div>
  );
}