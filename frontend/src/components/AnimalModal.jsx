import React from 'react';

function AnimalModal({ animal, onClose }) {
  // Desestructuramos con los NUEVOS nombres de la base de datos MySQL
  const { nombre_comun, nombre_cientifico, descripcion, imagen_url } = animal;

  // Detectar si es móvil para cambiar el fondo (esta lógica no cambia)
  const isMobile = window.innerWidth < 768;
  const backgroundClass = isMobile
    ? "bg-[url('/fondo_android.png')]"
    : "bg-[url('/fondo.png')]";

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4"
      onClick={onClose} // Cierra al hacer clic en el fondo
    >
      <div
        className={`relative w-full max-w-4xl h-[80vh] ${backgroundClass} bg-cover bg-center rounded-lg shadow-2xl p-8 md:p-12 flex items-center justify-center`}
        onClick={(e) => e.stopPropagation()} // Evita que el clic en el modal cierre
      >
        {/* Botón Volver Gráfico (no cambia) */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 md:top-8 md:right-12 z-20"
        >
          <img src="/volver.png" alt="Volver" className="w-16 h-16 md:w-20 md:h-20 transition-transform hover:scale-110" />
        </button>

        {/* Contenido del Modal (Diseño PC) - Actualizado con nuevos nombres */}
        <div className="hidden md:flex w-full h-full items-center justify-center p-8">
          <div className="grid grid-cols-2 gap-8 items-center max-w-full">
            <div className="flex justify-center items-center">
              <img
                src={imagen_url}
                alt={nombre_comun}
                className="max-w-full max-h-[60vh] h-auto object-contain rounded-lg shadow-lg"
              />
            </div>
            <div className="text-gray-800 max-h-[60vh] overflow-y-auto pr-4">
              <h2 className="text-4xl lg:text-5xl font-bold font-luckiest mb-2">{nombre_comun}</h2>
              <h4 className="text-xl lg:text-2xl italic font-quicksand font-semibold mb-4">{nombre_cientifico}</h4>
              <p className="text-base lg:text-lg font-quicksand leading-relaxed">
                {descripcion}
              </p>
            </div>
          </div>
        </div>

        {/* Contenido del Modal (Diseño Móvil) - Actualizado con nuevos nombres */}
        <div className="md:hidden w-full h-full flex flex-col items-center justify-start p-4 pt-10 overflow-y-auto">
          <img
            src={imagen_url}
            alt={nombre_comun}
            className="w-full max-w-xs h-auto max-h-[40vh] object-contain rounded-lg shadow-lg mb-4"
          />
          <div className="text-gray-800 text-center">
            <h2 className="text-3xl font-bold font-luckiest mb-1">{nombre_comun}</h2>
            <h4 className="text-lg italic font-quicksand font-semibold mb-3">{nombre_cientifico}</h4>
            <p className="text-sm font-quicksand leading-relaxed">
              {descripcion}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AnimalModal;