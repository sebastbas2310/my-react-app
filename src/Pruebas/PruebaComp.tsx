import { Preguntas } from "../components/Preguntas";
import { PreguntasMultiples } from "../components/PreguntasMultiples";
import { Menu } from "../menu/Menu";


export const PruebaComp = () => {
    
    
    return (
        <>
        <Menu/>
        <div>
            <PreguntasMultiples respuesta = "NAN" imagen = "https://i.postimg.cc/TwHpXcHv/255b0a44-343d-43c2-b323-4ef339aab3d2.jpg"  opciones={new Map([
            [1, "NAN"],
            [2, "3b4"],
            [3, "7b"],
            [4, "a + b"]
          ])} />
        </div>
        <div>
            <Preguntas respuesta = "HOLAMUNDO MUNDO" imagen = "https://i.postimg.cc/dVmmrL0Z/c718fd3f-77e1-461c-b7b9-be1a6e85fd94.jpg"/>
        </div>
        <div>
            <Preguntas respuesta = "10" imagen = "https://i.postimg.cc/WbmJfxcQ/b2eddd1d-f7e9-4a66-a1a5-361480a2c067.jpg"/>
        </div>
        <div>
            <Preguntas respuesta = "String" imagen = "https://i.postimg.cc/FKkrwJJ7/0d9d602d-4c1b-49ce-8eea-d9f41880c7b1.jpg"/>
        </div>
        <div>
            <PreguntasMultiples respuesta = "4" imagen = "https://i.postimg.cc/HxCgKvgh/2969ac91-558f-43ac-adff-732e09a7b276.jpg" opciones={new Map([
            [1, "4"],
            [2, "8"],
            [3, "NAN"],
            [4, "∞"]
          ])}/>
        </div>
        </>

    )
}

export default PruebaComp