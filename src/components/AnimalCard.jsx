import React from 'react';

export default function AnimalCard({ animal, onOpen, isAdmin, onEdit, onDelete }) {
  return (
    <div
      className="animal-card bg-white rounded-2xl p-3 flex flex-col items-center text-center shadow-md cursor-pointer"
      onClick={() => onOpen(animal)}
    >
      <div className="thumb">
        {animal.image ? (
          <img alt={animal.name} src={animal.image} />
        ) : (
          <div className="text-sm text-gray-400 p-4">Espacio para imagen (agrega en "Modo Gestor" o en el código)</div>
        )}
      </div>

      <div className="animal-card-footer">
        <h3 className="mt-4 text-lg font-extrabold text-sky-700">{animal.name}</h3>
        <div className="text-sm text-gray-500">{animal.type}</div>
      </div>

      {isAdmin && (
        <div className="mt-4 w-full flex gap-3">
          <button
            onClick={(e) => { e.stopPropagation(); onEdit(animal); }}
            className="flex-1 btn-primary bg-sky-600 text-white"
          >
            Editar
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); onDelete(animal.id); }}
            className="flex-1 btn-primary bg-red-600 text-white"
          >
            Borrar
          </button>
        </div>
      )}
    </div>
  );
}