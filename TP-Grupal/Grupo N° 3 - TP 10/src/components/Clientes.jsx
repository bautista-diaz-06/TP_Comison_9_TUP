// import { useEffect, useState } from "react";
// import { get } from "../api.js";

// export default function Clientes() {
//   const [lista, setLista] = useState([]);
//   const [form, setForm] = useState({ nombre: "", email: "", telefono: "" });

//   const cargar = async () => {
//     const data = await get("/clientes");
//     setLista(data);
//   };

//   useEffect(() => {
//     cargar();
//   }, []);

//   const enviar = async (e) => {
//     e.preventDefault();
//     if (!form.nombre || !form.email || !form.telefono)
//       return alert("Completa todos los campos");

//     await fetch("http://localhost:3001/clientes", {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({
//         nombre: form.nombre,
//         correo: form.email,
//         telefono: form.telefono,
//       }),
//     });

//     window.location.reload();
//   };

//   const eliminar = async (id) => {
//     if (!confirm("¿Seguro que deseas eliminar este cliente?")) return;
//     await fetch(`http://localhost:3001/clientes/${id}`, { method: "DELETE" });
//     window.location.reload();
//   };

//   return (
//     <div style={{ border: "1px solid #ddd", padding: 12, borderRadius: 8 }}>
//       <h2>Clientes</h2>
//       <form onSubmit={enviar} style={{ display: "grid", gap: 8 }}>
//         <input
//           placeholder="Nombre"
//           value={form.nombre}
//           onChange={(e) => setForm((v) => ({ ...v, nombre: e.target.value }))}
//         />
//         <input
//           placeholder="Correo electrónico"
//           value={form.email}
//           onChange={(e) => setForm((v) => ({ ...v, email: e.target.value }))}
//         />
//         <input
//           placeholder="Teléfono"
//           value={form.telefono}
//           onChange={(e) => setForm((v) => ({ ...v, telefono: e.target.value }))}
//         />
//         <button>Agregar</button>
//       </form>

//       <ul style={{ marginTop: 10 }}>
//         {lista.map((c) => (
//           <li
//             key={c.id}
//             style={{
//               display: "flex",
//               justifyContent: "space-between",
//               gap: 8,
//               alignItems: "center",
//               padding: "6px 0",
//             }}
//           >
//             <span>{c.nombre}</span>
//             <button onClick={() => eliminar(c.id)}>Eliminar</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }


// import React, { useState } from "react";
// import "../styles/Clientes.css";

// const Clientes = () => {
//   const [clientes, setClientes] = useState([]);
//   const [nuevoCliente, setNuevoCliente] = useState({
//     nombre: "",
//     email: "",
//     telefono: "",
//   });

//   const handleChange = (e) => {
//     setNuevoCliente({ ...nuevoCliente, [e.target.name]: e.target.value });
//   };

//   const agregarCliente = (e) => {
//     e.preventDefault();
//     if (!nuevoCliente.nombre || !nuevoCliente.email || !nuevoCliente.telefono) return;

//     setClientes([...clientes, nuevoCliente]);
//     setNuevoCliente({ nombre: "", email: "", telefono: "" });
//   };

//   const eliminarCliente = (index) => {
//     const nuevos = clientes.filter((_, i) => i !== index);
//     setClientes(nuevos);
//   };

//   return (
//     <div className="clientes-container">
//       <h2>Gestión de Clientes</h2>

//       <form onSubmit={agregarCliente}>
//         <input
//           type="text"
//           name="nombre"
//           placeholder="Nombre"
//           value={nuevoCliente.nombre}
//           onChange={handleChange}
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email"
//           value={nuevoCliente.email}
//           onChange={handleChange}
//         />
//         <input
//           type="tel"
//           name="telefono"
//           placeholder="Teléfono"
//           value={nuevoCliente.telefono}
//           onChange={handleChange}
//         />
//         <button type="submit">Agregar Cliente</button>
//       </form>

//       <ul>
//         {clientes.map((c, index) => (
//           <li key={index}>
//             <span>
//               <strong>{c.nombre}</strong> - {c.email} - {c.telefono}
//             </span>
//             <button onClick={() => eliminarCliente(index)}>Eliminar</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

import { useState } from "react";
import "../styles/Clientes.css";

export default function Clientes({ clientes, setClientes }) {
  const [form, setForm] = useState({ nombre: "", email: "", telefono: "" });

  const agregarCliente = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.telefono) return alert("Completa todos los campos");

    const nuevoCliente = {
      id: Date.now(),
      nombre: form.nombre,
      email: form.email,
      telefono: form.telefono
    };

    setClientes([...clientes, nuevoCliente]);
    setForm({ nombre: "", email: "", telefono: "" });
  };

  return (
    <div className="card">
      <h2>Clientes</h2>
      <form onSubmit={agregarCliente} className="form-cliente">
        <input
          placeholder="Nombre"
          value={form.nombre}
          onChange={(e) => setForm({ ...form, nombre: e.target.value })}
        />
        <input
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          placeholder="Teléfono"
          value={form.telefono}
          onChange={(e) => setForm({ ...form, telefono: e.target.value })}
        />
        <button type="submit">Agregar Cliente</button>
      </form>

      <ul>
        {clientes.map(c => (
          <li key={c.id}>{c.nombre} • {c.email} • {c.telefono}</li>
        ))}
      </ul>
    </div>
  );
}

