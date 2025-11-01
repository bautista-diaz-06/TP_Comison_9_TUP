import { Link } from 'react-router-dom';

export default function NavBar({ setLogueado }) {
  // Estilos en objeto JS
  const navbarStyle = {
    backgroundColor: '#e5c1d3ff', // rosa
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: 'white',
  };

  const linkStyle = {
    color: 'black',
    textDecoration: 'none',
    marginLeft: '2rem', // menos espacio, más ordenado
    fontWeight: 600,
  };

  const linkHover = (e) => {
    e.target.style.color = '#721f4dff';
  };

  const linkOut = (e) => {
    e.target.style.color = 'black';
  };

  // Función para cerrar sesión
  const handleCerrarSesion = () => {
    localStorage.removeItem('logueado');
    localStorage.removeItem('usuarioActual');
    if (setLogueado) setLogueado(false);
  };

  return (
    <nav style={navbarStyle}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        
        <Link to="/inicio" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkOut}>
          Inicio
        </Link>

        <Link to="/pacientes" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkOut}>
          Pacientes
        </Link>

        <Link to="/medicos" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkOut}>
          Médicos
        </Link>

        <Link to="/turnos" style={linkStyle} onMouseEnter={linkHover} onMouseLeave={linkOut}>
          Turnos
        </Link>
      </div>

      <button
        onClick={handleCerrarSesion}
        style={{
          background: '#721f4d',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '8px',
          marginLeft: '1rem',
          cursor: 'pointer',
        }}
      >
        Cerrar Sesión
      </button>
    </nav>
  );
}
