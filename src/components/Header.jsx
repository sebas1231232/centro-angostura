import React from 'react';

export default function Header({ title, onSearch, isAdmin, onOpenAdminPrompt, onOpenAdd, onCloseAdminSession }) {
  return (
    <header className="w-full">
      <div className="app-container header-inner">
        <div className="header-left">
          <div className="header-title">{title}</div>
        </div>

        <div className="header-controls">
          <div className="header-search">
            <input
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Buscar por nombre, ubicación..."
            />
            <span>🔎</span>
          </div>
          
          {isAdmin && (
            <>
              <button onClick={onOpenAdd} className="btn-primary btn-add">
                Agregar
              </button>
              <button onClick={onCloseAdminSession} className="btn-primary btn-admin">
                Salir Admin
              </button>
            </>
          )}
          
          {!isAdmin && (
            <button
              title="Modo administrador"
              onClick={onOpenAdminPrompt}
              className="w-11 h-11 rounded-full flex items-center justify-center border bg-white shadow-sm"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-700" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c1.657 0 3-1.567 3-3.5S13.657 4 12 4s-3 1.567-3 3.5S10.343 11 12 11zM17 21v-2a4 4 0 00-4-4H11a4 4 0 00-4 4v2" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </header>
  );
}