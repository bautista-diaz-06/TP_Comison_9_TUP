import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Inicio from "./Containers/Inicio"
import RegistrarAlumno from "./Containers/RegistrarAlumno"
import RegistrarLibro from "./Containers/RegistrarLibro"
import Alumnos from "./Containers/Alumnos"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/Inicio" element={<Inicio/>}/>
        <Route path="/alumnos" element={<Alumnos/>}/>
        <Route path="/registrarAlumno" element={<RegistrarAlumno/>} />
         <Route path="/registrarLibro" element={<RegistrarLibro/>}/>
      </Routes>
    </Router>
  )
}

export default App
