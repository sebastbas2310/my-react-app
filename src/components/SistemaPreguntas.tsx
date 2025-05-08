import React, { useState } from 'react';
import PreguntaVoF from './preguntaVoF';
import PreguntasMultiples from './PreguntasMultiples';

interface PreguntaBase {
  id: number;
  texto: string;
  imagen?: string;
  tipo: 'vof' | 'multiple';
}

interface PreguntaVoF extends PreguntaBase {
  respuesta: boolean;
}

interface PreguntaMultiple extends PreguntaBase {
  opciones: Map<number, string>;
  respuesta: string;
}

type Pregunta = PreguntaVoF | PreguntaMultiple;

interface SistemaPreguntasProps {
  preguntas: any[];
  onFinalizar: (aciertos: number) => void;
}

const SistemaPreguntas: React.FC<SistemaPreguntasProps> = ({ preguntas, onFinalizar }) => {
  const [indiceActual, setIndiceActual] = useState(0);
  const [vidas, setVidas] = useState(3);
  const [aciertos, setAciertos] = useState(0);
  const [mostrarPopup, setMostrarPopup] = useState(false);
  const [esCorrecta, setEsCorrecta] = useState<boolean | null>(null);
  const [respondidas, setRespondidas] = useState<Set<number>>(new Set());

  const esPreguntaVoF = (pregunta: Pregunta): pregunta is PreguntaVoF => pregunta.tipo === 'vof';
  const esPreguntaMultiple = (pregunta: Pregunta): pregunta is PreguntaMultiple => pregunta.tipo === 'multiple';

  const manejarRespuesta = (respuesta: boolean | string) => {
    if (respondidas.has(indiceActual)) return;

    const preguntaActual = preguntas[indiceActual];
    let esRespuestaCorrecta = false;

    if (esPreguntaVoF(preguntaActual)) {
      esRespuestaCorrecta = respuesta === preguntaActual.respuesta;
    } else if (esPreguntaMultiple(preguntaActual)) {
      esRespuestaCorrecta = respuesta === preguntaActual.respuesta;
    }

    setEsCorrecta(esRespuestaCorrecta);
    setMostrarPopup(true);
    setRespondidas(new Set([...respondidas, indiceActual]));

    if (esRespuestaCorrecta) {
      setAciertos((prev) => prev + 1);
    } else {
      setVidas((prev) => prev - 1);
    }

    if (!esRespuestaCorrecta && vidas - 1 === 0) {
      alert('Has perdido todas tus vidas. Reiniciando la prueba.');
      reiniciarPrueba();
    }
  };

  const cerrarPopup = () => {
    setMostrarPopup(false);
  };

  const avanzarPregunta = () => {
    if (indiceActual < preguntas.length - 1) {
      setIndiceActual((prev) => prev + 1);
    } else {
      onFinalizar(aciertos);
    }
  };

  const retrocederPregunta = () => {
    if (indiceActual > 0) {
      setIndiceActual((prev) => prev - 1);
    }
  };

  const reiniciarPrueba = () => {
    setIndiceActual(0);
    setAciertos(0);
    setVidas(3);
    setRespondidas(new Set());
  };

  const renderizarPregunta = () => {
    const preguntaActual = preguntas[indiceActual];

    if (esPreguntaVoF(preguntaActual)) {
      return (
        <PreguntaVoF
          pregunta={preguntaActual.texto}
          imagen={preguntaActual.imagen}
          onRespuesta={(respuesta) => manejarRespuesta(respuesta)}
          bloqueado={respondidas.has(indiceActual)}
        />
      );
    } else if (esPreguntaMultiple(preguntaActual)) {
      return (
        <PreguntasMultiples
          respuesta={preguntaActual.respuesta}
          imagen={preguntaActual.imagen}
          opciones={preguntaActual.opciones}
          onRespuesta={(respuesta) => manejarRespuesta(respuesta)}
        />
      );
    }
  };

  return (
    <div className="relative flex flex-col items-center justify-center w-full h-screen p-4 bg-purple-600">
      {renderizarPregunta()}
      <div className="absolute top-4 right-4 px-4 py-2 bg-gray-700 text-white font-bold rounded-lg shadow-md">
        Vidas: {vidas}
      </div>

      {mostrarPopup && (
        <div className="popup fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h2 className={`text-2xl font-bold ${esCorrecta ? 'text-green-500' : 'text-red-500'}`}>
              {esCorrecta ? '¡Respuesta Correcta!' : 'Respuesta Incorrecta'}
            </h2>
            <button
              className="mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600"
              onClick={() => {
                cerrarPopup();
                avanzarPregunta();
              }}
            >
              Continuar
            </button>
          </div>
        </div>
      )}

      <div className="absolute bottom-4 flex gap-4">
        <button
          className="px-4 py-2 bg-gray-500 text-white font-bold rounded-lg shadow-md hover:bg-gray-600"
          onClick={retrocederPregunta}
          disabled={indiceActual === 0}
        >
          ⬅ Atrás
        </button>
        <button
          className="px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600"
          onClick={avanzarPregunta}
          disabled={indiceActual === preguntas.length - 1}
        >
          Siguiente ➡
        </button>
      </div>
    </div>
  );
};

export default SistemaPreguntas;