// backend/models/actividadModel.js
import pool from "../config/db.js";

// Obtener todas las actividades
export const getAllActividades = async () => {
  const [rows] = await pool.query("SELECT * FROM actividades");
  return rows;
};

// Crear una actividad nueva
export const createActividad = async (data) => {
  const { nombre, descripcion } = data;

  const [result] = await pool.query(
    "INSERT INTO actividades (nombre, descripcion) VALUES (?, ?)",
    [nombre, descripcion]
  );

  // devolvemos el objeto completo para que el front pueda usarlo
  return {
    id: result.insertId,
    nombre,
    descripcion,
  };
};

// Actualizar una actividad existente
export const updateActividad = async (id, data) => {
  const { nombre, descripcion } = data;

  console.log("Updating actividad with id:", id, "data:", data);
  await pool.query(
    "UPDATE actividades SET nombre = ?, descripcion = ? WHERE id = ?",
    [nombre, descripcion, id]
  );

  // devolvemos la actividad actualizada
  return {
    id,
    nombre,
    descripcion,
  };
};

// Eliminar una actividad
export const deleteActividad = async (id) => {
  await pool.query("DELETE FROM actividades WHERE id = ?", [id]);
};

