import pool from "../config/db.js";

const DEFAULT_ADMIN = {
  nombre: process.env.ADMIN_NAME || "Admin",
  apellido: process.env.ADMIN_LASTNAME || "Principal",
  email: process.env.ADMIN_EMAIL || "admin@gym.com",
  password: process.env.ADMIN_PASSWORD || "admin",
};

export async function ensureDefaultAdmin() {
  const { email, nombre, apellido, password } = DEFAULT_ADMIN;

  try {
    const [existing] = await pool.query(
      "SELECT id, rol FROM socios WHERE email = ? LIMIT 1",
      [email]
    );

    if (existing.length === 0) {
      await pool.query(
        "INSERT INTO socios (nombre, apellido, email, password, rol) VALUES (?, ?, ?, ?, ?)",
        [nombre, apellido, email, password, "admin"]
      );
      console.log(`🔐 Admin por defecto creado (${email})`);
    } else if (existing[0].rol !== "admin") {
      await pool.query("UPDATE socios SET rol = ? WHERE id = ?", [
        "admin",
        existing[0].id,
      ]);
      console.log(`🔐 Admin ${email} actualizado al rol administrador`);
    }
  } catch (error) {
    console.error(
      "No se pudo asegurar el administrador por defecto:",
      error.message
    );
    throw error;
  }
}
