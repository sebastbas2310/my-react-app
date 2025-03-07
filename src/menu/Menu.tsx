
import { Link } from "react-router-dom"

export const Menu = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-purple-800 to-purple-900 py-4 px-6 flex justify-center">
      <div className="bg-purple-700 px-6 py-2 rounded-full flex space-x-6 shadow-lg">
      <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                <li>
                    <Link to="/Inicio" 
                    className="text-gray-900 dark:text-white hover:underline">Inicio</Link>
                </li>
                <li>
                    <Link to="/Principal" 
                    className="text-gray-900 dark:text-white hover:underline">Clase</Link>
                </li>
                <li>
                    <Link to="/Registro" className="text-gray-900 dark:text-white hover:underline">
                    Cerrar sesion</Link>
                </li>
            </ul>
      </div>
    </nav>
    </>
  )
}