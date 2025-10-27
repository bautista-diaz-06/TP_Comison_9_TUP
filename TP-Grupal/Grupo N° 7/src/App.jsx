import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/Navbar';
import Login from './pages/Login';
import Registro from './pages/Registro';
import Dashboard from './pages/Dashboard';
import Pacientes from './pages/Pacientes';
import Medicos from './pages/Medicos';
import './Styles/app.css';

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
          path="/login"
          element={logueado ? <Navigate to="/dashboard" /> : <Login setLogueado={setLogueado} />}
        />
        <Route
          path="/registro"
          element={logueado ? <Navigate to="/dashboard" /> : <Registro />}
        />
        <Route
          path="/dashboard"
          element={logueado ? <Dashboard /> : <Navigate to="/login" />}
        />
        <Route
          path="/pacientes"
          element={logueado ? <Pacientes /> : <Navigate to="/login" />}
        />
        <Route
          path="/medicos"
          element={logueado ? <Medicos /> : <Navigate to="/login" />}
        />
        <Route
          path="*"
          element={<Navigate to={logueado ? "/dashboard" : "/login"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
