import React from "react";

export default function Experiencia() {
  const experiencias = [
    { puesto: "Librearia", empresa: "Cosas y Cositas", periodo: "2023-2024" },
    { puesto: "Indumentaria", empresa: "Masculina, Femenina", periodo: "2022-2023" }
  ];

  return (
    <section id="experiencia" style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}>
      <h2>Experiencia Laboral</h2>
      <ul>
        {experiencias.map((exp, index) => (
          <li key={index}>
            <strong>{exp.puesto}</strong>  {exp.empresa} ({exp.periodo})
          </li>
        ))}
      </ul>
    </section>
  );
}
