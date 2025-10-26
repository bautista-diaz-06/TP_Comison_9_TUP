import { Link } from 'react-router-dom';
import BotonPersonalizado from '../components/BotonPersonalizado';

export default function Dashboard() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard</h2>

      <div className="flex gap-6 flex-wrap">
        {/* Tarjeta de Pacientes */}
        <div className="border p-6 rounded shadow w-64 bg-white">
          <h3 className="font-bold mb-2">Pacientes</h3>
          <p className="mb-4">Total: 20</p>
          <Link to="/pacientes">
            <BotonPersonalizado>Ver Pacientes</BotonPersonalizado>
          </Link>
        </div>

        {/* Tarjeta de Médicos */}
        <div className="border p-6 rounded shadow w-64 bg-white">
          <h3 className="font-bold mb-2">Médicos</h3>
          <p className="mb-4">Total: 5</p>
          <Link to="/medicos">
            <BotonPersonalizado>Ver Médicos</BotonPersonalizado>
          </Link>
        </div>
      </div>
    </div>
  );
}
