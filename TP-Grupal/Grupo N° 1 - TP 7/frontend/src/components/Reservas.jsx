import React, { useState, useEffect } from "react";
import {
  fetchReservas as fetchReservasApi,
  createReserva as createReservaApi,
  updateReserva as updateReservaApi,
  deleteReserva as deleteReservaApi
} from "../services/reservas";

import ReservaForm from "./ReservaForm";
import ReservasList from "./ReservasList";

function Reservas({ socios, actividades }) {
  const [reservas, setReservas] = useState([]);
  const [reservaToEdit, setReservaToEdit] = useState(null);

  useEffect(() => {
    fetchReservasApi()
      .then(setReservas)
      .catch(err => console.error("Error cargando reservas:", err));
  }, []);

  const addReserva = async (data) => {
    const nueva = await createReservaApi(data);
    setReservas(prev => [...prev, nueva]);
  };

  const updateReserva = async (id, data) => {
    const actualizada = await updateReservaApi(id, data);
    setReservas(prev => prev.map(r => r.id === id ? actualizada : r));
    setReservaToEdit(null);
  };

  const deleteReserva = async (id) => {
    await deleteReservaApi(id);
    setReservas(prev => prev.filter(r => r.id !== id));
  };

  return (
    <div className="page-container">
      <h2>Gestión de Reservas</h2>

      <ReservaForm
        socios={socios}
        actividades={actividades}
        onAddReserva={addReserva}
        onUpdateReserva={updateReserva}
        reservaToEdit={reservaToEdit}
        onCancelEdit={() => setReservaToEdit(null)}
      />

      <ReservasList
        reservas={reservas}
        socios={socios}
        actividades={actividades}
        onEditReserva={setReservaToEdit}
        onDeleteReserva={deleteReserva}
      />
    </div>
  );
}

export default Reservas;
