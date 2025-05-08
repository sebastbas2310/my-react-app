
import { Menu } from "../menu/Menu";
import { CursoSeccion } from "./CursoSeccion";

export const CursoBool = () => {
    const secciones = [
        {
          titulo: "Conjunción (AND)",
          descripcion: "La conjunción es verdadera solo cuando ambas proposiciones son verdaderas. Se representa con el símbolo ∧.",
          imagenUrl: "https://ielectel.com/wp-content/uploads/2023/12/table_of_AND.png",
        },
        {
          titulo: "Disyunción (OR)",
          descripcion: "La disyunción es verdadera si al menos una de las proposiciones es verdadera. Se representa con el símbolo ∨.",
          imagenUrl: "https://matedisunidad3.wordpress.com/wp-content/uploads/2011/10/disyuncion_exclusiva.jpg?w=193&h=115",
        },
        {
          titulo: "Negación (~)",
          descripcion: "La negación hace falsa cualquier proposición que sea verdadera y viceversa. Se representa con el símbolo ~.",
          imagenUrl: "https://matediscretasu3.files.wordpress.com/2011/10/negacion2.jpg",
        },
        {
          titulo: "Condicional (→)",
          descripcion: "El condicional es falso solo cuando la primera proposición es verdadera y la segunda es falsa. Se representa con el símbolo →.",
          imagenUrl: "https://www.matesfacil.com/wp-content/uploads/2015/06/condicional.png",
        },
        {
          titulo: "Bicondicional (↔)",
          descripcion: "El bicondicional es verdadero cuando ambas proposiciones tienen el mismo valor de verdad. Se representa con el símbolo ↔.",
          imagenUrl: "https://www.matesfacil.com/wp-content/uploads/2015/06/bicondicional.png",
        },
        
      ];


  return(
    <>
     <Menu/>
    <CursoSeccion
      secciones={secciones}
      tituloCurso="Lógica Proposicional"
      rutaQuiz="/PruebaBool"
    />
    </>

  );
};

export default CursoBool;
