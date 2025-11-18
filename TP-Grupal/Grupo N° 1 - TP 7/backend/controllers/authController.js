
import { findUserByEmailAndPassword } from '../models/authModel.js';

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.query; // porque el front lo envía por query
    const users = await findUserByEmailAndPassword(email, password);

    if (Array.isArray(users) && users.length > 0) {
      res.json(users[0]); // devuelve el primer usuario
    } else {
      res.status(401).json({ error: 'Credenciales inválidas' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
