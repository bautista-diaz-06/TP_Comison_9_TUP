import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Inicio from "./Containers/Inicio"
import RegistrarAlumno from "./Containers/RegistrarAlumno"
import RegistrarLibro from "./Containers/RegistrarLibro"
import Alumnos from "./Containers/Alumnos"
import Libros from "./Containers/Libros"
import Auditoria from "./Containers/Auditoria"
import Prestamos from "./Containers/Prestamos"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/alumnos" element={<Alumnos/>}/>
        <Route path="/registrarAlumno" element={<RegistrarAlumno/>} />
         <Route path="/registrarLibro" element={<RegistrarLibro/>}/>
         <Route path="/libros" element={<Libros/>}/>
         <Route path="/auditoria" element={<Auditoria/>}/>
         <Route path="/prestamos" element={<Prestamos/>}/>
      </Routes>
    </Router>
  )
}

export default App
