
import pool from '../config/db.js';

export const findUserByEmailAndPassword = async (email, password) => {
  const [rows] = await pool.query(
    'SELECT * FROM socios WHERE email=? AND password=?',
    [email, password]
  );
  return rows;
};
