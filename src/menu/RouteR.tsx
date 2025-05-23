import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import { Principal } from "../components/Principal";
import { ErrorComponent } from "./ErrorComponent";
import  { Inicio } from "../components/Inicio";
import Registro from "../components/Login/Registro";
import { Quiz } from "../components/Test";
import { CursoBool } from "../components/CursoBool";
import {CursoDiagrama} from "../components/CursoDiagrama";
import {CursoComp} from "../components/CursoComp";
import {PruebaBool} from "../Pruebas/PruebaBool"
//import {PruebaComp} from "../Pruebas/PruebaComp"
import {PruebaDiagrama} from "../Pruebas/PruebaDiagrama"
export const RouterR = () => {
  return (
    <Router>
        
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/inicio" element={<Inicio/>}/>
            <Route path="/Registro" element={<Registro/>}/>
            <Route path="/Principal" element={<Principal/>}/>
            <Route path="/Quiz" element= {<Quiz/>}/>
            <Route path="/CursoBool" element= {<CursoBool/>}/>
            <Route path="/Diagramas" element= {<CursoDiagrama/>}/>
            <Route path="/LogicaComp" element= {<CursoComp/>}/>
            <Route path="/PruebaBool" element= {<PruebaBool/>}/>
            <Route path="/PruebaDiagrama" element= {<PruebaDiagrama/>}/>
            <Route path="*" element={<ErrorComponent/>}/>
            
           
           
        
        </Routes>
    </Router>
  )
}