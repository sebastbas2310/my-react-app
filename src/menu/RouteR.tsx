import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import { Principal } from "../components/Principal";
import { ErrorComponent } from "./ErrorComponent";
import  { Inicio } from "../components/Inicio";
import Registro from "../components/Registro";
import { Quiz } from "../components/Quiz";

export const RouterR = () => {
  return (
    <Router>
        
        <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/inicio" element={<Inicio/>}/>
            <Route path="/Registro" element={<Registro/>}/>
            <Route path="/Principal" element={<Principal/>}/>
            <Route path="/Quiz" element= {<Quiz/>}/>
            <Route path="*" element={<ErrorComponent/>}/>
           
           
        
        </Routes>
    </Router>
  )
}