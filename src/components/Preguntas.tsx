import { useState } from "react";



export const  Preguntas =({respuesta, imagen}: {respuesta: string; imagen: string}) => {
  const correctAnswer = respuesta;
  const [userAnswer, setUserAnswer] = useState("");
  const [feedback, setFeedback] = useState("");

  const checkAnswer = () => {
    if (userAnswer.toLowerCase() === correctAnswer.toLowerCase()) {
      setFeedback("✅ Respuesta correcta");
    } else {
      setFeedback("❌ Respuesta incorrecta");
    }
  };

  return (
    <div className="flex flex-col items-center p-4 bg-black text-white">
      <div className="w-96 bg-gray-900 text-white">
        <div className="p-4 flex flex-col items-center">
          <img
            src={imagen}
            alt="Pregunta"
            className="w-auto h-auto max-w-full rounded-lg"
          />
          <input
            type="text"
            placeholder="Escribe tu respuesta"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            className="mb-2 text-black"
          />
          <button onClick={checkAnswer} className="bg-purple-700 hover:bg-purple-600">
            Verificar
          </button>
          {feedback && <p className="mt-2 text-lg">{feedback}</p>}
        </div>
      </div>
    </div>
  );
}
