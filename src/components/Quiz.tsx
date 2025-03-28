import { Preguntas } from "./Preguntas"
import { Menu } from "../menu/Menu";


export const Quiz = () => {
    const opcionesMap = new Map<number, string>([
        [1, "Gato"],
        [2, "Perro"],
        [3, "Ratón"],
        [4, "Sapo"]
      ]);
    
    return (
        <>
        <Menu/>
        <div>
            <Preguntas respuesta = "gato" imagen = "data:image/jpeg;base64,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"/>
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
        
        </>

    )
}

export default Quiz