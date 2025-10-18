import React from "react";

export default function SoftSkills() {
  const skills = ["Trabajo en equipo", "Comunicación", "Resolución de problemas", "Adaptabilidad"];

  return (
    <section id="soft-skills" style={{ border: "1px solid #ccc", padding: "1rem", margin: "1rem 0" }}>
      <h2>Soft Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}
