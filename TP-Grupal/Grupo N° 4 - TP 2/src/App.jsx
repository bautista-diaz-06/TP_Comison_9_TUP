import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/Navbar';
import LoginPage from './pages/LoginPage';
import RegistroPage from './pages/RegistroPage';
import InicioPage from './pages/InicioPage';
import PacientesPage from './pages/PacientesPage';
import MedicosPage from './pages/MedicosPage';
import TurnosPage from './pages/TurnosPage';
import './Styles/app.css';
import { HOME, LOGIN, MEDICOS, PACIENTES, REGISTER, TURNOS } from './router/HomePage.routes';

function App() {
  const [logueado, setLogueado] = useState(() => {
    return JSON.parse(localStorage.getItem('logueado')) || false;
  });

  useEffect(() => {
    localStorage.setItem('logueado', JSON.stringify(logueado));
  }, [logueado]);

  return (
    <Router>
      {logueado && <NavBar setLogueado={setLogueado} />}

      <Routes>
        <Route
          path={LOGIN}
          element={logueado ? <Navigate to={"/inicio"} /> : <LoginPage setLogueado={setLogueado} />}
        />
        <Route
          path={REGISTER}
          element={logueado ? <Navigate to="/inicio" /> : <RegistroPage />}
        />
        <Route
          path={HOME}
          element={logueado ? <InicioPage /> : <Navigate to="/login" />}
        />
        <Route
          path={PACIENTES}
          element={logueado ? <PacientesPage /> : <Navigate to="/login" />}
        />
        <Route
          path={MEDICOS}
          element={logueado ? <MedicosPage /> : <Navigate to="/login" />}
        />

        <Route
          path={TURNOS}
          element={logueado ? <TurnosPage /> : <Navigate to="/login" />}
        />

      </Routes>
    </Router>
  );
}

export default App;
