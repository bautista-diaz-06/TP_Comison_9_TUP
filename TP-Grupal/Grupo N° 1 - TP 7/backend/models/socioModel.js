
import pool from '../config/db.js';

export const getAllSocios = async () => {
  const [rows] = await pool.query('SELECT * FROM socios');
  return rows;
};

export const createSocio = async (data) => {
  const { nombre, apellido, email, password, rol } = data;
  console.log("Datos que llegan al backend:", data);
  const [result] = await pool.query(
     'INSERT INTO socios (nombre, apellido, email, password, rol) VALUES (?, ?, ?, ?, ?)',
    [nombre, apellido, email, password, rol]
  );
  return result.insertId;
};

export const updateSocio = async (id, data) => {
  const { nombre, apellido, email, password, rol } = data;
  await pool.query(
     'UPDATE socios SET nombre=?, apellido=?, email=?, password=?, rol=? WHERE id=?',
    [nombre, apellido, email, password, rol, id]
  );
};

export const deleteSocio = async (id) => {
  await pool.query('DELETE FROM socios WHERE id=?', [id]);
};
