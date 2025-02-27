import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects";
import { Hobbies } from "../components/Hobbies";
import { ErrorComponent } from "./ErrorComponent";
import Prueba, { Inicio } from "../components/Inicio";
import Registro from "../components/Registro";
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
            <Route path="*" element={<ErrorComponent/>}/>
           
           
        
        </Routes>
    </Router>
  )
}