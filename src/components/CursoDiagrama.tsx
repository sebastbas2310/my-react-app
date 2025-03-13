import { Link } from "react-router-dom";
import { Menu } from "../menu/Menu";

export const CursoDiagrama = () => {
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
            <img src="URL_DE_LA_IMAGEN" alt="Conjunción" className="w-auto h-auto max-w-full rounded-lg"/>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6 my-4 flex items-center justify-between">
            <div className="w-3/5 text-left">
                <h2 className="text-xl font-semibold">Disyunción (OR)</h2>
                <p>La disyunción es verdadera si al menos una de las proposiciones es verdadera. Se representa con el símbolo ∨.</p>
            </div>
            <img src="https://i.postimg.cc/hGd4Xq6g/Whats-App-Image-2025-03-11-at-9-31-15-PM-2.jpg" alt="Disyunción" className="w-auto h-auto max-w-full rounded-lg"/>
        </div>
        
        <div className="bg-gray-800 rounded-xl p-6 my-4 flex items-center justify-between">
            <div className="w-3/5 text-left">
                <h2 className="text-xl font-semibold">Negacion (-)</h2>
                <p>La negacion dara hara falsa cualquier proposicion que sea verdad y visceversa se representa con el simbolo -.</p>
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
