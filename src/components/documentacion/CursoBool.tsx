import { Link } from "react-router-dom";


export const Inicio = () => {
  return(
    <>
  
    <div className="w-full max-w-xs p-4 bg-white rounded-lg shadow-md flex flex-col space-y-4">
 
  <div className="flex space-x-4">
    
    <div className="flex-1">
      <h2 className="text-xl font-semibold text-gray-800">Introducción a la Programación</h2>
      <p className="text-sm text-gray-600 mt-2">Este curso ofrece una introducción a los conceptos fundamentales de la programación. Aprende sobre variables, condicionales y estructuras básicas de datos.</p>
    </div>
    
    <div className="w-16 h-16 bg-gray-300 rounded-full">
      <img src="https://via.placeholder.com/150" alt="Imagen de curso" className="object-cover w-full h-full rounded-full"/>
    </div>
  </div>

  <div className="space-y-2">
    <a href="#" className="text-blue-600 hover:underline text-sm">Enlace 1: Leer sobre variables en JavaScript</a>
    <a href="#" className="text-blue-600 hover:underline text-sm">Enlace 2: Guía completa de condicionales</a>
    <a href="#" className="text-blue-600 hover:underline text-sm">Enlace 3: Estructuras de control y bucles</a>
  </div>
</div>

    </>

  );
};

export default Inicio;
