import React from "react";
import Button from "./common/Button";
import "../styles/SocioItem.css";

function SocioItem({ socio, onDelete, onEdit }) {
  return (
    <li className="socio-item">
      <span>{socio.nombre} {socio.apellido} ({socio.email}) - Rol: <strong>{socio.rol}</strong></span>
      <div>
        <Button onClick={() => onEdit(socio)} className="btn-secondary">Editar</Button>
        <Button onClick={() => onDelete(socio.id)} className="btn-danger">Eliminar</Button>
      </div>
    </li>
  );
}

export default SocioItem;
