import React from 'react';

/**
 * Panel flotante para controlar la configuración de audio de la aplicación.
 * Permite ajustar el volumen de la música de fondo y de los efectos de sonido (animales),
 * así como pausar/reproducir la música de fondo.
 * * @param {number} bgVolume - Volumen actual de la música de fondo (0.0 a 1.0).
 * @param {function} setBgVolume - Función para actualizar el volumen de fondo.
 * @param {number} animalVolume - Volumen actual de los efectos de animales (0.0 a 1.0).
 * @param {function} setAnimalVolume - Función para actualizar el volumen de animales.
 * @param {boolean} isBgPlaying - Estado de reproducción de la música de fondo.
 * @param {function} toggleBgMusic - Función para alternar entre play/pause.
 * @param {function} onClose - Función para cerrar este panel.
 */
export default function AudioControls({ 
  bgVolume, 
  setBgVolume, 
  animalVolume, 
  setAnimalVolume, 
  isBgPlaying, 
  toggleBgMusic, 
  onClose 
}) {
  return (
    // Overlay oscuro que cubre toda la pantalla
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-start justify-end p-4 md:p-10"
      onClick={onClose}
    >
      {/* Contenedor del panel de control */}
      <div 
        className="bg-white p-6 rounded-2xl shadow-2xl w-80 border-4 border-blue-500 font-quicksand relative mt-16"
        onClick={(e) => e.stopPropagation()} // Evita cerrar el panel al hacer clic dentro
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-blue-600 font-luckiest">Sonido</h3>
          <button onClick={onClose} className="text-gray-500 font-bold">X</button>
        </div>

        {/* Sección: Música de Fondo */}
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <label className="font-bold text-gray-700 text-sm">Música de Fondo</label>
            <button 
              onClick={toggleBgMusic}
              className={`px-3 py-1 rounded-full text-xs font-bold ${isBgPlaying ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}
            >
              {isBgPlaying ? 'PAUSAR' : 'REPRODUCIR'}
            </button>
          </div>
          
          {/* Slider de volumen para fondo */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={bgVolume}
            onChange={(e) => setBgVolume(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-500"
          />
          <div className="text-right text-xs text-gray-500 mt-1">{Math.round(bgVolume * 100)}%</div>
        </div>

        {/* Sección: Sonido Animales */}
        <div>
          <label className="block font-bold text-gray-700 text-sm mb-2">Volumen Animales</label>
          {/* Slider de volumen para animales */}
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={animalVolume}
            onChange={(e) => setAnimalVolume(parseFloat(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-green-500"
          />
          <div className="text-right text-xs text-gray-500 mt-1">{Math.round(animalVolume * 100)}%</div>
        </div>
      </div>
    </div>
  );
}