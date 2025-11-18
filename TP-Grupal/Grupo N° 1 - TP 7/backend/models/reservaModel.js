
import pool from '../config/db.js';

export const getAllReservas = async () => {
  const [rows] = await pool.query('SELECT * FROM reservas');
  return rows;
};

export const createReserva = async (data) => {
  const { socio_id, clase_id, estado } = data;
  const [result] = await pool.query(
    'INSERT INTO reservas (socio_id, clase_id, estado) VALUES (?, ?, ?)',
    [socio_id, clase_id, estado || 'pendiente']
  );
  return result.insertId;
};

export const updateReserva = async (id, data) => {
  const { socio_id, clase_id, estado } = data;
  await pool.query(
    'UPDATE reservas SET socio_id=?, clase_id=?, estado=? WHERE id=?',
    [socio_id, clase_id, estado, id]
  );
};

export const deleteReserva = async (id) => {
  await pool.query('DELETE FROM reservas WHERE id=?', [id]);
};
