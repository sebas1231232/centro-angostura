// src/components/AnimalModal.jsx
import React from 'react';

export default function AnimalModal({ animal, onClose, volverImg }) {
  if (!animal) return null;

  // Pequeña función para renderizar un item de la lista
  const InfoItem = ({ label, value }) => (
    value ? (
      <li className="flex">
        <span className="font-bold w-32 shrink-0">{label}:</span>
        <span>{value}</span>
      </li>
    ) : null
  );

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      {/* Contenedor principal que ES la imagen de fondo */}
      <div 
        className="w-full max-w-6xl bg-contain bg-no-repeat bg-center relative" 
        style={{ 
          backgroundImage: "url('/fondo.png')",
          aspectRatio: '1.6' // Ajusta 1.6 si se ve estirado
        }}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Contenido (con más padding horizontal para que quepa en el area amarilla) */}
        {/* --- CAMBIO AQUÍ: PADDINGS AJUSTADOS --- */}
        <div className="py-12 md:py-16 px-16 md:px-24 lg:px-28"> 
          <div className="flex flex-col md:flex-row gap-6">
            
            {/* Columna de la Imagen (Ahora 40% del ancho) y Botón */}
            {/* --- CAMBIO AQUÍ: w-2/5 y items-center --- */}
            <div className="w-full md:w-2/5 flex-shrink-0 flex flex-col items-center">
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

              {/* --- BOTÓN VOLVER MOVIDO AQUÍ --- */}
              {/* Ahora está centrado debajo de la imagen y es más grande */}
              <button 
                onClick={onClose} 
                className="mt-4 transition-transform hover:scale-110"
              >
                <img src={volverImg} alt="Volver" className="h-28" /> {/* --- CAMBIO: h-28 --- */}
              </button>
            </div>
            
            {/* Columna de la Información (Ahora 60% del ancho) */}
            {/* --- CAMBIO AQUÍ: w-3/5 --- */}
            <div className="w-full md:w-3/5 text-gray-800">
              <h2 className="text-3xl font-extrabold text-lime-800 mb-2">
                {animal.nombre}
              </h2>
              {animal.nombreCientifico && (
                <h3 className="text-lg italic text-lime-700 mb-4">
                  ({animal.nombreCientifico})
                </h3>
              )}
              
              <ul className="space-y-2 text-sm">
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
        
        {/* El botón "Volver" YA NO ESTÁ AQUÍ */}

      </div>
    </div>
  );
}