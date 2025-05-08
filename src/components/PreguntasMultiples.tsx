import React, { useState } from 'react';

interface PreguntasMultiplesProps {
  respuesta: string; // La respuesta correcta
  imagen?: string; // Imagen opcional
  opciones: Map<number, string>; // Opciones disponibles
  onRespuesta: (respuesta: string) => void; // Función para manejar la respuesta seleccionada
}

export const PreguntasMultiples: React.FC<PreguntasMultiplesProps> = ({ respuesta, imagen, opciones, onRespuesta }) => {
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<string | null>(null);

  const manejarSeleccion = (opcion: string) => {
    if (respuestaSeleccionada) return; // Bloquear si ya se seleccionó una respuesta
    setRespuestaSeleccionada(opcion);
    onRespuesta(opcion); // Pasar la opción seleccionada como string
  };

  return (
    <div className="preguntas-multiples flex flex-col items-center">
      {imagen && (
        <img
          src={imagen}
          alt="Pregunta"
          className="mb-4 w-full max-w-4xl h-64 object-contain rounded-md shadow-md"
        />
      )}
      <h3 className="text-white text-xl font-bold mb-4">Selecciona la respuesta correcta:</h3>
      <div className="opciones grid grid-cols-2 gap-4">
        {[...opciones.entries()].map(([key, value]) => (
          <button
            key={key}
            className={`px-6 py-3 font-bold shadow-md border-4 ${
              respuestaSeleccionada === value
                ? respuestaSeleccionada === respuesta
                  ? 'bg-purple-500 text-white border-green-500'
                  : 'bg-purple-500 text-white border-red-500'
                : 'bg-purple-500 text-white border-transparent hover:border-purple-700'
            }`}
            onClick={() => manejarSeleccion(value)}
            disabled={!!respuestaSeleccionada} // Deshabilitar botones después de seleccionar
          >
            {value}
          </button>
        ))}
      </div>
    </div>
  );
};

export default PreguntasMultiples;