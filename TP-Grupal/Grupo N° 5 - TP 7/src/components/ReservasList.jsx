// src/components/reservas/ReservasList.jsx
import React, { useState } from "react";
import ReservaItem from "./ReservaItem";

function ReservasList({ reservas, onDeleteReserva, onEditReserva }) {
  const [filtroSocio, setFiltroSocio] = useState("");

  // Filtrar reservas según el socio seleccionado
  const reservasFiltradas = filtroSocio
    ? reservas.filter((r) => r.socio.toLowerCase().includes(filtroSocio.toLowerCase()))
    : reservas;

  // Obtener lista única de socios para el filtro
  const sociosUnicos = [...new Set(reservas.map((r) => r.socio))];

  if (!reservas || reservas.length === 0) return <p>No hay reservas registradas.</p>;

  return (
    <div className="reservas-list-container">
      <h3>Lista de Reservas</h3>

      {/* Filtro */}
      <div className="filtro-socio">
        <label htmlFor="filtro">Filtrar por Socio:</label>
        <select
          id="filtro"
          value={filtroSocio}
          onChange={(e) => setFiltroSocio(e.target.value)}
        >
          <option value="">Todos</option>
          {sociosUnicos.map((socio) => (
            <option key={socio} value={socio}>
              {socio}
            </option>
          ))}
        </select>
      </div>

      <ul className="reservas-list">
        {reservasFiltradas.map((reserva) => (
          <ReservaItem
            key={reserva.id}
            reserva={reserva}
            onDelete={onDeleteReserva}
            onEdit={onEditReserva}
          />
        ))}
      </ul>
    </div>
  );
}

export default ReservasList;
