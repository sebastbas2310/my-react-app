import { Preguntas } from "../components/Preguntas";
import { Menu } from "../menu/Menu";


export const PruebaDiagrama = () => {
    
    
    return (
        <>
        <Menu/>
        <div>
            <Preguntas respuesta = "una relacion de uno a muchos con student" imagen = "https://i.postimg.cc/15htS45T/d53c3a4d-5449-4c66-a859-951f02cb87fd.jpg"/>
        </div>
        <div>
            <Preguntas respuesta = "relacion de Muchos a uno con ticket" imagen = "https://i.postimg.cc/dtp9w2TF/38d1251d-c791-48fe-ba3a-5b77992dae2d.jpg"/>
        </div>
        <div>
            <Preguntas respuesta = "passenger y bus tienen una relacion de uno a muchos con ticket" imagen = "https://i.postimg.cc/wB0yTzbN/6696be62-e2fb-4178-9c3c-68ccdd18a4a6.jpg"/>
        </div>
        <div>
            <Preguntas respuesta = "order tiene una relacion de muchos a muchos con product" imagen = "https://i.postimg.cc/J4LkqpJG/eff60bd2-77e9-4980-a87a-e23579b56880.jpg"/>
        </div>
        <div>
            <Preguntas respuesta = "el Manager tiene una relacion de Uno a muchos con Projects" imagen = "https://i.postimg.cc/pdwftR9B/e5970f53-61e7-4dd9-b2d4-f606f81c209d.jpg"/>
        </div>
        </>

    )
}

export default PruebaDiagrama

