import { Link } from "react-router-dom";

export const Inicio = () => {
  return (
    
    <div className="bg-black text-white min-h-screen flex flex-col justify-between">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-700 to-purple-900 text-center py-6">
        <h1 className="text-3xl font-bold">LogicRush</h1>
        <div className="flex justify-center my-4">
          <img 
            src="https://i.postimg.cc/JhNWfYx5/unnamed.png" 
            alt="LogicRush Logo" 
            className="w-32 h-32 rounded-full shadow-lg shadow-purple-200/50"
          />
        </div>
        <p className="text-lg font-semibold">Aprende lógica de programación <span className="text-purple-300">de forma rápida e interactiva</span></p>
        <p>-----------------</p>
        <p>■■■</p>
        <Link to="/Registro" className="mt-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-6 rounded-lg">EMPEZAR</Link>
        <p>■■■</p>
        <p>-----------------</p>
      </header>
      
      {/* Navigation */}
      <nav className="bg-purple-800 py-3 flex justify-center space-x-6 text-sm">
        {['Inicio', 'Nosotros', 'Servicios', 'Contáctanos', 'Opiniones', 'Ingresar'].map((item) => (
          <a key={item} href="#" className="hover:underline">{item}</a>
        ))}
      </nav>
      
      {/* Main Content */}
      <main className="p-8 flex-grow">
        <h2 className="text-2xl font-bold text-center mb-6">INFORMACIÓN</h2>
        
        <section className="max-w-4xl mx-auto space-y-6">
          {[{
            id: '00',
            title: 'Descripción',
            content: 'LogicRush es un aplicativo web diseñado para enseñar lógica de programación de manera rápida, intuitiva y divertida. Utilizando puzzles interactivos, bloques de código visuales y ejercicios de álgebra de Boole, los usuarios desarrollarán habilidades fundamentales en programación y resolución de problemas computacionales.'
          }, {
            id: '01',
            title: 'Características principales',
            content: [
              'Puzzles lógicos – Desafíos progresivos que desarrollan el pensamiento computacional.',
              'Programación con bloques – Construye algoritmos sin necesidad de escribir código.',
              'Álgebra de Boole – Aprende operadores lógicos como AND, OR, NOT y XOR de forma interactiva.',
              'Retos y niveles – Desafíos dinámicos con dificultad creciente.',
              'Gamificación – Obtén puntos, logros y recompensas mientras aprendes.'
            ]
          }, {
            id: '02',
            title: '¿Para quién es LogicRush?',
            content: [
              'Estudiantes y principiantes que desean aprender lógica sin conocimientos previos.',
              'Programadores autodidactas que buscan mejorar su pensamiento lógico.',
              'Docentes que necesitan una herramienta interactiva para enseñar lógica de programación.'
            ]
          }, {
            id: '03',
            title: 'Objetivo',
            content: 'Con LogicRush, aprender lógica de programación será una experiencia intuitiva y entretenida. Al finalizar, los usuarios tendrán una base sólida en estructuras lógicas, álgebra de Boole y pensamiento algorítmico, facilitando su transición a lenguajes de programación reales como Python y JavaScript.'
          }, {
            id: '04',
            title: 'Contáctanos',
            content: [
              'Teléfono: 📞',
              'Correo: soporte@logicrush.com 📧',
              'Síguenos en nuestras redes sociales.'
            ]
          }].map((section) => (
            <div key={section.id} className="border-l-4 border-purple-500 p-4 bg-gray-900 rounded-lg">
              <h3 className="text-purple-400 text-xl font-bold">{section.id}</h3>
              <h4 className="font-semibold mb-2">{section.title}</h4>
              {Array.isArray(section.content) ? (
                <ul className="list-disc list-inside text-gray-300 space-y-1">
                  {section.content.map((item, index) => <li key={index}>{item}</li>)}
                </ul>
              ) : (
                <p className="text-gray-300">{section.content}</p>
              )}
            </div>
          ))}
        </section>
      </main>
      
      {/* Footer */}
      <footer className="bg-purple-900 text-center py-4">
        <p className="text-sm">Derechos reservados (2021-2033)</p>
        <div className="flex justify-center space-x-4 mt-2">
          {['Twitter 𝕏', 'Instagram 📸', 'Facebook ⓕ', 'Gmail ✉'].map((social) => (
            <button key={social} className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-white">{social}</button>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default Inicio;
