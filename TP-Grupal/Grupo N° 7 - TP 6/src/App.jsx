import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormularioLogin from './pages/FormularioLogin';
import { Routes, Route } from 'react-router-dom';
import TablaEventos from './pages/TablaEventos';
import TablaArtistas from './pages/TablaArtistas';
import DashboardPrincipal from './dashboard/DashboardPrincipal';
import TablaAsistentes from './pages/TablaAsistentes';

function App() {
  return (
    <Routes>
      {/* Ruta pública de login */}
      <Route path="/" element={<FormularioLogin />} />

      {/* Rutas para tablas y dashboard (todavía sin protección) */}
      <Route path="/tabla-eventos" element={<TablaEventos />} />
      <Route path="/tabla-artistas" element={<TablaArtistas />} />
      <Route path="/dashboard" element={<DashboardPrincipal />} />
      <Route path="/tabla-asistentes" element={<TablaAsistentes />} />
    </Routes>
  );
}

export default App;
