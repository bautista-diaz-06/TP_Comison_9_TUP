import { useEffect, useState } from "react";
import { useAdminUIStore } from "../../store/AdminUIStore";

const InscripcionesAdminSection = () => {
  const { mode } = useAdminUIStore();
  const [inscripciones, setInscripciones] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("inscripciones")) || [];
    setInscripciones(stored);
  }, []);

  const guardarInscripciones = (data) => {
    localStorage.setItem("inscripciones", JSON.stringify(data));
    setInscripciones(data);
  };

  const handleRowClick = (i) => {
    switch (mode) {
      case "ver":
        alert(
          `📘 Curso: ${i.cursoNombre || i.curso}\n👤 Alumno: ${
            i.alumno || i.userId
          }\n📅 ${i.fecha || "Sin fecha"}\nEstado: ${i.estado || "Pendiente"}`
        );
        break;

      case "aceptar": {
        const actualizado = inscripciones.map((insc) =>
          insc.id === i.id ? { ...insc, estado: "Aceptada" } : insc
        );
        guardarInscripciones(actualizado);
        alert(`✅ Inscripción aceptada (${i.curso || i.cursoNombre}).`);
        break;
      }

      case "rechazar": {
        const actualizado = inscripciones.map((insc) =>
          insc.id === i.id ? { ...insc, estado: "Rechazada" } : insc
        );
        guardarInscripciones(actualizado);
        alert(`❌ Inscripción rechazada (${i.curso || i.cursoNombre}).`);
        break;
      }

      default:
        break;
    }
  };

  const handleAdd = () => {
    const alumno = prompt("Nombre del alumno:");
    const curso = prompt("Nombre del curso:");
    if (!alumno || !curso) return;
    const nueva = [
      ...inscripciones,
      {
        id: Date.now(),
        alumno,
        curso,
        estado: "Pendiente",
        fecha: new Date().toLocaleDateString(),
      },
    ];
    guardarInscripciones(nueva);
    alert(`📋 Inscripción creada para ${alumno} en "${curso}".`);
  };

  return (
    <section className="student-section">
      <h2 className="section-title">Inscripciones ({mode.toUpperCase()})</h2>

      <table className="data-table">
        <thead>
          <tr>
            <th>Alumno</th>
            <th>Curso</th>
            <th>Fecha</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {inscripciones.length > 0 ? (
            inscripciones.map((i) => (
              <tr
                key={i.id}
                className={
                  ["ver", "aceptar", "rechazar"].includes(mode)
                    ? "clickable-row"
                    : ""
                }
                onClick={() =>
                  ["ver", "aceptar", "rechazar"].includes(mode)
                    ? handleRowClick(i)
                    : null
                }
              >
                <td>{i.alumno || i.userId}</td>
                <td>{i.curso || i.cursoNombre}</td>
                <td>{i.fecha || "-"}</td>
                <td>{i.estado || "Pendiente"}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No hay inscripciones registradas
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {mode === "crear" && (
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <button className="crud-btn" onClick={handleAdd}>
            ➕ Registrar inscripción
          </button>
        </div>
      )}

      <p style={{ marginTop: "1.2rem", textAlign: "center", opacity: 0.8 }}>
        {mode === "ver" && "⚪ Modo Visualización"}
        {mode === "crear" && "🟣 Modo Crear Inscripción"}
        {mode === "aceptar" && "🟢 Modo Aceptar Inscripción"}
        {mode === "rechazar" && "🔴 Modo Rechazar Inscripción"}
      </p>
    </section>
  );
};

export default InscripcionesAdminSection;
