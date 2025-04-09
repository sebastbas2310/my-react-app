import { useState } from "react";
import { Link } from "react-router-dom";
import { Home, BookOpen} from "lucide-react"; // Iconos de Lucide

export const Menu = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCoursesOpen, setIsCoursesOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-purple-800 to-purple-900 py-4 px-6 shadow-md">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Navegación izquierda */}
        <ul className="flex flex-row space-x-8 font-medium text-white text-sm relative">
          {/* Ícono de inicio */}
          <li>
            <Link to="/Principal" className="hover:underline flex items-center space-x-1">
              <Home className="w-5 h-5" />
            </Link>
          </li>

          {/* Cursos con submenú */}
          <li className="relative">
            <button
              onClick={() => setIsCoursesOpen(!isCoursesOpen)}
              className="hover:underline flex items-center space-x-1"
            >
              <BookOpen className="w-5 h-5" />
              <span>Cursos</span>
            </button>
            {isCoursesOpen && (
              <div className="absolute mt-2 w-40 bg-white rounded-lg shadow-lg py-2 text-sm text-gray-800 z-50">
                <Link
                  to="/buscar"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Buscar curso
                </Link>
                <Link
                  to="/Principal"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Mis cursos
                </Link>
                <Link
                  to="/recomendados"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Recomendados
                </Link>
              </div>
            )}
          </li>
        </ul>

        {/* Perfil a la derecha */}
        <div className="relative">
          <button
            onClick={() => setIsProfileOpen(!isProfileOpen)}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-white focus:outline-none"
          >
            <img
              src="https://i.pravatar.cc/100"
              alt="Perfil"
              className="w-full h-full object-cover"
            />
          </button>

          {/* Menú de perfil */}
          {isProfileOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg py-2 z-50">
              <Link
                to="/perfil"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Perfil
              </Link>
              <Link
                to="/configuracion"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Configuración
              </Link>
              <Link
                to="/Registro"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
              >
                Cerrar sesión
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};
