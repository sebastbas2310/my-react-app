import { Menu } from "../menu/Menu";

const courses = [
    {
      name: "Curso Boole",
      description: "Aprende álgebra de Boole de forma interactiva.",
      progress: 70,
    },
    {
      name: "Curso Programación con Bloques",
      description: "Desarrolla lógica de programación sin necesidad de código.",
      progress: 50,
    },
    {
      name: "Curso de Lógica Computacional",
      description: "Mejora tu pensamiento computacional con ejercicios desafiantes.",
      progress: 30,
    },
  ];

export const Principal = () => {
    
    return(
        <>
    <Menu/>
<div className="min-h-screen bg-black text-white flex flex-col items-center py-12">
      <h1 className="text-3xl font-bold text-purple-400 mb-8">Mis Cursos</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-3/4">
        {courses.map((course, index) => (
          <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-xl font-semibold text-purple-300">{course.name}</h2>
            <p className="text-gray-400 my-3">{course.description}</p>
            <div className="w-full bg-gray-700 rounded-full h-4 mb-4">
              <div
                className="bg-purple-500 h-4 rounded-full"
                style={{ width: `${course.progress}%` }}
              ></div>
            </div>
            <button className="bg-purple-600 hover:bg-purple-500 text-white px-4 py-2 rounded-lg mt-2 transition">
              Entrar
            </button>
          </div>
        ))}
      </div>
    </div>
        
        </>
    )
}