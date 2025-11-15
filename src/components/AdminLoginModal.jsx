import React, { useState } from 'react';

/**
 * Modal que maneja el formulario de inicio de sesión para el administrador.
 */
export default function AdminLoginModal({ onClose, onSuccess }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  /**
   * Se ejecuta al presionar "Ingresar".
   * Llama a la función 'onSuccess' (definida en App.jsx) con el email y la contraseña.
   */
  const handleLogin = async () => {
    setIsLoading(true);
    try {
      await onSuccess(email, password);
      // App.jsx se encargará de cerrar el modal si el login es exitoso.
    } catch (error) {
      // Si onSuccess falla (lanza un error), lo mostramos.
      alert('Error: Email o contraseña incorrectos.');
      setIsLoading(false);
    }
  };

  return (
    // Fondo oscuro semi-transparente
    <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50" onClick={onClose}>
      {/* Contenedor del Modal */}
      <div 
        className="bg-yellow-400 p-8 rounded-2xl shadow-lg w-full max-w-md"
        onClick={(e) => e.stopPropagation()} // Evita que el clic dentro del modal lo cierre
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
          onKeyDown={(e) => e.key === 'Enter' && handleLogin()} // Permite login con Enter
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