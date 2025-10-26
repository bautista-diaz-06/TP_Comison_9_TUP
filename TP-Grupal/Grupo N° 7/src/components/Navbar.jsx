import { Link, useNavigate } from 'react-router-dom';

export default function NavBar({ setLogueado }) {
  const navigate = useNavigate();

  const handleCerrarSesion = () => {
    localStorage.removeItem('usuarioActual');
    localStorage.setItem('logueado', false);
    setLogueado(false);
    navigate('/login');
  };

  const navbarStyle = {
    backgroundColor: '#e5c1d3ff',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  };

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    marginLeft: '2rem',
    fontWeight: 600,
  };

  return (
    <nav style={navbarStyle}>
      <div>
        <Link to="/dashboard" style={linkStyle}>Dashboard</Link>
        <Link to="/pacientes" style={linkStyle}>Pacientes</Link>
        <Link to="/medicos" style={linkStyle}>Médicos</Link>
      </div>
      <button onClick={handleCerrarSesion} style={{ background: '#721f4d', color: 'white', border: 'none', padding: '8px 16px', borderRadius: '8px' }}>
        Cerrar Sesión
      </button>
    </nav>
  );
}
