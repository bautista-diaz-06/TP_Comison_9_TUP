import { useEffect, useState } from "react";
import { useAdminUIStore } from "../../store/AdminUIStore";

const CursosSection = () => {
  const { mode } = useAdminUIStore();
  const [cursos, setCursos] = useState([]);

  // 🔹 Cargar cursos iniciales
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("cursos")) || [];
    setCursos(stored);
  }, []);

  // 🔹 Guardar y refrescar
  const guardarCursos = (data) => {
    localStorage.setItem("cursos", JSON.stringify(data));
    setCursos(data);
  };

  // ==============================
  // 🧩 ACCIONES POR MODO
  // ==============================

  const handleRowClick = (curso) => {
    switch (mode) {
      case "ver":
        alert(
          `👁️ Curso: ${curso.nombre}\nDuración: ${curso.duracion}\nCupo: ${curso.cupo}`
        );
        break;

      case "editar": {
        const nuevoNombre = prompt("Nuevo nombre:", curso.nombre);
        if (!nuevoNombre) return;

        const actualizado = cursos.map((c) =>
          c.id === curso.id ? { ...c, nombre: nuevoNombre } : c
        );
        guardarCursos(actualizado);
        alert(`✏️ Curso actualizado correctamente.`);
        break;
      }

      case "eliminar": {
        if (!confirm(`¿Eliminar el curso "${curso.nombre}"?`)) return;
        const nuevo = cursos.filter((c) => c.id !== curso.id);
        guardarCursos(nuevo);
        alert("🗑️ Curso eliminado.");
        break;
      }

      case "inscribir": {
        const userId = localStorage.getItem("userId");
        if (!userId) return alert("⚠️ Usuario no identificado.");

        const inscripciones =
          JSON.parse(localStorage.getItem("inscripciones")) || [];

        // Evitar duplicados
        const yaInscripto = inscripciones.some(
          (i) => i.userId === userId && i.cursoId === curso.id
        );
        if (yaInscripto) return alert("⚠️ Ya estás inscripto en este curso.");
        if (curso.cupo <= 0) return alert("❌ No hay cupos disponibles.");

        const nuevaInscripcion = {
          userId,
          cursoId: curso.id,
          cursoNombre: curso.nombre,
          categoria: curso.categoria,
          duracion: curso.duracion,
          estado: "Activo",
          fecha: new Date().toLocaleDateString(),
        };

        // Guardar inscripción y actualizar cupo
        inscripciones.push(nuevaInscripcion);
        localStorage.setItem("inscripciones", JSON.stringify(inscripciones));

        const actualizado = cursos.map((c) =>
          c.id === curso.id ? { ...c, cupo: c.cupo - 1 } : c
        );
        guardarCursos(actualizado);

        alert(`✅ Inscripción exitosa en "${curso.nombre}"`);
        break;
      }

      default:
        break;
    }
  };

  const handleAdd = () => {
    const nombre = prompt("Nombre del curso:");
    if (!nombre) return;

    const categoria = prompt("Categoría del curso:") || "General";
    const duracion = prompt("Duración en meses:") || "Sin especificar";
    const cupo = parseInt(prompt("Cupo inicial:"), 10) || 10;

    const nuevo = [
      ...cursos,
      {
        id: Date.now(),
        nombre,
        categoria,
        duracion: `${duracion} meses`,
        cupo,
      },
    ];

    guardarCursos(nuevo);
    alert(`✅ Curso "${nombre}" creado correctamente.`);
  };

  // ==============================
  // 🧩 RENDER ÚNICO
  // ==============================

  return (
    <section className="student-section">
      <h2 className="section-title">Cursos ({mode.toUpperCase()})</h2>

      <table className="data-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Duración</th>
            <th>Cupo</th>
            {mode === "eliminar" && <th>Acción</th>}
          </tr>
        </thead>
        <tbody>
          {cursos.length > 0 ? (
            cursos.map((c) => (
              <tr
                key={c.id}
                className={
                  ["ver", "editar", "inscribir"].includes(mode)
                    ? "clickable-row"
                    : ""
                }
                onClick={() =>
                  ["ver", "editar", "inscribir"].includes(mode)
                    ? handleRowClick(c)
                    : null
                }
              >
                <td>{c.nombre}</td>
                <td>{c.categoria}</td>
                <td>{c.duracion}</td>
                <td>{c.cupo}</td>
                {mode === "eliminar" && (
                  <td>
                    <button
                      className="crud-btn"
                      style={{
                        background: "rgba(255,0,0,0.2)",
                        color: "#ff7070",
                      }}
                      onClick={() => handleRowClick(c)}
                    >
                      ❌
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={mode === "eliminar" ? 5 : 4}>
                No hay cursos registrados
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {mode === "crear" && (
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <button className="crud-btn" onClick={handleAdd}>
            ➕ Crear nuevo curso
          </button>
        </div>
      )}

      <p style={{ marginTop: "1.2rem", textAlign: "center", opacity: 0.8 }}>
        {mode === "ver" && "⚪ Modo Visualización"}
        {mode === "inscribir" && "🟢 Modo Inscripción"}
        {mode === "crear" && "🟣 Modo Crear Curso"}
        {mode === "editar" && "🟠 Modo Editar Curso"}
        {mode === "eliminar" && "🔴 Modo Eliminar Curso"}
      </p>
    </section>
  );
};

export default CursosSection;
