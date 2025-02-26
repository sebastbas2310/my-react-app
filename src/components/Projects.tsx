export const Projects = () => {
    return(
        <>
          
            <div className= "w-11/12 text-2xl font-bold "> Aqui podras encontrar los proyectos en los que he trabajado</div><br></br>
           <div>
            <div className=" w-80 bg-gray-600">
            <h1 className="text-3xl font-bold text-white">Tenaj</h1><br></br>
            </div>
            <div className= "w-11/12">
            <p className="font-mono">Tenaj es un roguelike de estilo pixel art hecho en greenfoot
                el juego consiste de escapar de una mazmorra atravesando salas generadas<br></br> aleatoriamente
                para recoger el libro magico y escapar de la mazmorra, <br></br><br></br>
                en este proyecto mi labor fue programar el funcionamiento de los enemigas ademas de la generacion de salas aleatorias
            </p>
            
                <h3 className="font-mono">el juego fue desarrollado en greenfoot usando java mientras que los sprites se dibujaron en piskel</h3>
                <img src="\Tenaj.jpeg" alt="place holder" id="1"></img>
            </div>
            <br></br>
            <div className=" w-80 bg-gray-600">
            <h1 className="text-3xl font-bold text-white">Parches para ciegos</h1>
            </div>
            <div className= "w-11/12">
            <p className="font-mono">los parches para ciegos fueron un proyecto que se llevo de manera teorica simulandolo en unity, la idea era desarrollar
                un prototipo de unos parches que se pegarian en la ropa de la gente ciega estos parches tendrian equipados un sensor de proximidad
                de esta manera podrian alertar de gente ciega de obstaculos,personas o peligros que pudieran encontrarse.
                Mi aporte a este proyecto fue programar la simulacion en unity inclcuyendo las deteccione de objetos cercanos 

                
            </p>
            
            <div>
                <h3 className="font-mono">La simulacion se hizo en unity usando C# y los modelos se hicieron en Blender</h3>
                </div>
            </div>
           


            </div>


        
        </>
    )
}