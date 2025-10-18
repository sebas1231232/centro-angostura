// src/components/AnimalModal.jsx
import React from 'react';

// Pequeña función para renderizar un item de la lista (sin cambios)
const InfoItem = ({ label, value }) => (
  value ? (
    <li className="flex text-sm">
      <span className="font-bold w-32 shrink-0">{label}:</span>
      <span>{value}</span>
    </li>
  ) : null
);

export default function AnimalModal({ animal, onClose, volverImg }) {
  if (!animal) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >

      {/* ================================================================== */}
      {/* 1. VERSIÓN DESKTOP (Horizontal, con fondo.png)                  */}
      {/* Visible solo en 'md' y más grande (hidden md:flex)               */}
      {/* ================================================================== */}
      <div 
        className="w-full max-w-7xl bg-contain bg-no-repeat bg-center relative hidden md:flex"
        style={{ 
          backgroundImage: "url('/fondo.png')",
          aspectRatio: '1.6'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="py-12 md:py-16 px-8 md:px-24 lg:px-32 w-full"> 
          <div className="flex flex-col md:flex-row gap-6">
            
            {/* Columna Imagen + Botón (Desktop) */}
            <div className="w-full md:w-1/3 flex-shrink-0 flex flex-col items-center">
              {animal.imageURL ? (
                <img 
                  src={animal.imageURL}
                  alt={animal.nombre} 
                  className="w-full max-w-sm mx-auto h-auto object-cover rounded-2xl border-4 border-lime-200"
                />
              ) : (
                <div className="w-full max-w-sm mx-auto h-48 bg-lime-200 rounded-2xl flex items-center justify-center text-lime-600">
                  Sin imagen
                </div>
              )}
              <button 
                onClick={onClose} 
                className="mt-4 transition-transform hover:scale-110"
              >
                <img src={volverImg} alt="Volver" className="h-28" />
              </button>
            </div>
            
            {/* Columna Texto (Desktop) */}
            <div className="w-full md:w-2/3 text-gray-800 md:pt-8">
              <h2 className="text-2xl font-extrabold text-lime-800 mb-1">
                {animal.nombre}
              </h2>
              {animal.nombreCientifico && (
                <h3 className="text-base italic text-lime-700 mb-3">
                  ({animal.nombreCientifico})
                </h3>
              )}
              <ul className="space-y-2">
                <InfoItem label="Tipo" value={animal.tipo} />
                <InfoItem label="Dónde vive" value={animal.dondeVive} />
                <InfoItem label="Cómo es" value={animal.comoEs} />
                <InfoItem label="Qué come" value={animal.queCome} />
                <InfoItem label="Reproducción" value={animal.reproduccion} />
                <InfoItem label="Dato curioso" value={animal.datoCurioso} />
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================================== */}
      {/* 2. VERSIÓN MÓVIL (Vertical, con fondo sólido)                     */}
      {/* Visible solo en 'sm' (flex md:hidden)                            */}
      {/* ================================================================== */}
      <div 
        className="flex flex-col md:hidden w-full max-w-sm bg-lime-100 border-8 border-lime-300 rounded-3xl shadow-lg relative p-6 overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Imagen del Animal (Móvil) */}
        {animal.imageURL ? (
          <img 
            src={animal.imageURL}
            alt={animal.nombre} 
            className="w-full h-auto object-cover rounded-2xl border-4 border-lime-200"
          />
        ) : (
          <div className="w-full h-48 bg-lime-200 rounded-2xl flex items-center justify-center text-lime-600">
            Sin imagen
          </div>
        )}
        
        {/* Contenido de Texto (Móvil) */}
        <div className="text-gray-800 pt-4">
          <h2 className="text-2xl font-extrabold text-lime-800 mb-1">
            {animal.nombre}
          </h2>
          {animal.nombreCientifico && (
            <h3 className="text-base italic text-lime-700 mb-3">
              ({animal.nombreCientifico})
            </h3>
          )}
          <ul className="space-y-2">
            <InfoItem label="Tipo" value={animal.tipo} />
            <InfoItem label="Dónde vive" value={animal.dondeVive} />
            <InfoItem label="Cómo es" value={animal.comoEs} />
            <InfoItem label="Qué come" value={animal.queCome} />
            <InfoItem label="Reproducción" value={animal.reproduccion} />
            <InfoItem label="Dato curioso" value={animal.datoCurioso} />
          </ul>
        </div>

        {/* Botón Volver (Móvil) - Centrado al final */}
        <button 
          onClick={onClose} 
          className="mt-6 self-center transition-transform hover:scale-110"
        >
          {/* Un poco más pequeño para móvil */}
          <img src={volverImg} alt="Volver" className="h-24" /> 
        </button>
      </div>

    </div>
  );
}