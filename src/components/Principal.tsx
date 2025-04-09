import { Menu } from "../menu/Menu";
import { Link } from "react-router-dom";

const courses = [
  {
    name: "Curso Boole",
    description: "Aprende álgebra de Boole de forma interactiva.",
    progress: 70,
    direccion: "../CursoBool",
    image:"https://thumbs.dreamstime.com/z/fondo-de-la-tecnolog%C3%ADa-del-panel-circuitos-tarjeta-con-sistema-conexi%C3%B3n-datos-digitales-alta-y-dise%C3%B1o-electr%C3%B3nico-inform%C3%A1tico-170541652.jpg",
  },
  {
    name: "Diagramas de clase",
    description: "Desarrolla lógica de programación sin necesidad de código.",
    progress: 50,
    direccion: "/Diagramas",
    image: "https://sistemasinf162.wordpress.com/wp-content/uploads/2014/06/clases.jpg",
  },
  {
    name: "Curso de Lógica Computacional",
    description: "Mejora tu pensamiento computacional con ejercicios desafiantes.",
    progress: 30,
    direccion: "/LogicaComp",
    image:
      "https://images.prismic.io/vaultinum/0458a9f1-e149-4037-b9aa-aa4b4fb53c25_propriete-intellectuelle-code-source-protection-compressed.jpg?auto=compress,format&rect=0,0,2400,981&w=2400&h=981",
  },
];

const retos = [
  {
    title: "Reto de Lógica #1",
    description: "Identifica patrones lógicos en una serie de afirmaciones.",
    tema: "Lógica",
    link: "/CursoBool",
  },
  {
    title: "Reto Boole #2",
    description: "Evalúa una expresión booleana compleja. ¿Podrás resolverla?",
    tema: "Álgebra de Boole",
    link: "/Diagramas",
  },
  {
    title: "Reto Visual #3",
    description: "Analiza un diagrama UML y responde preguntas de interpretación.",
    tema: "Diagramas",
    link: "/LogicaComp",
  },
];

const cursosMasVistos = [
  {
    name: "Dominando la Lógica Proposicional",
    tema: "Lógica",
    dificultad: "Intermedio",
    views: "5,200",
    link: "/CursoLogicaProposicional",
  },
  {
    name: "Álgebra de Boole desde Cero",
    tema: "Boole",
    dificultad: "Básico",
    views: "4,800",
    link: "/CursoBool",
  },
  {
    name: "Diagramas UML para principiantes",
    tema: "Diagramas",
    dificultad: "Básico",
    views: "4,300",
    link: "/Diagramas",
  },
  {
    name: "Pensamiento computacional avanzado",
    tema: "Lógica Computacional",
    dificultad: "Avanzado",
    views: "3,900",
    link: "/LogicaComp",
  },
  {
    name: "Circuitos Lógicos Digitales",
    tema: "Electrónica Digital",
    dificultad: "Intermedio",
    views: "3,500",
    link: "/CircuitosLogicos",
  },
  {
    name: "Expresiones lógicas complejas",
    tema: "Lógica",
    dificultad: "Avanzado",
    views: "3,200",
    link: "/ExpresionesLogicas",
  },
];

export const Principal = () => {
  return (
    <>
     
      <div className="fixed top-0 left-0 w-full z-50 bg-black shadow-md">
        <Menu />
      </div>
      <div className="min-h-screen w-full bg-black text-white flex flex-col items-center pt-32 px-4 overflow-x-hidden">
        
     

        {/* Noticias */}
        <div className="bg-purple-900 bg-opacity-20 border border-purple-500 rounded-xl p-6 w-full max-w-4xl mb-8 shadow-md">
          <h2 className="text-2xl font-bold text-purple-300 mb-2">📰 Noticias</h2>
          <p className="text-gray-300">
            <strong>Actualización del sistema (v1.1):</strong> Se ha mejorado el rendimiento de carga
            de los cursos y se ha implementado una nueva animación para las tarjetas.
          </p>
        </div>

        {/* Cursos */}
        <h1 className="text-3xl font-bold text-purple-400 mb-8">Mis Cursos</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-3/4 mb-16">
          {courses.map((course, index) => (
            <div
              key={index}
              className="relative bg-gray-900 rounded-lg shadow-lg text-center overflow-hidden transform transition duration-300 hover:scale-105 group"
            >
              <img
                src={course.image}
                alt={course.name}
                className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-90 transition-opacity duration-300 z-0"
              />
              <div className="relative z-10 p-6 bg-black bg-opacity-40 backdrop-blur-sm">
                <h2 className="text-xl font-semibold text-purple-300">{course.name}</h2>
                <p className="text-gray-300 my-3">{course.description}</p>
                <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
                  <div
                    className="bg-purple-500 h-4 rounded-full"
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <Link
                  to={course.direccion}
                  className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg mt-2 inline-block transition"
                >
                  Entrar
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Retos Diarios */}
        <h2 className="text-3xl font-bold text-purple-400 mb-6 mt-16">🌟 Retos Diarios</h2>
        <p className="text-gray-400 mb-8 text-center w-3/4">
          Mejora tus habilidades resolviendo un reto cada día. Desarrolla lógica, pensamiento crítico y diviértete aprendiendo. ¡Hoy tenemos algo especial para ti!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-3/4">
          {retos.map((reto, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-purple-800 to-black p-6 rounded-2xl text-left shadow-2xl hover:scale-105 transition duration-300 border border-purple-600"
            >
              <div className="absolute top-4 right-4 bg-purple-600 text-white text-xs px-3 py-1 rounded-full shadow-md">
                Tema: {reto.tema}
              </div>
              <div className="text-4xl mb-4">🧠</div>
              <h3 className="text-xl font-bold text-purple-200 mb-2">{reto.title}</h3>
              <p className="text-gray-300 mb-4">{reto.description}</p>
              <Link
                to={reto.link}
                className="flex items-center justify-center gap-2 bg-purple-700 hover:bg-purple-500 text-white px-4 py-2 rounded-full mt-2 transition shadow-md"
              >
                <span className="text-lg">▶️</span>
                <span className="font-semibold">Empezar</span>
              </Link>
            </div>
          ))}
        </div>

        {/* Cursos más vistos */}
        <h2 className="text-3xl font-bold text-purple-400 mb-6 mt-20">📊 Cursos más vistos</h2>
        <div className="w-full max-w-4xl overflow-x-auto">
          <table className="min-w-full table-auto bg-gray-900 border border-purple-600 rounded-lg overflow-hidden shadow-md">
            <thead className="bg-purple-800 text-white">
              <tr>
                <th className="px-4 py-3 text-left">Curso</th>
                <th className="px-4 py-3 text-left">Tema</th>
                <th className="px-4 py-3 text-left">Dificultad</th>
                <th className="px-4 py-3 text-left">Visualizaciones</th>
              </tr>
            </thead>
            <tbody className="text-gray-300">
              {cursosMasVistos.map((curso, idx) => (
                <tr key={idx} className="hover:bg-purple-950 transition">
                  <td className="px-4 py-3">{curso.name}</td>
                  <td className="px-4 py-3">{curso.tema}</td>
                  <td className="px-4 py-3">{curso.dificultad}</td>
                  <td className="px-4 py-3 flex items-center justify-between">
                    <span>{curso.views} 🔥</span>
                    <Link
                      to={curso.link}
                      className="ml-4 flex items-center gap-2 bg-purple-600 hover:bg-purple-500 text-white px-3 py-1.5 rounded-full text-sm transition"
                    >
                      ▶️ Empezar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Noticias Mundiales sobre Tecnología */}
        <h2 className="text-3xl font-bold text-purple-400 mb-6 mt-20">🌍 Noticias Mundiales sobre Tecnología</h2>
        <p className="text-gray-400 mb-8 text-center w-3/4">
          Mantente actualizado con los avances y descubrimientos más recientes en el mundo de la tecnología, la inteligencia artificial y los sistemas.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-3/4 mb-20">
          {[
            {
              title: "Google lanza nuevo modelo de IA más eficiente",
              description: "Google presentó su nuevo modelo de inteligencia artificial capaz de procesar imágenes y texto con menor consumo energético.",
              link: "#",
            },
            {
              title: "Apple apuesta por chips propios para servidores",
              description: "Apple planea desarrollar su propia línea de chips para servidores, prometiendo mayor seguridad y velocidad.",
              link: "#",
            },
            {
              title: "Hackers acceden a datos de una universidad global",
              description: "Un ciberataque comprometió los datos de una importante universidad, poniendo en alerta a instituciones educativas de todo el mundo.",
              link: "#",
            },
          ].map((noticia, i) => (
            <div
              key={i}
              className="bg-gradient-to-br from-gray-800 to-gray-900 border border-purple-700 rounded-2xl p-6 shadow-md hover:scale-105 transition duration-300"
            >
              <h3 className="text-xl font-bold text-purple-300 mb-2">{noticia.title}</h3>
              <p className="text-gray-300 mb-4 text-sm">{noticia.description}</p>
              <a
                href={noticia.link}
                className="inline-block bg-purple-700 hover:bg-purple-500 text-white px-4 py-2 rounded-full text-sm transition"
              >
                Leer más →
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Principal;
