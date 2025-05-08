// CursoDiagrama.tsx
import React from "react";
import { CursoSeccion } from "./CursoSeccion"; // Asegúrate de que el path sea correcto
import { Menu } from "../menu/Menu";

export const CursoDiagrama: React.FC = () => {
  // Contenido del curso de diagramas de clases
  const secciones = [
    {
      titulo: "Agregación",
      descripcion:
        "En POO, la agregación es un tipo de relación entre clases donde una clase contiene objetos de otra, pero estos pueden existir de manera independiente. Por ejemplo, un coche puede tener ruedas, pero si el coche desaparece, las ruedas pueden seguir existiendo.",
      imagenUrl: "URL_DE_LA_IMAGEN", // Reemplaza con la URL real
    },
    {
      titulo: "Asociación",
      descripcion:
        "La asociación es una relación entre clases que interactúan entre sí sin depender unas de otras. Por ejemplo, un Profesor y un Estudiante pueden estar asociados, pero no dependen uno del otro para existir. Puede ser uno a uno, uno a muchos o muchos a muchos.",
      imagenUrl: "", // Puedes colocar una imagen relevante aquí
    },
    {
      titulo: "Extends",
      descripcion:
        "La herencia (extends) permite que una clase hija herede atributos y métodos de una clase padre. En UML, esto se representa con una flecha con punta vacía desde la clase hija a la clase padre.",
      imagenUrl: "URL_DE_LA_IMAGEN", // Reemplaza con la URL real
    },
  ];

  return (
    <>
      <Menu />
      <CursoSeccion
        secciones={secciones}
        tituloCurso="Diagrama de Clases"
        rutaQuiz="/PruebaDiagrama"
      />
    </>
  );
};

export default CursoDiagrama;
