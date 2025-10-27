import React from "react";
import Button from "./common/Button";
import "../styles/ActividadItem.css";

function ActividadItem({ actividad, onEdit, onDelete }) {
  return (
    <li className="actividad-item">
      <span>{actividad.nombre}: {actividad.descripcion}</span>
      <div>
        <Button onClick={() => onEdit(actividad)} className="btn-secondary">Editar</Button>
        <Button onClick={() => onDelete(actividad.id)} className="btn-danger">Eliminar</Button>
      </div>
    </li>
  );
}

export default ActividadItem;
