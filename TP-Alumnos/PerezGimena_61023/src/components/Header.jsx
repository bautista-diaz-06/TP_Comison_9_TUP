import React from "react";


export default function Header() {
  return (
    <header>
      {/* Barra de navegación */}
      <nav className="barra-navegacion">
        <div className="marca">
          <span className="logo-marca">&gt; -</span>
          <span className="marca-nombre">GIMENA</span>
          
        </div>
        <ul className="enlaces-navegacion">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#sobre-mi">Estudios</a></li>
          <li><a href="#habilidades">Habilidades</a></li>
          <li><a href="#certificaciones">Proyectos</a></li>
          <li><a href="#proyectos">Certificaciones</a></li>
        </ul>
      </nav>

      {/* Sección principal */}
      <div className="header-main">
        <div className="header-text">
          <h1 className="header-name">GIMENA PEREZ</h1>
          <h2 className="header-role">DESARROLLADORA WEB</h2>
          <p className="header-description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis fugiat cupiditate similique earum veritatis odit illum autem neque unde soluta aspernatur quam deserunt, inventore sint enim quidem in itaque sit.
          </p>
        </div>
        <img
          src="/fotoperfil.jpg"
          alt="Foto personal"
          className="header-img"
        />
      </div>
    </header>
  );
}