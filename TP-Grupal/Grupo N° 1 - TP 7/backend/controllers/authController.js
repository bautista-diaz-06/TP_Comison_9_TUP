
import { findUserByEmailAndPassword } from '../models/authModel.js';

//export const loginUser = async (req, res) => {
// try {
// const { email, password } = req.query; // porque el front lo envía por query
//    const users = await findUserByEmailAndPassword(email, password);
//
//    if (Array.isArray(users) && users.length > 0) {
//      res.json(users[0]); // devuelve el primer usuario
//    } else {
//      res.status(401).json({ error: 'Credenciales inválidas' });
//    }
//  } catch (error) {
//    res.status(500).json({ error: error.message });
//  }
//};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    // Aquí validas contra la base de datos
    const [rows] = await pool.query('SELECT * FROM usuarios WHERE email=? AND password=?', [email, password]);
    if (rows.length > 0) {
      res.json(rows[0]); // Usuario encontrado
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Error en el servidor' });
  }
};
