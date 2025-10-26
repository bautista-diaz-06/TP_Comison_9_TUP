import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="bg-pink-500 p-4 text-white flex gap-4">
      <Link to="/dashboard" className="hover:underline">Dashboard</Link>
      <Link to="/pacientes" className="hover:underline">Pacientes</Link>
      <Link to="/medicos" className="hover:underline">Médicos</Link>
    </nav>
  );
}
