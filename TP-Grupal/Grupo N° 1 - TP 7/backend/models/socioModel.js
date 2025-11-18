
import pool from '../config/db.js';

export const getAllSocios = async () => {
  const [rows] = await pool.query('SELECT * FROM socios');
  return rows;
};

export const createSocio = async (data) => {
  const { nombre, apellido, email, telefono, fecha_nacimiento } = data;
  const [result] = await pool.query(
    'INSERT INTO socios (nombre, apellido, email, telefono, fecha_nacimiento) VALUES (?, ?, ?, ?, ?)',
    [nombre, apellido, email, telefono, fecha_nacimiento]
  );
  return result.insertId;
};

export const updateSocio = async (id, data) => {
  const { nombre, apellido, email, telefono, fecha_nacimiento } = data;
  await pool.query(
    'UPDATE socios SET nombre=?, apellido=?, email=?, telefono=?, fecha_nacimiento=? WHERE id=?',
    [nombre, apellido, email, telefono, fecha_nacimiento, id]
  );
};

export const deleteSocio = async (id) => {
  await pool.query('DELETE FROM socios WHERE id=?', [id]);
};
