import { Preguntas } from "./Preguntas"
import { PreguntasMultiples } from "./PreguntasMultiples";
import { Menu } from "../menu/Menu";


export const Quiz = () => {

    
    
    return (
        <>
        <Menu/>
        <div>
            <Preguntas respuesta = "gato" imagen = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cat_November_2010-1a.jpg/1200px-Cat_November_2010-1a.jpg"/>
        </div>
        <div>
            <Preguntas respuesta = "sapo" imagen = "https://i.postimg.cc/hGd4Xq6g/Whats-App-Image-2025-03-11-at-9-31-15-PM-2.jpg"/>
        </div>
        <div>
            <Preguntas respuesta = "perro" imagen = "https://i.pinimg.com/236x/13/5c/27/135c27e76a14e2477059cea160c81dac.jpg"/>
        </div>
        <div>
            <Preguntas respuesta = "caballo" imagen = "https://i.pinimg.com/236x/61/95/a1/6195a16d10c2e9fdcde2107f57b9db63.jpg"/>
        </div>
        <div>
            <PreguntasMultiples respuesta = "Caballo" imagen = "https://i.pinimg.com/236x/61/95/a1/6195a16d10c2e9fdcde2107f57b9db63.jpg" opciones={new Map([
            [1, "Gato"],
            [2, "Perro"],
            [3, "Ratón"],
            [4, "Caballo"]
          ])}/>
        </div>
        
        
        </>

    )
}

export default Quiz