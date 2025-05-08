import React from 'react';
import { Menu } from '../menu/Menu';
import SistemaPreguntas from '../components/SistemaPreguntas';

export const PruebaBool: React.FC = () => {
  const preguntas = [
    { 
      id: 1, 
      texto: '¿Es el enunciado correcto?', 
      tipo: 'vof', 
      respuesta: false, 
      imagen: 'https://i.postimg.cc/X7tkZLZs/3859ba21-26fb-4d07-b461-479ac2377c94.jpg' 
    },
    { 
      id: 2, 
      texto: '¿Es el enunciado correcto?', 
      tipo: 'vof', 
      respuesta: true, 
      imagen: 'https://i.postimg.cc/X7Bw052d/a0fc74f7-8ebb-4340-8895-dc3c7c760563.jpg' 
    },
    { 
      id: 3, 
      texto: '¿Cuál es el resultado de 2 + 2?', 
      tipo: 'multiple', 
      respuesta: '4', 
      opciones: new Map([
        [1, '3'], 
        [2, '4'], 
        [3, '5'], 
        [4, '6']
      ]), 
      imagen: 'https://i.postimg.cc/HxCgKvgh/2969ac91-558f-43ac-adff-732e09a7b276.jpg' 
    },
    { 
      id: 4, 
      texto: '¿Es el enunciado correcto?', 
      tipo: 'vof', 
      respuesta: true, 
      imagen: 'https://i.postimg.cc/1XqKm70h/a68578db-9d12-4dec-8f24-9e7ea6554207.jpg' 
    },
    { 
      id: 5, 
      texto: '¿Es el enunciado correcto?', 
      tipo: 'vof', 
      respuesta: true, 
      imagen: 'https://i.postimg.cc/vZqxKL9W/0e6486f2-563e-4fe1-9ff7-c0a5d0212073.jpg' 
    },
  ];

  const manejarFinalizacion = (aciertos: number) => {
    alert(`Juego terminado. Acertaste ${aciertos} preguntas.`);
    window.location.href = '../CursoBool'; // Redirige al curso o página deseada
  };

  return (
    <>
      <Menu />
      <SistemaPreguntas
        preguntas={preguntas}
        onFinalizar={manejarFinalizacion}
      />
    </>
  );
};

export default PruebaBool;
