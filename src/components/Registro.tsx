
import { Link } from "react-router-dom";

const Registro = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 to-black">
      <div className="bg-gray-900 text-white rounded-lg shadow-lg flex w-[700px]">
        {/* Login Section */}
        <div className="w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-2xl font-bold text-center">Iniciar sesión</h2>
          <div className="flex justify-center space-x-2 my-4">
            <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
            <span className="w-3 h-3 bg-gray-600 rounded-full"></span>
          </div>
          <p className="text-sm text-center mb-4">Inicia sesión con tu correo</p>
          <input 
            type="email" 
            placeholder="Correo electrónico" 
            className="w-full p-2 mb-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <input 
            type="password" 
            placeholder="Contraseña" 
            className="w-full p-2 mb-3 bg-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <p className="text-xs text-gray-400 mb-4 text-right cursor-pointer hover:text-gray-200">¿Olvidaste tu contraseña?</p>
          <Link to="/Principal" className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg font-semibold">
            INICIAR SESIÓN
          </Link>
        </div>

        {/* Register Section */}
        <div className="w-1/2 bg-black flex flex-col justify-center items-center text-center rounded-r-lg p-8">
          <h2 className="text-2xl font-bold">¡Hola, emprendedor!</h2>
          <p className="text-sm text-gray-300 mt-2">¿Es tu primera vez? Crea una cuenta nueva</p>
          <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-lg font-semibold">
            REGISTRARSE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Registro;
