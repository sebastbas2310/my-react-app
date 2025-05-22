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
      imagen: 'https://i.postimg.cc/C5pjtsvr/lv-0-20250508083935.gif' 
    },
    { 
      id: 2, 
      texto: '¿Es el enunciado correcto?', 
      tipo: 'vof', 
      respuesta: true, 
      imagen: 'https://i.postimg.cc/qqqT8FWf/lv-0-20250508083824.gif' 
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
      imagen: 'https://i.postimg.cc/L6hCDKDX/20250508-130306.gif' 
    },
    { 
      id: 5, 
      texto: '¿Es el enunciado correcto?', 
      tipo: 'vof', 
      respuesta: true, 
      imagen: 'https://i.postimg.cc/G2CyXFjh/20250508-125702.gif' 
    },
  ];

  const manejarFinalizacion = (aciertos: number) => {
    alert(`Juego terminado. Acertaste ${aciertos} preguntas.`);
    window.location.href = '../CursoComp'; // Redirige al curso o página deseada
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
