import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Inicio from "./Containers/Inicio"
import RegistrarAlumno from "./Containers/RegistrarAlumno"
import RegistrarLibro from "./Containers/RegistrarLibro"
function App() {

  return (
    <Router>
      <Routes>
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/registrarAlumno" element={<RegistrarAlumno/>} />
         <Route path="/registrarLibro" element={<RegistrarLibro/>}/>
      </Routes>
    </Router>
  )
}

export default App
