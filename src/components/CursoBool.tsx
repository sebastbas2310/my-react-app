import { Link } from "react-router-dom";
import { Menu } from "../menu/Menu";

export const CursoBool = () => {
  return(
    <>
      
       <body className="bg-gray-900 text-white text-center">
       <Menu/>
    <div className="w-4/5 mx-auto">
        <h1 className="text-3xl font-bold my-6">Lógica Proposicional</h1>
        
        <div className="bg-gray-800 rounded-xl p-6 my-4 flex items-center justify-between">
            <div className="w-3/5 text-left">
                <h2 className="text-xl font-semibold">Conjunción (AND)</h2>
                <p>La conjunción es verdadera solo cuando ambas proposiciones son verdaderas. Se representa con el símbolo ∧.</p>
            </div>
            <img src="https://ielectel.com/wp-content/uploads/2023/12/table_of_AND.png" alt="Conjunción" className="w-auto h-auto max-w-full rounded-lg"/>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6 my-4 flex items-center justify-between">
            <div className="w-3/5 text-left">
                <h2 className="text-xl font-semibold">Disyunción (OR)</h2>
                <p>La disyunción es verdadera si al menos una de las proposiciones es verdadera. Se representa con el símbolo ∨.</p>
            </div>
            <img src="https://matedisunidad3.wordpress.com/wp-content/uploads/2011/10/disyuncion_exclusiva.jpg?w=193&h=115" alt="Disyunción" className="w-auto h-auto max-w-full rounded-lg"/>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6 my-4 flex items-center justify-between">
            <div className="w-3/5 text-left">
            <h2 className="text-xl font-semibold">Negacion (~)</h2>
            <p>La negacion dara hara falsa cualquier proposicion que sea verdad y visceversa se representa con el simbolo ~.</p>
            </div>
            <img src="https://matediscretasu3.files.wordpress.com/2011/10/negacion2.jpg" alt="Bicondicional" className="w-auto h-auto max-w-full rounded-lg"/>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6 my-4 flex items-center justify-between">
            <div className="w-3/5 text-left">
                <h2 className="text-xl font-semibold">Condicional (→)</h2>
                <p>El condicional es verdadero excepto cuando la primera proposición es verdadera y la segunda es falsa. Se representa con el símbolo →.</p>
            </div>
            <img src="https://www.matesfacil.com/wp-content/uploads/2015/06/condicional.png" alt="Condicional" className="w-auto h-auto max-w-full rounded-lg"/>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 my-4 flex items-center justify-between">
            <div className="w-3/5 text-left">
                <h2 className="text-xl font-semibold">Bicondicional (↔)</h2>
                <p>El bicondicional es verdadero cuando ambas proposiciones tienen el mismo valor de verdad. Se representa con el símbolo ↔.</p>
            </div>
            <img src="https://www.matesfacil.com/wp-content/uploads/2015/06/bicondicional.png" alt="Bicondicional" className="w-auto h-auto max-w-full rounded-lg"/>
        </div>

        <div className="bg-gray-800 rounded-xl p-6 my-4 flex items-center justify-between">
    <div className="w-3/5 text-left">
        <h2 className="text-xl font-semibold">Tablas de la Verdad</h2>
        <p>Una Tabla de la verdad se forma con el proposito de acomodar los valores de las variables dadas segun sea la operacion, esta se puede presentar de dos formas, Binaria Y De Proposicion Compuesta.</p>
    </div>

    <div className="w-2/5 flex flex-col space-y-4">

    <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold">Forma Binaria </h3>
            <img src="https://www.matesfacil.com/wp-content/uploads/2015/06/bicondicional.png" alt="Bicondicional" className="w-auto h-auto max-w-full rounded-lg"/>
            <p className="text-sm text-gray-400">Verdadero o Falso,(Como las anteriormente mostradas)</p>
        </div>
        <div className="flex flex-col items-center">
            <h3 className="text-lg font-semibold">Proposición Compuesta</h3>
            <img src="https://i.ytimg.com/vi/-A_MM2trMWc/maxresdefault.jpg" alt="Bicondicional" className="w-auto h-auto max-w-full rounded-lg"/>
            <p className="text-sm text-gray-400">1 o 0,(Tabla de la Verdad de la Disyuncion (v)) .</p>
        </div>
    </div>

        
</div>


        <div className="my-6">
            <Link to="/PruebaBool" className="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700" >Ir a la Prueba</Link>
        </div>
    </div>
</body>
    </>

  );
};

export default CursoBool;
