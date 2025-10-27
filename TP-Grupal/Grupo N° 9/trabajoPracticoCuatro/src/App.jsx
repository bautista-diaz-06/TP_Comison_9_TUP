import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Inicio from "./Containers/Inicio"
import Prestamos from "./Containers/Prestamos"



function App() {

  return (
    <Router>
      <Routes>
        <Route path="/inicio" element={<Inicio/>}/>
        <Route path="/prestamos" element={<Prestamos/>}/>

      </Routes>
    </Router>
  )
}

export default App
