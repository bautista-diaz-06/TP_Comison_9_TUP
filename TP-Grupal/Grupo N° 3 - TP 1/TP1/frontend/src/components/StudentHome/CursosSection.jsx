import { useCursos } from "../../hooks/CursosHook";
import { useStudentUIStore } from "../../store/StudentUIStore";

const CursosSection = () => {
  const { cursos, updateCurso, reloadCursos } = useCursos(); // 👈 agregamos hooks extra
  const { mode } = useStudentUIStore();

  const handleCursoClick = (curso) => {
    if (mode === "inscribir") {
      const userId = localStorage.getItem("userId");
      const inscripciones =
        JSON.parse(localStorage.getItem("inscripciones")) || [];

      // Evitar inscribir duplicado
      const yaInscripto = inscripciones.some(
        (i) => i.userId === userId && i.cursoId === curso.id
      );
      if (yaInscripto) {
        alert("⚠️ Ya estás inscripto en este curso.");
        return;
      }

      // Chequear cupo
      if (curso.cupo <= 0) {
        alert("❌ No hay cupos disponibles en este curso.");
        return;
      }

      // Crear inscripción
      const nueva = {
        userId,
        cursoId: curso.id,
        cursoNombre: curso.nombre,
        categoria: curso.categoria,
        duracion: curso.duracion,
        estado: "Activo",
        fecha: new Date().toLocaleDateString(),
      };

      inscripciones.push(nueva);
      localStorage.setItem("inscripciones", JSON.stringify(inscripciones));

      // Reducir cupo directamente en localStorage
      const cursosLocal = JSON.parse(localStorage.getItem("cursos")) || [];
      const index = cursosLocal.findIndex((c) => c.id === curso.id);
      if (index !== -1) {
        cursosLocal[index].cupo -= 1; // 👈 reducir cupo real
        localStorage.setItem("cursos", JSON.stringify(cursosLocal));
      }

      // Actualizar estado del hook
      updateCurso(curso.id, { cupo: curso.cupo - 1 }); // 👈 refrescar React state
      reloadCursos(); // 👈 forzar recarga visual
      alert(`✅ Inscripción exitosa al curso: ${curso.nombre}`);
    } else if (mode === "ver") {
      alert(`👁️ Curso: ${curso.nombre}\nDuración: ${curso.duracion}`);
    }
  };

  return (
    <section className="student-section">
      <h2 className="section-title">Cursos disponibles</h2>

      <table className="data-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoría</th>
            <th>Duración</th>
            <th>Cupo</th>
          </tr>
        </thead>
        <tbody>
          {cursos.length > 0 ? (
            cursos.map((c) => (
              <tr
                key={c.id}
                className="clickable-row"
                onClick={() => handleCursoClick(c)}
              >
                <td>{c.nombre}</td>
                <td>{c.categoria}</td>
                <td>{c.duracion}</td>
                <td>{c.cupo}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" style={{ textAlign: "center" }}>
                No hay cursos registrados
              </td>
            </tr>
          )}
        </tbody>
      </table>

      <p style={{ marginTop: "1rem", textAlign: "center" }}>
        {mode === "inscribir" && "🟢 Modo Inscribir activo"}
        {mode === "ver" && "⚪ Modo Visualización"}
      </p>
    </section>
  );
};

export default CursosSection;
