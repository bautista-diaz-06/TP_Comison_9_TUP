
import pool from '../config/db.js';

export const getAllActividades = async () => {
  const [rows] = await pool.query('SELECT * FROM actividades');
  return rows;
};

export const createActividad = async (data) => {
  const { nombre, descripcion, duracion } = data;
  const [result] = await pool.query(
    'INSERT INTO actividades (nombre, descripcion, duracion) VALUES (?, ?, ?)',
    [nombre, descripcion, duracion]
  );
  return result.insertId;
};

export const updateActividad = async (id, data) => {
  const { nombre, descripcion, duracion } = data;
  await pool.query(
    'UPDATE actividades SET nombre=?, descripcion=?, duracion=? WHERE id=?',
    [nombre, descripcion, duracion, id]
  );
};
