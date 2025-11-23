import React, { useEffect, useRef } from 'react';

const InfoItem = ({ label, value, isMobile }) => (
  value ? (
    <li className={`flex ${isMobile ? 'text-base' : 'text-lg'}`}>
      <span className="font-bold w-36 shrink-0">{label}:</span>
      <span>{value}</span>
    </li>
  ) : null
);

export default function AnimalModal({ animal, onClose, volverImg, volume }) {
  const audioRef = useRef(null);

  // Intenta reproducir el audio automáticamente al abrir el modal
  useEffect(() => {
    if (animal && animal.audioURL && audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.play().catch(e => console.warn("Autoplay de audio bloqueado por el navegador."));
    }
  }, [animal, volume]);

  if (!animal) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      {/* VERSIÓN DESKTOP */}
      <div 
        className="w-11/12 h-[95vh] bg-cover bg-no-repeat bg-center relative hidden md:flex items-center" 
        style={{ backgroundImage: "url('/fondo.png')"}}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="w-full px-32 lg:px-48 py-32"> 
          <div className="flex flex-col md:flex-row gap-8 items-start">
            
            <div className="w-full md:w-1/3 flex-shrink-0 flex flex-col items-center">
              {animal.imageURL ? (
                <img src={animal.imageURL} alt={animal.nombre} className="w-full max-w-md h-auto object-cover rounded-2xl border-4 border-lime-200 mb-4" />
              ) : (
                <div className="w-full max-w-md h-48 bg-lime-200 rounded-2xl flex items-center justify-center text-lime-600 mb-4">Sin imagen</div>
              )}
              
              {animal.audioURL && (
                <audio ref={audioRef} src={animal.audioURL} hidden>
                  Tu navegador no soporta audio.
                </audio>
              )}

              <button onClick={onClose} className="transition-transform hover:scale-110">
                <img src={volverImg} alt="Volver" className="h-28" />
              </button>
            </div>
            
            <div className="w-full md:w-2/3 text-gray-800"> 
              <h2 className="text-4xl font-extrabold text-lime-800 mb-1">{animal.nombre}</h2>
              {animal.nombreCientifico && (
                <h3 className="text-xl italic text-lime-700 mb-5">({animal.nombreCientifico})</h3>
              )}
              <ul className="space-y-3 font-quicksand">
                <InfoItem label="Tipo" value={animal.tipo} isMobile={false} />
                <InfoItem label="Dónde vive" value={animal.dondeVive} isMobile={false} />
                <InfoItem label="Cómo es" value={animal.comoEs} isMobile={false} />
                <InfoItem label="Qué come" value={animal.queCome} isMobile={false} />
                <InfoItem label="Reproducción" value={animal.reproduccion} isMobile={false} />
                <InfoItem label="Dato curioso" value={animal.datoCurioso} isMobile={false} />
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* VERSIÓN MÓVIL */}
      <div 
        className="flex flex-col md:hidden w-full max-w-sm bg-cover bg-no-repeat bg-center relative shadow-lg overflow-y-auto max-h-[90vh] rounded-[40px]" 
        style={{ backgroundImage: "url('/fondo_android.png')"}}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="px-10 py-20 flex flex-col items-center flex-grow">
          {animal.imageURL ? (
            <img src={animal.imageURL} alt={animal.nombre} className="w-full max-w-[200px] h-auto object-cover rounded-2xl border-4 border-lime-200 mb-4" />
          ) : (
            <div className="w-full max-w-[200px] h-32 bg-lime-200 rounded-2xl flex items-center justify-center text-lime-600 mb-4">Sin imagen</div>
          )}

          {animal.audioURL && (
            <audio ref={audioRef} src={animal.audioURL} hidden>
              Tu navegador no soporta audio.
            </audio>
          )}

          <div className="text-gray-800 w-full">
            <h2 className="text-2xl font-extrabold text-lime-800 mb-1 text-center">{animal.nombre}</h2>
            {animal.nombreCientifico && (
              <h3 className="text-base italic text-lime-700 mb-3 text-center">({animal.nombreCientifico})</h3>
            )}
            <ul className="space-y-2 font-quicksand">
              <InfoItem label="Tipo" value={animal.tipo} isMobile={true} />
              <InfoItem label="Dónde vive" value={animal.dondeVive} isMobile={true} />
              <InfoItem label="Cómo es" value={animal.comoEs} isMobile={true} />
              <InfoItem label="Qué come" value={animal.queCome} isMobile={true} />
              <InfoItem label="Reproducción" value={animal.reproduccion} isMobile={true} />
              <InfoItem label="Dato curioso" value={animal.datoCurioso} isMobile={true} />
            </ul>
          </div>
          <button onClick={onClose} className="mt-6 transition-transform hover:scale-110">
            <img src={volverImg} alt="Volver" className="h-24" /> 
          </button>
        </div>
      </div>
    </div>
  );
}