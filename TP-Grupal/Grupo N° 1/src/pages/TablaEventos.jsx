import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Header from "../components/Header";

const TablaEventos = () => {
  const [eventos, setEventos] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  const [form, setForm] = useState({
    nombre: "",
    fecha: "",
    lugar: "",
    cupo: "",
  });

  const [artistas, setArtistas] = useState([]);
  const [asociarArtistasId, setAsociarArtistasId] = useState(null);
  const [selectedArtistas, setSelectedArtistas] = useState([]);

  // Cargar eventos y artistas desde localStorage
  useEffect(() => {
    const storedEventos = JSON.parse(localStorage.getItem("eventos")) || [];
    setEventos(storedEventos);

    const storedArtistas = JSON.parse(localStorage.getItem("artistas")) || [];
    setArtistas(storedArtistas);
  }, []);

  useEffect(() => {
    localStorage.setItem("eventos", JSON.stringify(eventos));
  }, [eventos]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.fecha || !form.lugar || !form.cupo) return;

    if (editandoId !== null) {
      const eventosActualizados = eventos.map((evento) =>
        evento.id === editandoId ? { ...evento, ...form } : evento
      );
      setEventos(eventosActualizados);
      setEditandoId(null);
    } else {
      const nuevoEvento = {
        id: eventos.length > 0 ? Math.max(...eventos.map(e => e.id)) + 1 : 1,
        ...form,
        artistas: [], // ✅ Cambio: agrego propiedad para artistas asociados
      };
      setEventos([...eventos, nuevoEvento]);
    }

    setForm({ nombre: "", fecha: "", lugar: "", cupo: "" });
  };

  const handleEdit = (id) => {
    const datoEditar = eventos.find(e => e.id === id);
    if (datoEditar) {
      const { nombre, fecha, lugar, cupo } = datoEditar;
      setForm({ nombre, fecha, lugar, cupo });
      setEditandoId(id);
    }
  };

  const handleDelete = (id) => {
    setEventos(eventos.filter(e => e.id !== id));
  };

  // Abrir sección de asociación de artistas
  const handleAsociar = (eventoId) => {
    setAsociarArtistasId(eventoId);
    const evento = eventos.find(e => e.id === eventoId);
    setSelectedArtistas(evento.artistas || []);
  };

  const toggleArtista = (artistaId) => {
    setSelectedArtistas(prev =>
      prev.includes(artistaId)
        ? prev.filter(id => id !== artistaId)
        : [...prev, artistaId]
    );
  };

  const guardarArtistas = () => {
    const updatedEventos = eventos.map(e =>
      e.id === asociarArtistasId ? { ...e, artistas: selectedArtistas } : e
    );
    setEventos(updatedEventos);
    setAsociarArtistasId(null);
  };

  return (
    <div>
      <Header />

      {/* Formulario de Eventos */}
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "100px" }}
      >
        <input type="text" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
        <input type="date" name="fecha" value={form.fecha} onChange={handleChange} required />
        <input type="text" name="lugar" placeholder="Lugar" value={form.lugar} onChange={handleChange} required />
        <input type="number" name="cupo" placeholder="Cupo" value={form.cupo} onChange={handleChange} required />
        <button type="submit">{editandoId ? "Guardar Cambios" : "Agregar Evento"}</button>
      </form>

      {/* Tabla de Eventos */}
      <Table bordered hover className="tabla w-75 mx-auto">
        <thead className="table-primary">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Lugar</th>
            <th>Cupo</th>
            <th>Artistas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {eventos.map(e => (
            <tr key={e.id}>
              <td>{e.id}</td>
              <td>{e.nombre}</td>
              <td>{e.fecha}</td>
              <td>{e.lugar}</td>
              <td>{e.cupo}</td>
              <td>
                {e.artistas.length > 0
                  ? artistas.filter(a => e.artistas.includes(a.id)).map(a => a.nombre).join(", ")
                  : "—"}
              </td>
              <td className="d-flex gap-2">
                <Button variant="primary" onClick={() => handleEdit(e.id)}>Editar</Button>
                <Button variant="danger" onClick={() => handleDelete(e.id)}>Eliminar</Button>
                <Button variant="secondary" onClick={() => handleAsociar(e.id)}>Asociar Artistas</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      {/* Sección de asociación de artistas */}
      {asociarArtistasId && (
        <div style={{ width: "50%", margin: "20px auto", padding: "10px", border: "1px solid #ccc" }}>
          <h5>Seleccionar artistas para el evento</h5>
          {artistas.map(a => (
            <div key={a.id}>
              <input
                type="checkbox"
                checked={selectedArtistas.includes(a.id)}
                onChange={() => toggleArtista(a.id)}
              />{" "}
              {a.nombre} ({a.tipo})
            </div>
          ))}
          <Button variant="success" onClick={guardarArtistas} style={{ marginTop: "10px" }}>Guardar</Button>
          <Button variant="secondary" onClick={() => setAsociarArtistasId(null)} style={{ marginLeft: "10px" }}>Cancelar</Button>
        </div>
      )}
    </div>
  );
};

export default TablaEventos;







// import { useState, useEffect } from "react";
// import Table from "react-bootstrap/Table";
// import Header from "../components/Header";
// import Button from 'react-bootstrap/Button'

// const TablaEventos = () => {
//   const [eventos, setEventos] = useState([]);
//   const [editandoId, setEditandoId] = useState(null);

//   // Estado para manejar el formulario
//   const [form, setForm] = useState({
//     nombre: "",
//     fecha: "",
//     lugar: "",
//     cupo: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // Manejar submit del formulario
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!form.nombre || !form.fecha || !form.lugar || !form.cupo) return;

    
//     if (editandoId !== null) {
//       // 🔄 Editar evento existente
//       const eventosActualizados = eventos.map((evento) =>
//         evento.id === editandoId ? { ...evento, ...form } : evento
//       );
//       setEventos(eventosActualizados);
//       setEditandoId(null);
//     } else {
//       // ➕ Agregar nuevo evento
//       const nuevoEvento = {
//         id: eventos.length > 0 ? Math.max(...eventos.map((e) => e.id)) + 1 : 1,
//         ...form,
//       };
//       setEventos([...eventos, nuevoEvento]);
//     }

//     // Limpiar formulario
//     setForm({
//       nombre: "",
//       fecha: "",
//       lugar: "",
//       cupo: "",
//     });
//   };

//   const handleDelete = (id) => {
//     const tablaActualizada = eventos.filter((eventoEliminar) => eventoEliminar.id !== id)
//     setEventos(tablaActualizada)
//   }

//   const handleEdit = (id) => {
//     const datoEditar = eventos.find((eventoEditar) => eventoEditar.id === id)
//     if (datoEditar) {
//       // ❗ No incluimos el id en el form
//       const { nombre, fecha, lugar, cupo } = datoEditar;
//       setForm({ nombre, fecha, lugar, cupo });
//       setEditandoId(id);
//     }
//   }

//   return (
//     <div>
//       <Header />

//       <form
//         onSubmit={handleSubmit}
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           gap: "10px",
//           margin: "20px 0",
//           flexWrap: "wrap",
//           marginTop: "100px",
//         }}
//       >
//         <input
//           type="text"
//           name="nombre"
//           placeholder="Nombre"
//           value={form.nombre}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="date"
//           name="fecha"
//           value={form.fecha}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="text"
//           name="lugar"
//           placeholder="Lugar"
//           value={form.lugar}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="number"
//           name="cupo"
//           placeholder="Cupo"
//           value={form.cupo}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">
//           {editandoId ? "Guardar Cambios" : "Agregar Evento"}
//         </button>
//       </form>

//       <Table bordered hover className="tabla tabla w-75 mx-auto">
//         <thead className="table-primary">
//           <tr>
//             <th>#</th>
//             <th>Nombre</th>
//             <th>Fecha</th>
//             <th>Lugar</th>
//             <th>Cupo</th>
//             <th>Acciones</th>
//           </tr>
//         </thead>
//         <tbody>
//           {eventos.map((evento) => (
//             <tr key={evento.id}>
//               <td>{evento.id}</td>
//               <td>{evento.nombre}</td>
//               <td>{evento.fecha}</td>
//               <td>{evento.lugar}</td>
//               <td>{evento.cupo}</td>
//               <td className="d-flex gap-3">
//                 <Button variant="primary" onClick={() => handleEdit(evento.id)}>Editar</Button>
//                 <Button variant="danger" onClick={() => handleDelete(evento.id)}>Eliminar</Button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default TablaEventos;
