export const Hobbies = () => {
    return(
        <>
        <div className="bg-blue-100 text-gray-900">
            <nav className="bg-gray-800 text-white p-4 flex justify-between">
                <div className="text-lg font-bold">Mis Proyectos</div>
                <div>
                    <a href="#" className="px-4">About Me</a>
                    <a href="#" className="px-4">Projects</a>
                    <a href="#" className="px-4">Hobbies</a>
                </div>
            </nav>
            
            <div className="container mx-auto p-8">
                <h1 className="text-2xl font-bold">Aquí puedes encontrar los proyectos en los que he trabajado</h1>
                
                <div className="mt-6">
                    <h2 className="text-xl font-semibold">Tenaj</h2>
                    <p className="mt-2">Tenaj es un roguelike de estilo pixel art hecho en Greenfoot. El juego consiste en escapar de una mazmorra atravesando salas generadas aleatoriamente para recoger el libro mágico y salir.</p>
                    <p className="mt-2">En este proyecto, mi labor fue programar el funcionamiento de los enemigos, además de la generación de salas. El juego fue desarrollado en Java, y los sprites fueron diseñados en Pixel Art.</p>
                    <img src="image.png" alt="Juego Tenaj" className="mt-4 w-full max-w-2xl mx-auto border rounded shadow-lg" />
                </div>
                
                <div className="mt-8">
                    <h2 className="text-xl font-semibold">Parches para ciegos</h2>
                    <p className="mt-2">Este proyecto consistió en el desarrollo teórico y simulación en Unity de un prototipo de parches con sensores de proximidad para personas ciegas, alertando sobre obstáculos cercanos.</p>
                    <p className="mt-2">Mi aporte fue la programación en C# dentro de Unity y la detección de objetos cercanos. Los modelos fueron diseñados en Blender.</p>
                </div>
            </div>
            
            <footer className="bg-blue-600 text-white text-center p-4 mt-8">
                <p>Contáctame en:</p>
                <p>juan.gomez49@eia.edu.co</p>
                <p>3148324667</p>
                <p><a href="#" className="underline">Github</a></p>
            </footer>
        </div>
        </>
    )
}