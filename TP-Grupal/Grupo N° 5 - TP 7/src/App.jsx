import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import HomePage from "./pages/Home";
import SociosPage from "./components/Socios";
import ActividadesPage from "./components/Actividades";
import ReservasPage from "./components/Reservas";
import HistorialPage from "./components/Historial";
import useLocalStorage from "./hooks/useLocalStorage";
import "./App.css";

function App() {
  // Estados globales persistentes con useLocalStorage
  const [socios, setSocios] = useLocalStorage("gym_socios", [
  { id: 1, nombre: "Ana", apellido: "Perez", email: "ana@mail.com", rol: "socio" }
]);

  const [actividades, setActividades] = useLocalStorage("gym_actividades", []);
  const [reservas, setReservas] = useLocalStorage("gym_reservas", []);
  return (
    <Router>
      <Navbar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<HomePage />} />{" "}
          <Route
            path="/socios"
            element={<SociosPage socios={socios} setSocios={setSocios} />}
          />{" "}
          <Route
            path="/actividades"
            element={
              <ActividadesPage
                actividades={actividades}
                setActividades={setActividades}
              />
            }
          />{" "}
          <Route
            path="/reservas"
            element={
              <ReservasPage
                socios={socios}
                actividades={actividades}
                reservas={reservas}
                setReservas={setReservas}
              />
            }
          />{" "}
          <Route
            path="/historial"
            element={
              <HistorialPage
                socios={socios}
                actividades={actividades}
                reservas={reservas}
              />
            }
          />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
