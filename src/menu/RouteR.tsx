import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects";
import { Hobbies } from "../components/Hobbies";
import { ErrorComponent } from "./ErrorComponent";
import  { Inicio } from "../components/Inicio";
import { Preguntas } from "../components/Preguntas";
import Registro from "../components/Registro";
import { Quiz } from "../components/Quiz";

export const RouterR = () => {
  return (
    <Router>
        
        <Routes>
            <Route path="/Inicio" element={<Inicio/>}/>
            <Route path="/Registro" element={<Registro/>}/>
            <Route path="/" element={<AboutMe/>}/>
            <Route path="/AboutMe" element={<AboutMe/>}/>
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/Hobbies" element={<Hobbies/>}/>
            <Route path="/Quiz" element= {<Quiz/>}/>
            <Route path="*" element={<ErrorComponent/>}/>
           
           
        
        </Routes>
    </Router>
  )
}