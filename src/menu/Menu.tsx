
import { Link } from "react-router-dom"

export const Menu = () => {
  return (
    <>
      <nav className="bg-gradient-to-r from-purple-800 to-purple-900 py-4 px-6 flex justify-center">
      <div className="bg-purple-700 px-6 py-2 rounded-full flex space-x-6 shadow-lg">
        {["Inicio", "Lógica", "Clase", "Configuración"].map((item) => (
          <a
            key={item}
            href="/Quiz" 
            className="text-white font-semibold px-4 py-2 rounded-lg hover:bg-purple-500 transition"
          >
            {item}
          </a>
        ))}
      </div>
    </nav>
    </>
  )
}