// src/components/AdminLoginModal.jsx
import React, { useState, useEffect } from 'react';

const ADMIN_PASSWORD = 'admin1234';

export default function AdminLoginModal({ onClose, onSuccess }) {
  const [password, setPassword] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  function handleLogin() {
    if (password === ADMIN_PASSWORD) {
      onSuccess();
    } else {
      alert('Contraseña incorrecta');
    }
  }

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className={`modal modal-login ${isVisible ? 'is-visible' : ''}`} onClick={(e) => e.stopPropagation()}>
        <h2 className="text-2xl font-bold mb-4 text-sky-700">Modo Administrador</h2>
        {/* Agrega una clase de color de texto aquí */}
        <p className="text-gray-700">Por favor, ingrese la contraseña para acceder a la gestión de datos.</p>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          className="w-full mt-4 p-3 rounded-lg border-2 border-gray-300 focus:outline-none focus:border-sky-500 text-gray-800"
        />
        <div className="flex justify-end gap-4 mt-6">
          <button onClick={onClose} className="btn-secondary">Cancelar</button>
          <button onClick={handleLogin} className="btn-primary-blue">Ingresar</button>
        </div>
      </div>
    </div>
  );
}