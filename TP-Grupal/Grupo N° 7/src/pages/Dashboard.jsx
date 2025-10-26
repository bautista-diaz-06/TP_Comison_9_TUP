import { Link } from 'react-router-dom';
import '../Styles/Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h3>Pacientes</h3>
          <Link to="/pacientes">
            <button>Ver Pacientes</button>
          </Link>
        </div>

        <div className="dashboard-card">
          <h3>Médicos</h3>
          <Link to="/medicos">
            <button>Ver Médicos</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
