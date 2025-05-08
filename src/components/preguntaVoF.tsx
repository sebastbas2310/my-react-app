import React, { useState } from 'react';

interface PreguntaVoFProps {
  pregunta: string;
  imagen?: string;
  onRespuesta: (respuesta: boolean) => void;
  bloqueado: boolean; // Nueva prop para indicar si la pregunta está bloqueada
}

const PreguntaVoF: React.FC<PreguntaVoFProps> = ({ pregunta, imagen, onRespuesta, bloqueado }) => {
  const [respuestaSeleccionada, setRespuestaSeleccionada] = useState<boolean | null>(null);

  const manejarSeleccion = (respuesta: boolean) => {
    if (bloqueado) return; // No permitir seleccionar si está bloqueado
    setRespuestaSeleccionada(respuesta);
    onRespuesta(respuesta);
  };

  return (
    <div className="pregunta-vof flex flex-col items-center">
      {imagen && (
        <img
          src={imagen}
          alt="Pregunta"
          className="mb-4 w-full max-w-4xl h-80 object-contain rounded-md shadow-lg"
        />
      )}
      <h3 className="text-white text-xl font-bold mb-4">{pregunta}</h3>
      <div className="opciones flex gap-4">
        <button
          className={`px-6 py-4 font-bold rounded-lg shadow-md ${
            bloqueado
              ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
              : respuestaSeleccionada === true
              ? 'bg-green-500 text-white'
              : 'bg-green-400 text-white hover:bg-green-600'
          }`}
          onClick={() => manejarSeleccion(true)}
        >
          Verdadero
        </button>
        <button
          className={`px-6 py-4 font-bold rounded-lg shadow-md ${
            bloqueado
              ? 'bg-gray-500 text-gray-300 cursor-not-allowed'
              : respuestaSeleccionada === false
              ? 'bg-red-500 text-white'
              : 'bg-red-400 text-white hover:bg-red-600'
          }`}
          onClick={() => manejarSeleccion(false)}
        >
          Falso
        </button>
      </div>
    </div>
  );
};

export default PreguntaVoF;