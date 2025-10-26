import Button from "react-bootstrap/Button";

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
          <li>Eventos</li>
          <li>Dashboards</li>
          <li>Artistas</li>
          <li>?</li>
          <li>?</li>
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
