import React from "react";


export default function Header() {
  return (
    <header className="header">
      <div className="header-text">
        <h1 className="header-name">GIMENA PEREZ</h1>
        <h2 className="header-role">DESARROLLADORA WEB</h2>
        <p className="header-description">
          Aquí va un párrafo de presentación sobre mí, lo que quieras contar.
        </p>
      </div>
      <img
        src="/fotoperfil.jpg"
        alt="Foto personal"
        className="header-img"
      />
    </header>
  );
}