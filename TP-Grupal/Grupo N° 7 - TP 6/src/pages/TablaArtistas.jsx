import { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Header from "../components/Header";

const TablaArtistas = () => {
  const [artistas, setArtistas] = useState([]);
  const [editandoId, setEditandoId] = useState(null);
  const [form, setForm] = useState({ nombre: "", tipo: "" });

  // Cargar artistas desde localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("artistas")) || [];
    setArtistas(stored);
  }, []);

  // Guardar artistas en localStorage cuando cambien
  useEffect(() => {
    localStorage.setItem("artistas", JSON.stringify(artistas));
  }, [artistas]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.tipo) return;

    if (editandoId !== null) {
      const updated = artistas.map((a) =>
        a.id === editandoId ? { ...a, ...form } : a
      );
      setArtistas(updated);
      setEditandoId(null);
    } else {
      const nuevoArtista = {
        id: artistas.length > 0 ? Math.max(...artistas.map(a => a.id)) + 1 : 1,
        ...form,
      };
      setArtistas([...artistas, nuevoArtista]);
    }

    setForm({ nombre: "", tipo: "" });
  };

  const handleEdit = (id) => {
    const artista = artistas.find((a) => a.id === id);
    if (artista) {
      setForm({ nombre: artista.nombre, tipo: artista.tipo });
      setEditandoId(id);
    }
  };

  const handleDelete = (id) => {
    setArtistas(artistas.filter((a) => a.id !== id));
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
          placeholder="Nombre del artista"
          value={form.nombre}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="tipo"
          placeholder="Tipo de arte"
          value={form.tipo}
          onChange={handleChange}
          required
        />
        <button type="submit">{editandoId ? "Guardar Cambios" : "Agregar Artista"}</button>
      </form>

      <Table bordered hover className="tabla w-75 mx-auto">
        <thead className="table-primary">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Tipo de arte</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {artistas.map((a) => (
            <tr key={a.id}>
              <td>{a.id}</td>
              <td>{a.nombre}</td>
              <td>{a.tipo}</td>
              <td className="d-flex gap-2">
                <Button variant="primary" onClick={() => handleEdit(a.id)}>Editar</Button>
                <Button variant="danger" onClick={() => handleDelete(a.id)}>Eliminar</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaArtistas;
