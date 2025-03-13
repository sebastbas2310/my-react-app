import { Link } from "react-router-dom";
import { Menu } from "../menu/Menu";

export const CursoComp = () => {
  return(
    <>
      
      <body className="bg-gray-900 text-white text-center">
    <Menu/>
    <div className="w-4/5 mx-auto">
        <h1 className="text-3xl font-bold my-6">Lógica de Programación en Java</h1>
        
        <div className="bg-gray-800 rounded-xl p-6 my-4 flex items-center justify-between">
            <div className="w-3/5 text-left">
                <h2 className="text-xl font-semibold">Estructuras Condicionales</h2>
                <p>Las estructuras condicionales permiten ejecutar diferentes bloques de código según una condición. En Java, la más común es <code>if-else</code>.</p>
            </div>
            <img src="URL_DE_LA_IMAGEN" alt="Estructuras Condicionales" className="w-auto h-auto max-w-full rounded-lg"/>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6 my-4 flex items-center justify-between">
            <div className="w-3/5 text-left">
                <h2 className="text-xl font-semibold">Bucles e Iteraciones</h2>
                <p>Los bucles permiten repetir un bloque de código múltiples veces. Java ofrece <code>for</code>, <code>while</code> y <code>do-while</code> para iterar sobre estructuras de datos.</p>
            </div>
            <img src="URL_DE_LA_IMAGEN" alt="Bucles e Iteraciones" className="w-auto h-auto max-w-full rounded-lg"/>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6 my-4 flex items-center justify-between">
            <div className="w-3/5 text-left">
                <h2 className="text-xl font-semibold">Funciones y Métodos</h2>
                <p>Los métodos en Java encapsulan bloques de código reutilizables. Se declaran con <code>public static</code> o <code>private</code>, dependiendo de su acceso.</p>
            </div>
            <img src="URL_DE_LA_IMAGEN" alt="Funciones y Métodos" className="w-auto h-auto max-w-full rounded-lg"/>
        </div>
        
        <div className="my-6">
            <Link to="/PruebaComp" className="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700" >Ir a la Prueba</Link>
        </div>
    </div>
</body>

    </>

  );
};

export default CursoComp;
