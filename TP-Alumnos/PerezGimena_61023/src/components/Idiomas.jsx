import React from "react";

export default function Idiomas() {
  const idiomas = [
    { nombre: "Español", nivel: "Nativo" },
    { nombre: "Inglés", nivel: "Intermedio" }
  ];

  return (
    <section id="idiomas" style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}>
      <h2>Idiomas</h2>
      <ul>
        {idiomas.map((idioma, index) => (
          <li key={index}>{idioma.nombre} - {idioma.nivel}</li>
        ))}
      </ul>
    </section>
  );
}
