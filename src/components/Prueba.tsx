import React from "react";

const LogicRush = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-700 to-purple-900 text-center py-6">
        <h1 className="text-3xl font-bold">LogicRush</h1>
        <p className="text-lg">Aprende lógica de programación de forma rápida e interactiva</p>
        <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-lg">EMPEZAR</button>
      </header>
      
      {/* Navigation */}
      <nav className="bg-purple-800 py-3 flex justify-center space-x-6 text-sm">
        {['Inicio', 'Nosotros', 'Servicios', 'Contáctanos', 'Opiniones', 'Ingresar'].map((item) => (
          <a key={item} href="#" className="hover:underline">{item}</a>
        ))}
      </nav>
      
      {/* Main Content */}
      <main className="p-8">
        <h2 className="text-2xl font-bold text-center">INFORMACIÓN</h2>
        
        <section className="mt-6 max-w-3xl mx-auto">
          <div className="border-l-4 border-purple-500 p-4 mb-6">
            <h3 className="text-purple-400 text-xl">00</h3>
            <h4 className="font-semibold">Descripción</h4>
            <p className="text-gray-300">LogicRush es un aplicativo web diseñado para enseñar lógica de programación de manera rápida, intuitiva y divertida.</p>
            <p className="text-gray-300">Utilizando puzzles interactivos, bloques de código visuales y ejercicios de álgebra de Boole, los usuarios desarrollarán habilidades fundamentales en programación y resolución de problemas computacionales.</p>
          </div>
          
          <div className="border-l-4 border-purple-500 p-4">
            <h3 className="text-purple-400 text-xl">01</h3>
            <h4 className="font-semibold">Características principales</h4>
            <ul className="list-disc list-inside text-gray-300">
              <li>Puzzles lógicos – Desafíos progresivos que desarrollan el pensamiento computacional.</li>
              <li>Programación con bloques – Construye algoritmos sin necesidad de escribir código.</li>
              <li>Álgebra de Boole – Aprende operadores lógicos como AND, OR, NOT y XOR de forma interactiva.</li>
              <li>Retos y niveles – Desafíos dinámicos con dificultad creciente.</li>
              <li>Gamificación – Obtén puntos, logros y recompensas mientras aprendes.</li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  );
};

export default LogicRush;
