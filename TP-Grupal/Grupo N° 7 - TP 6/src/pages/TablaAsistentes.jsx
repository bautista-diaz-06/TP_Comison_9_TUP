import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Header from "../components/Header";
import Button from "react-bootstrap/Button";
import { getAsistentes, createAsistente, deleteAsistente } from "../services/asistentesService";
import { getEventos } from "../services/eventosService";

const TablaAsistentes = () => {
  const [asistentes, setAsistentes] = useState([]);
  const [eventos, setEventos] = useState([]);
  const [form, setForm] = useState({ nombre: "", email: "", eventoId: "" });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const dataAsistentes = await getAsistentes();
        const dataEventos = await getEventos();
        setAsistentes(dataAsistentes);
        setEventos(dataEventos);
      } catch (error) {
        console.error("Error al cargar datos:", error);
      }
    };
    fetchData();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.nombre || !form.email || !form.eventoId) return;

    const eventoSeleccionado = eventos.find(ev => ev.id === parseInt(form.eventoId));
    const asistentesDelEvento = asistentes.filter(a => a.eventoId === parseInt(form.eventoId));

    if (eventoSeleccionado && asistentesDelEvento.length >= eventoSeleccionado.cupo) {
      alert("Este evento ya alcanzó su cupo máximo.");
      return;
    }

    const nuevoAsistente = {
      nombre: form.nombre,
      email: form.email,
      eventoId: parseInt(form.eventoId),
    };

    try {
      const creado = await createAsistente(nuevoAsistente);
      setAsistentes([...asistentes, creado]);
      setForm({ nombre: "", email: "", eventoId: "" });
    } catch (error) {
      console.error("Error al crear asistente:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteAsistente(id);
      setAsistentes(asistentes.filter(a => a.id !== id));
    } catch (error) {
      console.error("Error al eliminar asistente:", error);
    }
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit} style={{ display: "flex", justifyContent: "center", gap: "10px", margin: "20px 0", flexWrap: "wrap", marginTop: "100px" }}>
        <input type="text" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={form.email} onChange={handleChange} required />
        <select name="eventoId" value={form.eventoId} onChange={handleChange} required>
          <option value="">Seleccionar evento</option>
          {eventos.map(evento => (
            <option key={evento.id} value={evento.id}>{evento.nombre} ({evento.fecha})</option>
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
          {asistentes.map(a => {
            const evento = eventos.find(ev => ev.id === a.eventoId);
            return (
              <tr key={a.id}>
                <td>{a.id}</td>
                <td>{a.nombre}</td>
                <td>{a.email}</td>
                <td>{evento ? evento.nombre : "Evento eliminado"}</td>
                <td>
                  <Button variant="danger" onClick={() => handleDelete(a.id)}>Eliminar</Button>
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
