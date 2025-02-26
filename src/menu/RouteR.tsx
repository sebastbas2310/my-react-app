import { BrowserRouter as Router, Route,Routes } from "react-router-dom"
import { AboutMe } from "../components/AboutMe";
import { Projects } from "../components/Projects";
import { Hobbies } from "../components/Hobbies";
import { Menu } from "./Menu";
import { ErrorComponent } from "./ErrorComponent";
export const RouterR = () => {
  return (
    <Router>
        <Menu/>
        <Routes>
            <Route path="/" element={<AboutMe/>}/>
            <Route path="/AboutMe" element={<AboutMe/>}/>
            <Route path="/Projects" element={<Projects/>}/>
            <Route path="/Hobbies" element={<Hobbies/>}/>
            <Route path="*" element={<ErrorComponent/>}/>
           
        
        </Routes>
    </Router>
  )
}