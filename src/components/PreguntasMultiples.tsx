import { useState } from "react";

interface PreguntasMultiples {
  respuesta: string;
  imagen: string;
  opciones: Map<number, string>;
}

export const PreguntasMultiples = ({ respuesta, imagen, opciones }: PreguntasMultiples) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [feedback, setFeedback] = useState("");

  const checkAnswer = () => {
    if (selectedAnswer === null) return;
    setFeedback(selectedAnswer === respuesta ? "✅ Respuesta correcta" : "❌ Respuesta incorrecta");
  };

  return (
    <div className="flex flex-col items-center p-4 bg-black text-white min-h-screen">
      <div className="w-96 bg-gray-900 text-white p-4 rounded-lg shadow-lg">
        <img src={imagen} alt="Pregunta" className="w-full rounded-lg mb-4" />

        <div className="flex flex-col gap-2">
          {[...opciones.entries()].map(([key, opcion])=> (
            <button
              key={key}
              onClick={() => setSelectedAnswer(opcion)}
              className={`w-full p-2 rounded font-semibold border 
                ${selectedAnswer === opcion ? "bg-purple-700 text-white" : "bg-gray-800 text-gray-300"}
                hover:bg-purple-600 transition`}
            >
              {opcion}
            </button>
          ))}
        </div>

        <button
          onClick={checkAnswer}
          className="w-full mt-4 p-2 bg-green-600 hover:bg-green-500 rounded text-white font-semibold"
        >
          Verificar
        </button>

        {feedback && <p className="mt-2 text-lg">{feedback}</p>}
      </div>
    </div>
  );
};

