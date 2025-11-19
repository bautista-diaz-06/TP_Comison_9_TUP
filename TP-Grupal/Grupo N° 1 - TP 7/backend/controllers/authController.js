// backend/controllers/authController.js
import pool from "../config/db.js";

export const loginUser = async (req, res) => {
  // Para ver qué llega desde el front
  console.log("🟦 LOGIN REQUEST:", {
    body: req.body,
    query: req.query,
  });

  // Preferimos body (JSON). Si por alguna razón viene por query, también lo tomamos.
  const email = req.body.email || req.query.email;
  const password = req.body.password || req.query.password;

  try {
    const [rows] = await pool.query(
      "SELECT * FROM socios WHERE email = ? AND password = ?",
      [email, password]
    );

    if (rows.length > 0) {
      // Usuario encontrado
      return res.json(rows[0]);
    } else {
      // Usuario o contraseña incorrectos
      return res.status(401).json({ error: "Credenciales inválidas" });
    }
  } catch (error) {
    console.error("ERROR LOGIN:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
};
