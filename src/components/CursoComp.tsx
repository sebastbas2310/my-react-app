// CursoComp.tsx
import React from "react";
import { CursoSeccion } from "./CursoSeccion"; // Asegúrate que la ruta es correcta
import { Menu } from "../menu/Menu";

export const CursoComp: React.FC = () => {
  // Contenido temático del curso
  const secciones = [
    {
      titulo: "Estructuras Condicionales",
      descripcion:
        "Las estructuras condicionales permiten ejecutar diferentes bloques de código según una condición. En Java, la más común es if-else.",
      imagenUrl:
        "https://picodotdev.github.io/blog-bitix/2020/06/las-sentencias-de-control-de-flujo-en-java-if-switch-for-while-do-while-try-catch-break-continue-e-invocacion/images/sentencia-if-else_hu4171854708185839136.webp",
    },
    {
      titulo: "Bucles e Iteraciones",
      descripcion:
        "Los bucles permiten repetir un bloque de código múltiples veces. Java ofrece for, while y do-while para iterar sobre estructuras de datos.",
      imagenUrl:
        "https://pablomonteserin.com/wp-content/uploads/2021/03/bucle-for.svg",
    },
    {
      titulo: "Funciones y Métodos",
      descripcion:
        "Los métodos en Java encapsulan bloques de código reutilizables. Se declaran con public static o private, dependiendo de su acceso.",
      imagenUrl:
        "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi9emoN7tXlqaBnP_FWBPV1sj_01TchfMRf7cQVW6qUuGi9ZM-LuvF6ZXt6S8uNf6nyXtpMlocCteS4IZp8N_B6US_HzWOSwrpbOq4uLG-PRLh8DRX_FmYzyRGtnPrIUr-NH0RnuykNkuKi/s1600/metodo-sumar-java.png",
    },
    {
      titulo: "Acciones de Usuario",
      descripcion:
        "Existen múltiples formas de implementar interacciones del usuario con el programa. Se utiliza Scanner o componentes para captar entrada externa.",
      imagenUrl:
        "https://i.postimg.cc/fTBC0Yys/bdaa1492-a8ff-4f23-976f-14dbe34a9c09.jpg",
    },
    {
      titulo: "Matrices",
      descripcion:
        "Una Matriz es una estructura que organiza elementos en filas y columnas. Es útil para almacenar y manipular grandes volúmenes de datos.",
      imagenUrl:
        "https://i.postimg.cc/V669nWsM/e49fc4ab-72af-4d5a-b09e-8a99b46895df.jpg",
    },
  ];

  return (
    <>
      <Menu />
      <CursoSeccion
        secciones={secciones}
        tituloCurso="Lógica de Programación en Java"
        rutaQuiz="/PruebaComp"
      />
    </>
  );
};

export default CursoComp;
