import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioLogin from './pages/FormularioLogin'
import { Routes, Route } from 'react-router-dom'
import TablaEventos from './pages/TablaEventos'
import TablaArtistas from './pages/TablaArtistas';

function App() {

  return (
    <Routes>
      <Route path="/" element={<FormularioLogin />}></Route>
      <Route path="/tabla-eventos" element={<TablaEventos/>}></Route>
      <Route path='/tabla-artistas' element={<TablaArtistas/>}></Route>
    </Routes>
  )
}

export default App
