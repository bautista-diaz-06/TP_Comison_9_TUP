import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Header from "../components/Header";

const TablaEventos = () => {
  const [eventos, setEventos] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [form, setForm] = useState({ nombre: "", fecha: "", lugar: "", cupo: "" });
  const [artistas, setArtistas] = useState([]);
  const [asociarArtistasId, setAsociarArtistasId] = useState(null);
  const [selectedArtistas, setSelectedArtistas] = useState([]);
  const [asistentes, setAsistentes] = useState([]);

  useEffect(() => {
    const storedEventos = JSON.parse(localStorage.getItem("eventos")) || [];
    setEventos(storedEventos);
    const storedArtistas = JSON.parse(localStorage.getItem("artistas")) || [];
    setArtistas(storedArtistas);
    const storedAsistentes = JSON.parse(localStorage.getItem("asistentes")) || [];
    setAsistentes(storedAsistentes);
  }, []);

  useEffect(() => {
    localStorage.setItem("eventos", JSON.stringify(eventos));
  }, [eventos]);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

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
        id: eventos.length > 0 ? Math.max(...eventos.map((e) => e.id)) + 1 : 1,
        ...form,
        artistas: [],
      };
      setEventos([...eventos, nuevoEvento]);
    }

    setForm({ nombre: "", fecha: "", lugar: "", cupo: "" });
  };

  const handleEdit = (id) => {
    const evento = eventos.find((e) => e.id === id);
    if (evento) {
      const { nombre, fecha, lugar, cupo } = evento;
      setForm({ nombre, fecha, lugar, cupo });
      setEditandoId(id);
    }
  };

  const handleDelete = (id) => {
    const confirm = window.confirm("¿Seguro que querés eliminar este evento?");
    if (!confirm) return;
    setEventos(eventos.filter((e) => e.id !== id));
  };

  // Asociar artistas
  const handleAsociar = (eventoId) => {
    setAsociarArtistasId(eventoId);
    const evento = eventos.find((e) => e.id === eventoId);
    setSelectedArtistas(evento.artistas || []);
  };

  const toggleArtista = (artistaId) => {
    setSelectedArtistas((prev) =>
      prev.includes(artistaId)
        ? prev.filter((id) => id !== artistaId)
        : [...prev, artistaId]
    );
  };

  const guardarArtistas = () => {
    const updatedEventos = eventos.map((e) =>
      e.id === asociarArtistasId ? { ...e, artistas: selectedArtistas } : e
    );
    setEventos(updatedEventos);
    setAsociarArtistasId(null);
  };

  // Calcular cupos ocupados
  const cuposOcupados = (eventoId) =>
    asistentes.filter((a) => a.eventoId === eventoId).length;

  return (
    <div>
      <Header />

      {/* Formulario */}
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", justifyContent: "center", gap: "10px", flexWrap: "wrap", marginTop: "100px" }}
      >
        <input type="text" name="nombre" placeholder="Nombre" value={form.nombre} onChange={handleChange} required />
        <input type="date" name="fecha" value={form.fecha} onChange={handleChange} required />
        <input type="text" name="lugar" placeholder="Lugar" value={form.lugar} onChange={handleChange} required />
        <input type="number" name="cupo" placeholder="Cupo total" value={form.cupo} onChange={handleChange} required />
        <button type="submit">{editandoId ? "Guardar Cambios" : "Agregar Evento"}</button>
      </form>

      {/* Tabla */}
      <Table bordered hover className="tabla w-75 mx-auto">
        <thead className="table-primary">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Lugar</th>
            <th>Cupo Total</th>
            <th>Ocupado</th>
            <th>Disponible</th>
            <th>Artistas</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {eventos.map((e) => {
            const ocupados = cuposOcupados(e.id);
            const disponible = e.cupo - ocupados;
            return (
              <tr key={e.id}>
                <td>{e.id}</td>
                <td>{e.nombre}</td>
                <td>{e.fecha}</td>
                <td>{e.lugar}</td>
                <td>{e.cupo}</td>
                <td>{ocupados}</td>
                <td>{disponible >= 0 ? disponible : 0}</td>
                <td>
                  {e.artistas.length > 0
                    ? artistas.filter((a) => e.artistas.includes(a.id)).map((a) => a.nombre).join(", ")
                    : "—"}
                </td>
                <td className="d-flex gap-2">
                  <Button variant="primary" onClick={() => handleEdit(e.id)}>Editar</Button>
                  <Button variant="danger" onClick={() => handleDelete(e.id)}>Eliminar</Button>
                  <Button variant="secondary" onClick={() => handleAsociar(e.id)}>Asociar Artistas</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      {/* Sección de asociación de artistas */}
      {asociarArtistasId && (
        <div style={{ width: "50%", margin: "20px auto", padding: "10px", border: "1px solid #ccc" }}>
          <h5>Seleccionar artistas para el evento</h5>
          {artistas.map((a) => (
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