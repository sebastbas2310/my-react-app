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
            <img src="https://picodotdev.github.io/blog-bitix/2020/06/las-sentencias-de-control-de-flujo-en-java-if-switch-for-while-do-while-try-catch-break-continue-e-invocacion/images/sentencia-if-else_hu4171854708185839136.webp" alt="Estructuras Condicionales" className="w-auto h-auto max-w-full rounded-lg"/>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6 my-4 flex items-center justify-between">
            <div className="w-3/5 text-left">
                <h2 className="text-xl font-semibold">Bucles e Iteraciones</h2>
                <p>Los bucles permiten repetir un bloque de código múltiples veces. Java ofrece <code>for</code>, <code>while</code> y <code>do-while</code> para iterar sobre estructuras de datos.</p>
            </div>
            <img src="https://pablomonteserin.com/wp-content/uploads/2021/03/bucle-for.svg" alt="Bucles e Iteraciones" className="w-auto h-auto max-w-full rounded-lg"/>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6 my-4 flex items-center justify-between">
            <div className="w-3/5 text-left">
                <h2 className="text-xl font-semibold">Funciones y Métodos</h2>
                <p>Los métodos en Java encapsulan bloques de código reutilizables. Se declaran con <code>public static</code> o <code>private</code>, dependiendo de su acceso.</p>
            </div>
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9emoN7tXlqaBnP_FWBPV1sj_01TchfMRf7cQVW6qUuGi9ZM-LuvF6ZXt6S8uNf6nyXtpMlocCteS4IZp8N_B6US_HzWOSwrpbOq4uLG-PRLh8DRX_FmYzyRGtnPrIUr-NH0RnuykNkuKi/s1600/metodo-sumar-java.png" alt="Funciones y Métodos" className="w-auto h-auto max-w-full rounded-lg"/>
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
