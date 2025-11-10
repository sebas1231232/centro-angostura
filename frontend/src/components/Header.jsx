// frontend/src/components/Header.jsx (Ejemplo de cambios clave)
import React from 'react';
import { FaUserCircle, FaPlus, FaQrcode, FaSignOutAlt } from 'react-icons/fa'; // Iconos

// Recibe props de App.jsx
function Header({
    onSearch,
    onCategoryChange,
    categories = [],
    selectedCategory,
    onLoginClick,
    onLogoutClick,
    isAdmin,
    onAddAnimalClick,
    onShareClick
 }) {

  const handleCategoryClick = (categoryId) => {
    onCategoryChange(categoryId); // Pasamos el ID directamente
  };

  // Determina el color basado en el nombre (si quieres mantenerlo)
  // O puedes añadir una columna 'color' a tu tabla categorias
  const getCategoryColor = (categoryName) => {
    switch (categoryName?.toLowerCase()) {
      case 'aves': return 'bg-purple-500 hover:bg-purple-600';
      case 'mamíferos': return 'bg-blue-500 hover:bg-blue-600';
      case 'reptiles': return 'bg-green-500 hover:bg-green-600';
      case 'anfibios': return 'bg-yellow-500 hover:bg-yellow-600';
      case 'peces': return 'bg-teal-500 hover:bg-teal-600';
      default: return 'bg-gray-500 hover:bg-gray-600';
    }
  };


  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-white shadow-md">
      {/* Barra Superior */}
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <img src="/Logo-Angostura.png" alt="Logo Angostura del Biobío" className="h-10 md:h-12" />

        <div className="flex-1 max-w-xl mx-4">
          <input
            type="text"
            placeholder="Buscar animal..."
            onChange={(e) => onSearch(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div className="flex items-center space-x-3">
           <button
             onClick={onShareClick}
             className="text-gray-600 hover:text-blue-600 transition duration-150"
             title="Compartir Pantalla Interactiva"
           >
             <FaQrcode size={24} />
           </button>

           {isAdmin ? (
            <>
              <button
                onClick={onAddAnimalClick}
                className="text-white bg-green-500 hover:bg-green-600 rounded-full p-2 transition duration-150"
                title="Añadir Animal"
              >
                <FaPlus size={18} />
              </button>
              <button
                onClick={onLogoutClick}
                className="text-red-500 hover:text-red-700 transition duration-150"
                title="Cerrar Sesión"
              >
                 <FaSignOutAlt size={24} />
              </button>
            </>
           ) : (
            <button
               onClick={onLoginClick}
               className="text-gray-600 hover:text-blue-600 transition duration-150"
               title="Login Administrador"
            >
               <FaUserCircle size={28} />
             </button>
           )}
        </div>
      </div>

      {/* Barra de Filtros */}
      <nav className="bg-gray-100 py-2 overflow-x-auto">
        <div className="container mx-auto px-4 flex justify-center space-x-2 md:space-x-3 whitespace-nowrap">
          {categories.map((category) => (
            <button
              key={category.id_categoria} // Usar id_categoria como key
              onClick={() => handleCategoryClick(category.id_categoria)} // Pasar id_categoria
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition duration-150 ease-in-out font-luckiest tracking-wider
                ${selectedCategory === category.id_categoria
                  ? `${getCategoryColor(category.nombre_categoria)} text-white shadow-md transform scale-105`
                  : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
            >
              {category.nombre_categoria}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Header;