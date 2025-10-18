import React from "react";

export default function Certificados() {
  const certificados = [
    "Secretariado Informatico-INI Capacitaciòn",
    "Desarrollo Web-Educacion IT"
  ];

  return (
    <section id="certificados" style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}>
      <h2>Certificados</h2>
      <ul>
        {certificados.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </section>
  );
}
