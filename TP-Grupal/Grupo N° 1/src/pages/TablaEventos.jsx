import React, { useState, useEffect } from "react";
import Table from "react-bootstrap/Table";
import Header from "../components/Header";

const TablaEventos = () => {
  const [eventos, setEventos] = useState([]);

  // Estado para manejar el formulario
  const [form, setForm] = useState({
    nombre: "",
    fecha: "",
    lugar: "",
    cupo: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Manejar submit del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.nombre || !form.fecha || !form.lugar || !form.cupo) return;

    const nuevoEvento = {
      id: eventos.length + 1,
      ...form,
    };

    setEventos([...eventos, nuevoEvento]);

    // Limpiar formulario
    setForm({
      nombre: "",
      fecha: "",
      lugar: "",
      cupo: "",
    });
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
          type="date"
          name="fecha"
          value={form.fecha}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lugar"
          placeholder="Lugar"
          value={form.lugar}
          onChange={handleChange}
          required
        />
        <input
          type="number"
          name="cupo"
          placeholder="Cupo"
          value={form.cupo}
          onChange={handleChange}
          required
        />
        <button type="submit">Agregar Evento</button>
      </form>

      <Table bordered hover className="tabla">
        <thead className="table-primary">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Fecha</th>
            <th>Lugar</th>
            <th>Cupo</th>
          </tr>
        </thead>
        <tbody>
          {eventos.map((evento) => (
            <tr key={evento.id}>
              <td>{evento.id}</td>
              <td>{evento.nombre}</td>
              <td>{evento.fecha}</td>
              <td>{evento.lugar}</td>
              <td>{evento.cupo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default TablaEventos;
