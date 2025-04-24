import { useState } from "react";
import { Menu } from "../menu/Menu";

interface PreguntaProps {
    respuesta: string;
    imagen: string;
    onRespuesta: (respuesta: string) => void;
    bloqueado: boolean;
}

const Preguntas: React.FC<PreguntaProps> = ({ imagen, onRespuesta, bloqueado }) => {
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen p-4">
            <img src={imagen} alt="Pregunta" className="max-w-full h-auto mb-4 rounded-lg shadow-lg" />
            <div className="flex gap-4">    
                <button 
                    className={`px-6 py-2 font-bold rounded-lg shadow-md ${bloqueado ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600'} text-white`}
                    onClick={() => !bloqueado && onRespuesta("V")}
                    disabled={bloqueado}
                >
                    Verdadero
                </button>
                <button 
                    className={`px-6 py-2 font-bold rounded-lg shadow-md ${bloqueado ? 'bg-gray-400' : 'bg-red-500 hover:bg-red-600'} text-white`}
                    onClick={() => !bloqueado && onRespuesta("F")}
                    disabled={bloqueado}
                >
                    Falso
                </button>
            </div>
        </div>
    );
};

export const PruebaBool: React.FC = () => {
    const preguntas = [
        { respuesta: "F", imagen: "https://i.postimg.cc/X7tkZLZs/3859ba21-26fb-4d07-b461-479ac2377c94.jpg" },
        { respuesta: "V", imagen: "https://i.postimg.cc/X7Bw052d/a0fc74f7-8ebb-4340-8895-dc3c7c760563.jpg" },
        { respuesta: "F", imagen: "https://i.postimg.cc/DwKxZhYC/a20482c6-a378-4c34-97d3-924751c0d879.jpg" },
        { respuesta: "V", imagen: "https://i.postimg.cc/1XqKm70h/a68578db-9d12-4dec-8f24-9e7ea6554207.jpg" },
        { respuesta: "V", imagen: "https://i.postimg.cc/vZqxKL9W/0e6486f2-563e-4fe1-9ff7-c0a5d0212073.jpg" }
    ];

    const [indiceActual, setIndiceActual] = useState(0);
    const [mostrarResultado, setMostrarResultado] = useState(false);
    const [esCorrecto, setEsCorrecto] = useState(true);
    const [aciertos, setAciertos] = useState(0);
    const [respondidas, setRespondidas] = useState(new Set<number>());
    const [vidas, setVidas] = useState(3);

    const manejarRespuesta = (respuesta: string) => {
        if (respondidas.has(indiceActual)) return;

        const esRespuestaCorrecta = respuesta === preguntas[indiceActual].respuesta;
        setEsCorrecto(esRespuestaCorrecta);
        setMostrarResultado(true);
        setRespondidas(new Set([...respondidas, indiceActual]));

        if (esRespuestaCorrecta) {
            setAciertos((prev) => prev + 1);
        } else {
            setVidas((prev) => prev - 1);
        }

        setTimeout(() => {
            setMostrarResultado(false);
            if (vidas - 1 === 0) {
                alert("Has perdido todas tus vidas. Reiniciando la prueba.");
                reiniciarPrueba();
            }
        }, 2000);
    };

    const avanzarPregunta = () => {
        if (indiceActual < preguntas.length - 1) {
            setIndiceActual((prev) => prev + 1);
        } else {
            alert(`Juego terminado. Acertaste ${aciertos} preguntas.`);
            window.location.href = "../CursoBool";
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
        setRespondidas(new Set());
        setVidas(3);
    };

    return (
        <>
            <Menu />
            <div className="relative flex flex-col items-center justify-center w-full h-screen p-4 bg-purple-600">
                <Preguntas 
                    respuesta={preguntas[indiceActual].respuesta} 
                    imagen={preguntas[indiceActual].imagen} 
                    onRespuesta={manejarRespuesta} 
                    bloqueado={respondidas.has(indiceActual)}
                />
                {mostrarResultado && (
                    <div className={`absolute top-20 px-6 py-3 text-white font-bold rounded-lg shadow-lg ${esCorrecto ? 'bg-green-500' : 'bg-red-500'}`}>
                        {esCorrecto ? "¡Correcto!" : "Incorrecto"}
                    </div>
                )}
                <div className="absolute top-4 right-4 px-4 py-2 bg-gray-700 text-white font-bold rounded-lg shadow-md">
                    Vidas: {vidas}
                </div>
                <button 
                    className="absolute left-4 bottom-4 px-4 py-2 bg-gray-500 text-white font-bold rounded-lg shadow-md hover:bg-gray-600"
                    onClick={retrocederPregunta}
                >
                    ⬅ Anterior
                </button>
                <button 
                    className="absolute right-4 bottom-4 px-4 py-2 bg-blue-500 text-white font-bold rounded-lg shadow-md hover:bg-blue-600"
                    onClick={avanzarPregunta}
                >
                    {indiceActual < preguntas.length - 1 ? "Siguiente ➡" : "Finalizar"}
                </button>
            </div>
        </>
    );
};

export default PruebaBool;
