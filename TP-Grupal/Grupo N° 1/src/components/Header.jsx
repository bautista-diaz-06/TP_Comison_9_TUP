import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const Header = () => {
  const getName = localStorage.getItem("nombre");

  const handleLogout = () => {
    localStorage.removeItem("nombre"); // elimina el localstorage del usuario
    window.location.href = "/"; //redirige al login
  };

  return (
    <div className="header">
      <div className="container-bienvenida">BIENVENIDO {getName}</div>

      <nav className="navbar">
        <ul>
          <li><Link to="/tabla-eventos">Eventos</Link></li>
          <li>Dashboards</li>
          <li><Link to="/tabla-artistas">Artistas</Link></li>
        </ul>
      </nav>

      <div className="btn-logout">
        <Button variant="danger" onClick={handleLogout}>
          Cerrar sesion
        </Button>
      </div>
    </div>
  );
};

export default Header;
