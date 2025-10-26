import { Link } from 'react-router-dom';

export default function NavBar() {
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
  marginLeft: '12rem', // antes estaba 1rem, ahora más espacio
  fontWeight: 600,
};
  const linkHover = (e) => {
    e.target.style.color = '#721f4dff';
  };

  const linkOut = (e) => {
    e.target.style.color = '#721f4dff';
  };

  return (
    <nav style={navbarStyle}>
      <div>
        <Link
          to="/login"
          style={linkStyle}
          onMouseEnter={linkHover}
          onMouseLeave={linkOut}
        >
          Login
        </Link>

        <Link
          to="/dashboard"
          style={linkStyle}
          onMouseEnter={linkHover}
          onMouseLeave={linkOut}
        >
          Dashboard
        </Link>
        <Link
          to="/pacientes"
          style={linkStyle}
          onMouseEnter={linkHover}
          onMouseLeave={linkOut}
        >
          Pacientes
        </Link>
        <Link
          to="/medicos"
          style={linkStyle}
          onMouseEnter={linkHover}
          onMouseLeave={linkOut}
        >
          Médicos
        </Link>
        
      </div>
    </nav>
  );
}
