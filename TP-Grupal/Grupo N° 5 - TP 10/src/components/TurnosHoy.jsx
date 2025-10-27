import { useEffect, useState } from "react";
import { get } from "../api.js";

const formato = s => new Date(s.replace(" ", "T")).toLocaleString();

export default function TurnosHoy() {
  const [turnos, setTurnos] = useState([]);
  const hoy = new Date().toISOString().slice(0, 10);

  const cargar = async () => {
    const data = await get(`/turnos?fecha=${hoy}`);
    setTurnos(data);
  };

  useEffect(() => {
    cargar();
  }, []);

  const cambiarEstado = async (id, estado) => {
    await fetch(`http://localhost:3001/turnos/${id}/estado`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ estado })
    });
    window.location.reload();
  };

  const eliminar = async id => {
    if (!confirm("¿Seguro que deseas eliminar este turno?")) return;
    await fetch(`http://localhost:3001/turnos/${id}`, { method: "DELETE" });
    window.location.reload();
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
      <h2>Turnos del Día</h2>
      <ul>
        {turnos.map(t => (
          <li
            key={t.id}
            style={{
              margin: "6px 0",
              display: "flex",
              gap: 8,
              alignItems: "center",
              justifyContent: "space-between"
            }}
          >
            <div>
              {formato(t.inicio)} • {t.cliente_nombre} • {t.servicio_nombre} •{" "}
              {t.estado}
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <button onClick={() => cambiarEstado(t.id, "hecho")}>
                Finalizar
              </button>
              <button onClick={() => cambiarEstado(t.id, "cancelado")}>
                Cancelar
              </button>
              <button onClick={() => eliminar(t.id)}>Eliminar</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
