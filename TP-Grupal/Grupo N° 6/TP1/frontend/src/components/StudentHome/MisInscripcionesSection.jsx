import { useEffect, useState } from "react";

const MisInscripcionesSection = () => {
  const [misInscripciones, setMisInscripciones] = useState([]);

  useEffect(() => {
    const userId = localStorage.getItem("userId");
    const inscripciones =
      JSON.parse(localStorage.getItem("inscripciones")) || [];
    const filtradas = inscripciones.filter((i) => i.userId === userId);
    setMisInscripciones(filtradas);
  }, []);

  return (
    <section className="student-section">
      <h2 className="section-title">Mis inscripciones</h2>

      <table className="data-table">
        <thead>
          <tr>
            <th>Curso</th>
            <th>Categoría</th>
            <th>Duración</th>
            <th>Estado</th>
            <th>Fecha</th>
          </tr>
        </thead>
        <tbody>
          {misInscripciones.length > 0 ? (
            misInscripciones.map((i, idx) => (
              <tr key={idx}>
                <td>{i.cursoNombre}</td>
                <td>{i.categoria}</td>
                <td>{i.duracion}</td>
                <td>{i.estado}</td>
                <td>{i.fecha}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                No tenés inscripciones aún
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </section>
  );
};

export default MisInscripcionesSection;
