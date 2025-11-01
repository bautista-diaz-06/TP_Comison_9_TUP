import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Inicio from "./Containers/Inicio"
import RegistrarAlumno from "./Containers/RegistrarAlumno"
import RegistrarLibro from "./Containers/RegistrarLibro"
import Alumnos from "./Containers/Alumnos"
import Libros from "./Containers/Libros"
import Auditoria from "./Containers/Auditoria"
import Prestamos from "./Containers/Prestamos"
import { VER_ALUMNOS, CREAR_ALUMNOS } from "./routers/alumnos.routes"
import { CREAR_LIBRO, VER_LIBROS } from "./routers/libros.routes"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path={VER_ALUMNOS} element={<Alumnos/>}/>
        <Route path={CREAR_ALUMNOS} element={<RegistrarAlumno/>} />
         <Route path={CREAR_LIBRO} element={<RegistrarLibro/>}/>
         <Route path={VER_LIBROS} element={<Libros/>}/>
         <Route path="/auditoria" element={<Auditoria/>}/>
         <Route path="/prestamos" element={<Prestamos/>}/>
      </Routes>
    </Router>
  )
}

export default App
