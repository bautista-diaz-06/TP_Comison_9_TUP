import { useEffect, useState } from "react";
import { get } from "../api.js";

export default function HistorialCliente() {
  const [clientes, setClientes] = useState([]);
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
  const [turnos, setTurnos] = useState([]);

  useEffect(() => {
    get("/clientes").then(setClientes);
  }, []);

  useEffect(() => {
    if (!clienteSeleccionado) {
      setTurnos([]);
      return;
    }
    get(`/turnos?cliente_id=${clienteSeleccionado.id}`).then(setTurnos);
  }, [clienteSeleccionado]);

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
      <h2>Historial por Cliente</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
        {clientes.map(c => (
          <button
            key={c.id}
            onClick={() => setClienteSeleccionado(c)}
            style={{
              background: clienteSeleccionado?.id === c.id ? "#000" : "#fff",
              color: clienteSeleccionado?.id === c.id ? "#fff" : "#000",
              border: "1px solid #000",
              borderRadius: "6px",
              padding: "6px 8px",
              cursor: "pointer",
              textAlign: "left"
            }}
          >
            {c.nombre}
          </button>
        ))}
      </div>

      <div style={{ marginTop: 16 }}>
        {clienteSeleccionado ? (
          <>
            <h3>Turnos de {clienteSeleccionado.nombre}</h3>
            <ul>
              {turnos.length > 0 ? (
                turnos.map(t => (
                  <li key={t.id}>
                    {new Date(t.inicio.replace(" ", "T")).toLocaleString()} •{" "}
                    {t.servicio_nombre} • {t.estado}
                  </li>
                ))
              ) : (
                <li>No tiene turnos registrados.</li>
              )}
            </ul>
          </>
        ) : (
          <div>Selecciona un cliente para ver su historial.</div>
        )}
      </div>
    </div>
  );
}
