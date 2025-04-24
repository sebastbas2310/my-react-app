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
    <div className="flex flex-col items-center p-4 bg-black text-white">
      <div className="w-96 bg-gray-900 text-white p-4 rounded-lg shadow-lg">
        <img src={imagen} alt="Pregunta" className="w-full rounded-lg mb-4" />

        <div className="flex flex-col gap-2">
          {[...opciones.entries()].map(([key, opcion]) => (
            <button
              key={key}
              onClick={() => setSelectedAnswer(opcion)}
              className={`w-full px-2 py-1 text-sm rounded border font-medium 
                ${selectedAnswer === opcion ? "bg-purple-700 text-white" : "bg-gray-800 text-gray-300"}
                hover:bg-purple-600 transition`}
            >
              {opcion}
            </button>
          ))}
        </div>

        <button
          onClick={checkAnswer}
          className="w-full mt-3 px-2 py-1 bg-purple-600 hover:bg-green-500 rounded text-sm text-white font-medium"
        >
          Verificar
        </button>

        {feedback && <p className="mt-2 text-sm">{feedback}</p>}
      </div>
    </div>
  );
};