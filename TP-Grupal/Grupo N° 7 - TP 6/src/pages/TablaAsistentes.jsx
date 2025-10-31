import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Header from "../components/Header";
import Button from "react-bootstrap/Button";

const TablaAsistentes = () => {
  const [asistentes, setAsistentes] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    eventoId: "",
  });

  useEffect(() => {
    const asistentesGuardados =
      JSON.parse(localStorage.getItem("asistentes")) || [];
    setAsistentes(asistentesGuardados);

    const eventosGuardados = JSON.parse(localStorage.getItem("eventos")) || [];
    setEventos(eventosGuardados);
  }, []);

  useEffect(() => {
    localStorage.setItem("asistentes", JSON.stringify(asistentes));
  }, [asistentes]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.nombre || !form.email || !form.eventoId) return;

    // 🧠 Controlar cupo
    const eventoSeleccionado = eventos.find(
      (ev) => ev.id === parseInt(form.eventoId)
    );
    const asistentesDelEvento = asistentes.filter(
      (a) => a.eventoId === parseInt(form.eventoId)
    );

    if (asistentesDelEvento.length >= eventoSeleccionado.cupo) {
      alert("Este evento ya alcanzó su cupo máximo.");
      return;
    }

    const nuevoAsistente = {
      id:
        asistentes.length > 0 ? Math.max(...asistentes.map((a) => a.id)) + 1 : 1,
      nombre: form.nombre,
      email: form.email,
      eventoId: parseInt(form.eventoId),
    };

    setAsistentes([...asistentes, nuevoAsistente]);

    setForm({
      nombre: "",
      email: "",
      eventoId: "",
    });
  };

  const handleDelete = (id) => {
    const tablaActualizada = asistentes.filter((a) => a.id !== id);
    setAsistentes(tablaActualizada);
  };

  return (
    <div>
      <Header />

      <form
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "10px",
          margin: "20px 0",
          flexWrap: "wrap",
          marginTop: "100px",
        }}
      >
        <input
          type="text"
          name="nombre"
          placeholder="Nombre"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <select
          name="eventoId"
          value={form.eventoId}
          onChange={handleChange}
          required
        >
          <option value="">Seleccionar evento</option>
          {eventos.map((evento) => (
            <option key={evento.id} value={evento.id}>
              {evento.nombre} ({evento.fecha})
            </option>
          ))}
        </select>
        <button type="submit">Agregar Asistente</button>
      </form>

      <Table bordered hover className="tabla w-75 mx-auto">
        <thead className="table-primary">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Evento</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {asistentes.map((a) => {
            const evento = eventos.find((ev) => ev.id === a.eventoId);
            return (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.nombre}</td>
                <td>{a.email}</td>
                <td>{evento ? evento.nombre : "Evento eliminado"}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(a.id)}>
                    Eliminar
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaAsistentes;
