import React from 'react';

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
    <div 
      className="fixed inset-0 bg-black/50 z-50 flex items-start justify-end p-4 md:p-10"
      onClick={onClose}
    >
      <div 
        className="bg-white p-6 rounded-2xl shadow-2xl w-80 border-4 border-blue-500 font-quicksand relative mt-16"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-bold text-blue-600 font-luckiest">Sonido</h3>
          <button onClick={onClose} className="text-gray-500 font-bold">X</button>
        </div>

        {/* Control Música de Fondo */}
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

        {/* Control Sonido Animales */}
        <div>
          <label className="block font-bold text-gray-700 text-sm mb-2">Volumen Animales</label>
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