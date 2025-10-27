import { useEffect, useState } from "react";
import { useAdminUIStore } from "../../store/AdminUIStore";

const AlumnosAdminSection = () => {
  const { mode } = useAdminUIStore();
  const [alumnos, setAlumnos] = useState([]);

  // 🔹 Cargar los usuarios con rol "user"
  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    const soloAlumnos = storedUsers.filter((u) => u.role === "user");
    setAlumnos(soloAlumnos);
  }, []);

  // 🔹 Guardar cambios en localStorage (dentro de "users")
  const guardarAlumnos = (data) => {
    // Traer todos los usuarios existentes
    const allUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Reemplazar solo los que tienen rol user
    const actualizados = [...allUsers.filter((u) => u.rol !== "user"), ...data];

    localStorage.setItem("users", JSON.stringify(actualizados));
    setAlumnos(data);
  };

  // ==============================
  // 🧩 ACCIONES SEGÚN MODO
  // ==============================

  const handleRowClick = (alumno) => {
    switch (mode) {
      case "ver":
        alert(`👁️ ${alumno.nombre}\n📧 ${alumno.correo}`);
        break;

      case "editar": {
        const nuevoNombre = prompt("Nuevo nombre:", alumno.nombre);
        const nuevoCorreo = prompt("Nuevo correo:", alumno.correo);
        if (!nuevoNombre || !nuevoCorreo) return;

        const actualizado = alumnos.map((a) =>
          a.id === alumno.id
            ? { ...a, nombre: nuevoNombre, correo: nuevoCorreo }
            : a
        );
        guardarAlumnos(actualizado);
        alert("✏️ Alumno actualizado.");
        break;
      }

      case "eliminar": {
        if (!confirm(`¿Eliminar a "${alumno.nombre}"?`)) return;
        const nuevo = alumnos.filter((a) => a.id !== alumno.id);
        guardarAlumnos(nuevo);
        alert("🗑️ Alumno eliminado.");
        break;
      }

      default:
        break;
    }
  };

  const handleAdd = () => {
    const nombre = prompt("Nombre del alumno:");
    const correo = prompt("Correo:");
    if (!nombre || !correo) return;

    const nuevo = [...alumnos, { id: Date.now(), nombre, correo, rol: "user" }];

    guardarAlumnos(nuevo);
    alert(`✅ Alumno "${nombre}" registrado.`);
  };

  // ==============================
  // 🧩 RENDER ÚNICO
  // ==============================

  return (
    <section className="student-section">
      <h2 className="section-title">Alumnos ({mode.toUpperCase()})</h2>

      <table className="data-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Correo</th>
            {mode === "eliminar" && <th>Acción</th>}
          </tr>
        </thead>
        <tbody>
          {alumnos.length > 0 ? (
            alumnos.map((a) => (
              <tr
                key={a.id}
                className={
                  ["ver", "editar"].includes(mode) ? "clickable-row" : ""
                }
                onClick={() =>
                  ["ver", "editar"].includes(mode) ? handleRowClick(a) : null
                }
              >
                <td>{a.nombre}</td>
                <td>{a.correo}</td>
                {mode === "eliminar" && (
                  <td>
                    <button
                      className="crud-btn"
                      style={{
                        background: "rgba(255,0,0,0.2)",
                        color: "#ff7070",
                      }}
                      onClick={() => handleRowClick(a)}
                    >
                      ❌
                    </button>
                  </td>
                )}
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={mode === "eliminar" ? 3 : 2}>
                No hay alumnos registrados
              </td>
            </tr>
          )}
        </tbody>
      </table>

      {mode === "crear" && (
        <div style={{ textAlign: "center", marginTop: "1rem" }}>
          <button className="crud-btn" onClick={handleAdd}>
            ➕ Registrar alumno
          </button>
        </div>
      )}

      <p style={{ marginTop: "1.2rem", textAlign: "center", opacity: 0.8 }}>
        {mode === "ver" && "⚪ Modo Visualización"}
        {mode === "crear" && "🟣 Modo Crear Alumno"}
        {mode === "editar" && "🟠 Modo Editar Alumno"}
        {mode === "eliminar" && "🔴 Modo Eliminar Alumno"}
      </p>
    </section>
  );
};

export default AlumnosAdminSection;
