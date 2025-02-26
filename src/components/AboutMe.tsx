
export const AboutMe = () => {
    
    return(
        <>

       
         <div>
        <div className="flex items-center justify-center">
      <img
        src="/Matenme.jpeg"
        alt="Descripción"
        className="w-64 h-64 rounded-full object-cover"
      />
    </div>
        <div className=" w-80 bg-gray-600">
            <h1 className="text-3xl font-bold text-white">Perfil</h1>
            </div>
            <div className= "w-11/12">
            <p className=" font-mono">
            Estudiante en proceso de formación en ingenieria de sistemas en la universidad eia, actualmente en 4to semestre 
            que ha demostrado gran compromiso y actitud ante las dificultades, a su vez con una profunda
            pasión por la tecnología interactiva y el entretenimiento digital,
            lo que ha permitido el desarrollo de habilidades analíticas, creatividad, y una fuerte capacidad para resolver problemas.
            además de una constante enriquecimiento en cuanto a aprendizaje, crecimiento personal y profesional 
            </p>
            </div>
            <br/><br/>
            <div>
                <div className=" w-80 bg-gray-600" >
                <h1 className="text-3xl font-bold text-white">Experiencia laboral</h1>
                </div>
                <div className= "w-11/12">
                <ul>
                    <li className='relative pl-5 before:content-["•"] before:absolute before:left-0 font-mono' >Se desempeñó como docente, impartiendo conocimientos y habilidades en area de inforatica, impartiendo el lenjuaje de programacion Scratch.</li><br/>
                    <li className='relative pl-5 before:content-["•"] before:absolute before:left-0 font-mono'>Actuó como mentor en matemáticas para estudiantes de secundaria, ofreciendo orientación personalizada y ayudando a fortalecer sus conocimientos y su logica matemática.</li><br/>
                    <li className='relative pl-5 before:content-["•"] before:absolute before:left-0 font-mono'>Participó en concurso de robótica, demostrando habilidades en la creación y programación de robots, así como en la resolución de desafíos técnicos y colaborativos.</li><br/>
                    <li className='relative pl-5 before:content-["•"] before:absolute before:left-0 font-mono'>Actualmente gestiono y coordino las responsabilidades del hogar, desarrollando habilidades en organización, planificación y administración del tiempo, lo que permite mantener un entorno doméstico eficiente y equilibrado.</li>
                </ul>
                </div>
            </div>
            <div>
                <div className=" w-80 bg-gray-600">
                <h1 className="text-3xl font-bold text-white">Nivel academico</h1>
                </div>
                <div className= "w-11/12">
                <ul>
                    <li className='relative pl-5 before:content-["•"] before:absolute before:left-0 font-mono'>Graduado de el colegio nuestra señora de la providencia</li><br/>
                     <li className='relative pl-5 before:content-["•"] before:absolute before:left-0 font-mono'>Participó activamente en grupos de investigación y desarrollo enfocados en la robótica, contribuyendo al avance de proyectos innovadores en el área.</li>
                </ul>
                </div>
            </div>



         </div>
        
        </>
    )
}