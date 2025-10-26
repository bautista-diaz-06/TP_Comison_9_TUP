import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioLogin from './pages/FormularioLogin'
import { Routes, Route } from 'react-router-dom'
import TablaEventos from './pages/TablaEventos'

function App() {

  return (
    <Routes>
      <Route path="/" element={<FormularioLogin />}></Route>
      <Route path="/tabla-eventos" element={<TablaEventos/>}></Route>
    </Routes>
  )
}

export default App
