import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Inicio from "./Containers/Inicio"
import RegistrarAlumno from "./Containers/RegistrarAlumno"
import RegistrarLibro from "./Containers/RegistrarLibro"
import RegistrarPrestamo from "./Containers/RegistrarPrestamo"
import Alumnos from "./Containers/Alumnos"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/alumnos" element={<Alumnos/>}/>
        <Route path="/registrarAlumno" element={<RegistrarAlumno/>} />
         <Route path="/registrarLibro" element={<RegistrarLibro/>}/>
         <Route path="/registrarPrestamo" element={<RegistrarPrestamo/>}/>
      </Routes>
    </Router>
  )
}

export default App
