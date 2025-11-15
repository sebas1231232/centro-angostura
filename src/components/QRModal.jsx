import React from 'react';
import QRCode from 'react-qr-code';

/**
 * Modal que muestra un código QR con la URL de la página actual.
 */
export default function QRModal({ onClose }) {
  // Obtiene la URL actual de la ventana del navegador.
  // IMPORTANTE: Para que funcione en móviles, esta URL debe ser la IP de la red local
  // (ej. http://192.168.1.100) y no 'localhost'.
  const pageURL = window.location.href;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div 
        className="bg-white p-8 rounded-2xl flex flex-col items-center gap-4"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-bold text-gray-800">Compartir Pantalla Interactiva</h2>
        {/* Contenedor del código QR */}
        <div className="p-4 bg-white border-4 border-red-500 rounded-lg">
          <QRCode value={pageURL} size={200} />
        </div>
        <p className="text-gray-600">Escanea el código para ver esta página.</p>
        <button 
          onClick={onClose}
          className="mt-2 px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
}