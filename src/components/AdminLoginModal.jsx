// src/components/AdminLoginModal.jsx
import React, { useState } from 'react';

export default function AdminLoginModal({ onClose, onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    setIsLoading(true);
    try {
      // onSuccess ahora espera email y password
      await onSuccess(email, password);
      // El modal se cierra desde App.jsx si el login es exitoso
    } catch (error) {
      alert('Error: Email o contraseña incorrectos.');
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={onClose}>
      <div 
        className="bg-yellow-400 p-8 rounded-2xl shadow-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-3xl font-extrabold text-black text-center mb-6">MODO ADMINISTRADOR</h2>
        
        <label className="block text-black font-bold mb-2" htmlFor="email">
          CLAVE (Email)
        </label>
        <input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="admin@angostura.cl"
          className="w-full p-3 rounded-lg border-2 border-black text-black"
        />
        
        <label className="block text-black font-bold mb-2 mt-4" htmlFor="password">
          CLAVE (Contraseña)
        </label>
        <input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleLogin()}
          className="w-full p-3 rounded-lg border-2 border-black text-black"
        />
        
        <div className="flex justify-end gap-4 mt-8">
          <button onClick={onClose} disabled={isLoading} className="px-6 py-2 bg-gray-600 text-white font-bold rounded-lg shadow hover:bg-gray-700 transition">
            Cancelar
          </button>
          <button onClick={handleLogin} disabled={isLoading} className="px-6 py-2 bg-blue-600 text-white font-bold rounded-lg shadow hover:bg-blue-700 transition">
            {isLoading ? 'Ingresando...' : 'Ingresar'}
          </button>
        </div>
      </div>
    </div>
  );
}