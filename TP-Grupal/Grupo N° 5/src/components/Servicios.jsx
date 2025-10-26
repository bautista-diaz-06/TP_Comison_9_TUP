import { useEffect, useState } from "react";
import { get } from "../api.js";

export default function Servicios() {
  const [lista, setLista] = useState([]);
  const [form, setForm] = useState({ nombre: "", precio: "", duracion: 60 });

  const cargar = async () => {
    const data = await get("/servicios");
    setLista(data);
  };

  useEffect(() => {
    cargar();
  }, []);

  const enviar = async e => {
    e.preventDefault();
    if (!form.nombre || !form.precio)
      return alert("Completa todos los campos");

    await fetch("http://localhost:3001/servicios", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: form.nombre,
        precio: Number(form.precio),
        duracion_minutos: Number(form.duracion)
      })
    });

    window.location.reload();
  };

  const eliminar = async id => {
    if (!confirm("¿Seguro que deseas eliminar este servicio?")) return;
    await fetch(`http://localhost:3001/servicios/${id}`, { method: "DELETE" });
    window.location.reload();
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
      <h2>Servicios</h2>
      <form onSubmit={enviar} style={{ display: "grid", gap: 8 }}>
        <input
          placeholder="Nombre del servicio"
          value={form.nombre}
          onChange={e => setForm(v => ({ ...v, nombre: e.target.value }))}
        />
        <input
          placeholder="Precio"
          value={form.precio}
          onChange={e => setForm(v => ({ ...v, precio: e.target.value }))}
        />
        <input
          placeholder="Duración (minutos)"
          value={form.duracion}
          onChange={e => setForm(v => ({ ...v, duracion: e.target.value }))}
        />
        <button>Agregar</button>
      </form>

      <ul style={{ marginTop: 10 }}>
        {lista.map(s => (
          <li
            key={s.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 8,
              padding: "6px 0"
            }}
          >
            <span>
              {s.nombre} • ${s.precio} • {s.duracion_minutos} min
            </span>
            <button onClick={() => eliminar(s.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
