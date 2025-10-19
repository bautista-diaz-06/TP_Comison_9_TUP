import React from "react";

export default function SoftSkills() {
  const skills = ["Trabajo en equipo", "Comunicación", "Resolución de problemas", "Adaptabilidad"];

  return (
    <section id="soft-skills">
      <div className="titulo">
        <img src="/skills.png" alt="Soft Skills" className="icono" />
        <h2>Soft Skills</h2>
      </div>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}