// src/components/reservas/ReservasForm.jsx
import React, { useState, useEffect } from "react";
import Button from "../components/common/Button";
import "../styles/Reservas.css";

function ReservasForm({ onAddReserva, onUpdateReserva, reservaToEdit, onCancelEdit }) {
  const [socio, setSocio] = useState("");
  const [actividad, setActividad] = useState("");
  const [fecha, setFecha] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    if (reservaToEdit) {
      setSocio(reservaToEdit.socio);
      setActividad(reservaToEdit.actividad);
      setFecha(reservaToEdit.fecha);
    } else {
      setSocio("");
      setActividad("");
      setFecha("");
      setError("");
    }
  }, [reservaToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!socio || !actividad || !fecha) {
      setError("Todos los campos son obligatorios.");
      return;
    }
    setError("");

    const reservaData = { socio, actividad, fecha };

    if (reservaToEdit) {
      onUpdateReserva({ ...reservaToEdit, ...reservaData });
    } else {
      onAddReserva({ id: Date.now(), ...reservaData });
    }

    setSocio("");
    setActividad("");
    setFecha("");
  };

  return (
    <form onSubmit={handleSubmit} className="reservas-form">
      <h3>{reservaToEdit ? "Editar Reserva" : "Nueva Reserva"}</h3>
      {error && <p className="error-message">{error}</p>}
      <input type="text" placeholder="Nombre del Socio" value={socio} onChange={(e) => setSocio(e.target.value)} />
      <input type="text" placeholder="Actividad" value={actividad} onChange={(e) => setActividad(e.target.value)} />
      <input type="date" value={fecha} onChange={(e) => setFecha(e.target.value)} />
      <div className="form-actions">
        <Button type="submit">{reservaToEdit ? "Actualizar" : "Agregar"}</Button>
        {reservaToEdit && <Button type="button" onClick={onCancelEdit} className="btn-secondary">Cancelar</Button>}
      </div>
    </form>
  );
}

export default ReservasForm;
