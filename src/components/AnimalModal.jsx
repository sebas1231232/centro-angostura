// src/components/AnimalModal.jsx
import React from 'react';

export default function AnimalModal({ animal, onClose }) {
  if (!animal) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal modal-animal" onClick={(e) => e.stopPropagation()}>
        <div className="modal-thumb">
          {animal.image ? <img src={animal.image} alt={animal.name} className="object-cover h-full w-full" /> : <div className="text-sm text-gray-400">Sin imagen</div>}
        </div>
        <div className="modal-content">
          <h2 className="text-2xl font-extrabold text-sky-700">{animal.name}</h2>
          <div className="text-sm text-gray-600 mt-1">{animal.type} • {animal.habitat}</div>
          <p className="mt-4 text-gray-700 leading-relaxed">{animal.description}</p>
          <button onClick={onClose} className="mt-6 w-full px-4 py-2 rounded-lg bg-gray-600 text-white font-bold transition-transform transform hover:scale-105">Cerrar</button>
        </div>
      </div>
    </div>
  );
}