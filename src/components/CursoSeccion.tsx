// CursoSeccion.tsx
import React from "react";
import { Link } from "react-router-dom";

/**
 * Tipo de datos para cada sección del curso.
 */
type SeccionCurso = {
  titulo: string;
  descripcion: string;
  imagenUrl: string;
  altImagen?: string;
};

/**
 * Props del componente principal.
 * - secciones: Lista de temas o contenidos del curso.
 * - tituloCurso: Título principal del curso.
 * - rutaQuiz: Ruta al componente Quiz correspondiente al curso.
 */
interface CursoSeccionProps {
  secciones: SeccionCurso[];
  tituloCurso: string;
  rutaQuiz: string;
}

/**
 * Componente reutilizable para mostrar secciones de un curso con imágenes y descripciones.
 */
export const CursoSeccion: React.FC<CursoSeccionProps> = ({ secciones, tituloCurso, rutaQuiz }) => {
  return (
    <div className="bg-gray-900 text-white min-h-screen px-4 py-6">
      <h1 className="text-3xl font-bold text-center mb-6">{tituloCurso}</h1>

      <div className="w-4/5 mx-auto">
        {secciones.map((seccion, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-xl p-6 my-4 flex flex-col md:flex-row items-center justify-between"
          >
            <div className="md:w-3/5 text-left mb-4 md:mb-0">
              <h2 className="text-xl font-semibold">{seccion.titulo}</h2>
              <p>{seccion.descripcion}</p>
            </div>
            <img
              src={seccion.imagenUrl}
              alt={seccion.altImagen || "Ilustración del tema"}
              className="w-auto h-auto max-w-full rounded-lg md:w-2/5"
            />
          </div>
        ))}

        {/* Botón que redirige al examen del curso */}
        <div className="my-6 text-center">
          <Link
            to={rutaQuiz}
            className="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700"
          >
            Ir al Examen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CursoSeccion;
