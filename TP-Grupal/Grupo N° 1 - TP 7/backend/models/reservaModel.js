// backend/models/reservaModel.js
import pool from "../config/db.js";

// Traer todas las reservas con nombres de socio y actividad
export const getAllReservas = async () => {
  const [rows] = await pool.query(`
    SELECT 
      r.id,
      CONCAT(s.nombre, ' ', s.apellido) AS socio,
      a.nombre AS actividad,
      DATE_FORMAT(r.fecha, '%Y-%m-%d') AS fecha
    FROM reservas r
    JOIN socios s ON r.id_socio = s.id
    JOIN actividades a ON r.id_actividad = a.id
    ORDER BY r.fecha DESC
  `);
  return rows;
};

// Buscar id de socio a partir del nombre completo que manda el frontend
const findSocioIdByNombreCompleto = async (nombreCompleto) => {
  const [rows] = await pool.query(
    "SELECT id FROM socios WHERE CONCAT(nombre, ' ', apellido) = ?",
    [nombreCompleto]
  );
  if (rows.length === 0) {
    throw new Error("Socio no encontrado");
  }
  return rows[0].id;
};

// Buscar id de actividad a partir del nombre
const findActividadIdByNombre = async (nombre) => {
  const [rows] = await pool.query(
    "SELECT id FROM actividades WHERE nombre = ?",
    [nombre]
  );
  if (rows.length === 0) {
    throw new Error("Actividad no encontrada");
  }
  return rows[0].id;
};

// Crear reserva: el frontend manda { socio, actividad, fecha }
export const createReserva = async (data) => {
  const { socio, actividad, fecha } = data;

  const id_socio = await findSocioIdByNombreCompleto(socio);
  const id_actividad = await findActividadIdByNombre(actividad);

  const [result] = await pool.query(
    "INSERT INTO reservas (id_socio, id_actividad, fecha) VALUES (?, ?, ?)",
    [id_socio, id_actividad, fecha]
  );

  // Devolvemos la reserva lista para el frontend
  return {
    id: result.insertId,
    socio,
    actividad,
    fecha,
  };
};

// Actualizar reserva
export const updateReserva = async (id, data) => {
  const { socio, actividad, fecha } = data;

  const id_socio = await findSocioIdByNombreCompleto(socio);
  const id_actividad = await findActividadIdByNombre(actividad);

  await pool.query(
    "UPDATE reservas SET id_socio = ?, id_actividad = ?, fecha = ? WHERE id = ?",
    [id_socio, id_actividad, fecha, id]
  );

  return {
    id,
    socio,
    actividad,
    fecha,
  };
};

// Eliminar reserva
export const deleteReserva = async (id) => {
  await pool.query("DELETE FROM reservas WHERE id = ?", [id]);
};
