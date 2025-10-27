import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Inicio from "./Containers/Inicio"
import RegistrarAlumno from "./Containers/RegistrarAlumno"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/inicio" element={<Inicio/>} />
        <Route path="/registrarAlumno" element={<RegistrarAlumno/>} />
      </Routes>
    </Router>
  )
}

export default App
