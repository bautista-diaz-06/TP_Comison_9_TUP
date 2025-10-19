import React from "react";

export default function Certificados() {
  const certificados = [
    { nombre: "Secretariado Informático", tipo: "imagen", src: "/certificados/secretariado.jpg" },
    { nombre: "Desarrollo Web", tipo: "pdf", src: "/certificados/desarrollo_web.pdf" },
    { nombre: "Certificado en curso", tipo: "enCurso" }
  ];

  return (
    <section id="certificados">
      <div className="titulo">
        <img src="/certificado.png" alt="Certificados" className="icono" />
        <h2>Certificados</h2>
      </div>
      <ul>
        {certificados.map((cert, index) => (
          <li key={index} className="cert-item">
            <strong>{cert.nombre}</strong>
            {cert.tipo === "pdf" && (
              <a href={cert.src} target="_blank" rel="noopener noreferrer" className="cert-link">
                📄 Ver PDF
              </a>
            )}
            {cert.tipo === "imagen" && (
              <img src={cert.src} alt={cert.nombre} className="cert-img" />
            )}
            {cert.tipo === "enCurso" && <span className="en-curso">🕒 En curso</span>}
          </li>
        ))}
      </ul>
    </section>
  );
}