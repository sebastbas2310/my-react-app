import { Link } from "react-router-dom";
import { Menu } from "../menu/Menu";

export const CursoDiagrama = () => {
  return(
    <>
      
       <body className="bg-gray-900 text-white text-center">
       <Menu/>
    <div className="w-4/5 mx-auto">
        <h1 className="text-3xl font-bold my-6">Diagrama de clases</h1>
        
        <div className="bg-gray-800 rounded-xl p-6 my-4 flex items-center justify-between">
            <div className="w-3/5 text-left">
                <h2 className="text-xl font-semibold">agregación</h2>
                <p>En POO, la agregación es un tipo de relación entre clases donde una clase contiene objetos de otra, pero estos pueden existir de manera independiente.

Por ejemplo, en una clase Coche, podemos tener una lista de objetos de la clase Rueda. Si eliminamos el coche, las ruedas aún pueden existir por separado.

Se diferencia de la composición, donde los objetos dependientes no pueden existir sin la clase principal. La agregación permite una relación más flexible entre objetos en el diseño de software.</p>
            </div>
            <img src="URL_DE_LA_IMAGEN" alt="Conjunción" className="w-auto h-auto max-w-full rounded-lg"/>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6 my-4 flex items-center justify-between">
            <div className="w-3/5 text-left">
                <h2 className="text-xl font-semibold">asociacion</h2>
                <p>En POO, la asociación es una relación entre dos o más clases que interactúan entre sí sin que una dependa de la otra. Es decir, los objetos pueden existir de manera independiente, pero se comunican entre sí cuando es necesario.

Por ejemplo, una clase Profesor puede estar asociada con una clase Estudiante, ya que un profesor enseña a varios estudiantes, pero ambos pueden existir sin la otra clase.

Existen diferentes tipos de asociación:

Uno a uno: Un objeto está asociado con otro único objeto.
Uno a muchos: Un objeto se relaciona con varios otros (ejemplo: un profesor con varios estudiantes).
Muchos a muchos: Varios objetos de una clase pueden estar relacionados con varios objetos de otra (ejemplo: estudiantes y cursos).
A diferencia de la agregación y la composición, la asociación no implica una relación de propiedad, solo de interacción entre objetos.</p>
            </div>
            <img src="https://i.postimg.cc/hGd4Xq6g/Whats-App-Image-2025-03-11-at-9-31-15-PM-2.jpg" alt="Disyunción" className="w-auto h-auto max-w-full rounded-lg"/>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6 my-4 flex items-center justify-between">
            <div className="w-3/5 text-left">
                <h2 className="text-xl font-semibold">extends</h2>
                <p>En POO, extends se usa para representar herencia, es decir, cuando una clase hija hereda atributos y métodos de una clase padre. En los diagramas de clases UML, esta relación se representa con una flecha con punta vacía apuntando de la clase hija a la clase padre.</p>
            </div>
            <img src="URL_DE_LA_IMAGEN" alt="Bicondicional" className="w-auto h-auto max-w-full rounded-lg"/>
        </div>
        
        <div className="my-6">
            <Link to="/PruebaDiagrama" className="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700" >Ir a la Prueba</Link>
        </div>
    </div>
   
</body>
    </>

  );
};

export default CursoDiagrama;
