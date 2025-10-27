import { useEffect, useState } from "react";
import { get, post } from "../api.js";

export default function FormTurno({ clienteSeleccionado, onAgendar }) {
  const [clientes, setClientes] = useState([]);
  const [servicios, setServicios] = useState([]);
  const [clienteId, setClienteId] = useState("");
  const [servicioId, setServicioId] = useState("");
  const [fechaHora, setFechaHora] = useState("");
  const [disponible, setDisponible] = useState(null);

  useEffect(() => {
    get("/clientes").then(setClientes);
    get("/servicios").then(setServicios);
  }, []);

  useEffect(() => {
    if (clienteSeleccionado) setClienteId(String(clienteSeleccionado.id));
  }, [clienteSeleccionado]);

  const chequear = async () => {
    if (!fechaHora || !servicioId) return;
    const s = servicios.find(x => String(x.id) === String(servicioId));
    if (!s) return;

    const inicio = new Date(fechaHora).toISOString().slice(0, 19).replace("T", " ");
    const fin = new Date(new Date(fechaHora).getTime() + s.duracion_minutos * 60000)
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");

    const r = await get(`/disponibilidad?inicio=${encodeURIComponent(inicio)}&fin=${encodeURIComponent(fin)}`);
    setDisponible(r.disponible);
  };

  const enviar = async e => {
    e.preventDefault();
    if (!clienteId || !servicioId || !fechaHora)
      return alert("Completa todos los campos");

    const inicio = new Date(fechaHora).toISOString().slice(0, 19).replace("T", " ");

    try {
      await post("/turnos", {
        cliente_id: Number(clienteId),
        servicio_id: Number(servicioId),
        inicio
      });
      setFechaHora("");
      setDisponible(null);
      onAgendar && onAgendar();
    } catch (err) {
      alert(err.error || "Error al guardar el turno");
    }
  };

  return (
    <div className="card">
      <h2>Asignar Turno</h2>
      <form onSubmit={enviar} className="row">
        <select value={clienteId} onChange={e => setClienteId(e.target.value)}>
          <option value="">Cliente</option>
          {clientes.map(c => (
            <option key={c.id} value={c.id}>{c.nombre}</option>
          ))}
        </select>

        <select value={servicioId} onChange={e => setServicioId(e.target.value)}>
          <option value="">Servicio</option>
          {servicios.map(s => (
            <option key={s.id} value={s.id}>{s.nombre}</option>
          ))}
        </select>

        <input
          type="datetime-local"
          value={fechaHora}
          onChange={e => setFechaHora(e.target.value)}
        />
        <button type="submit">Guardar</button>
      </form>

      <div style={{ width: "100%", display: "flex", justifyContent: "center", marginTop: "14px" }}>
        <div style={{ textAlign: "center" }}>
          <button type="button" onClick={chequear}>Ver disponibilidad</button>
          {disponible === true && (
            <div style={{ marginTop: "6px" }}>
              <span className="pill badge-ok">Disponible</span>
            </div>
          )}
          {disponible === false && (
            <div style={{ marginTop: "6px" }}>
              <span className="pill badge-bad">Ocupado</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
