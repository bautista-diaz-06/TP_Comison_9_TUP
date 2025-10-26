import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Inicio from "./Containers/Inicio"


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/inicio" element={<Inicio/>}/>
      </Routes>
    </Router>
  )
}

export default App
