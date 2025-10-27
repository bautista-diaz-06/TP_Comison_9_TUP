import { useEffect, useState } from "react";
import { get } from "../api.js";

export default function Clientes() {
  const [lista, setLista] = useState([]);
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "" });

  const cargar = async () => {
    const data = await get("/clientes");
    setLista(data);
  };

  useEffect(() => {
    cargar();
  }, []);

  const enviar = async (e) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.telefono)
      return alert("Completa todos los campos");

    await fetch("http://localhost:3001/clientes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        nombre: form.nombre,
        correo: form.email,
        telefono: form.telefono,
      }),
    });

    window.location.reload();
  };

  const eliminar = async (id) => {
    if (!confirm("¿Seguro que deseas eliminar este cliente?")) return;
    await fetch(`http://localhost:3001/clientes/${id}`, { method: "DELETE" });
    window.location.reload();
  };

  return (
    <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
      <h2>Clientes</h2>
      <form onSubmit={enviar} style={{ display: "grid", gap: 8 }}>
        <input
          placeholder="Nombre"
          value={form.nombre}
          onChange={(e) => setForm((v) => ({ ...v, nombre: e.target.value }))}
        />
        <input
          placeholder="Correo electrónico"
          value={form.email}
          onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
        />
        <input
          placeholder="Teléfono"
          value={form.telefono}
          onChange={(e) => setForm((v) => ({ ...v, telefono: e.target.value }))}
        />
        <button>Agregar</button>
      </form>

      <ul style={{ marginTop: 10 }}>
        {lista.map((c) => (
          <li
            key={c.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              gap: 8,
              alignItems: "center",
              padding: "6px 0",
            }}
          >
            <span>{c.nombre}</span>
            <button onClick={() => eliminar(c.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
