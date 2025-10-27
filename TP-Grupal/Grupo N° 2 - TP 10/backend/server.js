import express from "express";
import cors from "cors";
import { pool } from "./db.js";

const app = express();
app.use(cors());
app.use(express.json());





// ---------- CLIENTES ----------
app.route("/clientes")
  .get(async (_, res) => {
    const [r] = await pool.query("SELECT * FROM clientes ORDER BY creado_en DESC");
    res.json(r);
  })
  .post(async (req, res) => {
    const { nombre, correo, telefono } = req.body;
    const [r] = await pool.query("INSERT INTO clientes (nombre, correo, telefono) VALUES (?,?,?)", [nombre, correo, telefono]);
    const [[nuevo]] = await pool.query("SELECT * FROM clientes WHERE id=?", [r.insertId]);
    res.status(201).json(nuevo);
  });

app.delete("/clientes/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM turnos WHERE cliente_id=?", [id]);
  const [r] = await pool.query("DELETE FROM clientes WHERE id=?", [id]);
  res.json(r.affectedRows ? { ok: true } : { error: "Cliente no encontrado" });
});





// ------- SERVICIOS ----------
app.route("/servicios")
  .get(async (_, res) => {
    const [r] = await pool.query("SELECT * FROM servicios ORDER BY precio ASC");
    res.json(r);
  })
  .post(async (req, res) => {
    const { nombre, precio, duracion_minutos = 60 } = req.body;
    const [r] = await pool.query("INSERT INTO servicios (nombre, precio, duracion_minutos) VALUES (?,?,?)", [nombre, precio, duracion_minutos]);
    const [[nuevo]] = await pool.query("SELECT * FROM servicios WHERE id=?", [r.insertId]);
    res.status(201).json(nuevo);
  });

app.delete("/servicios/:id", async (req, res) => {
  const { id } = req.params;
  await pool.query("DELETE FROM turnos WHERE servicio_id=?", [id]);
  const [r] = await pool.query("DELETE FROM servicios WHERE id=?", [id]);
  res.json(r.affectedRows ? { ok: true } : { error: "Servicio no encontrado" });
});






// ----- TURNOS -----
app.get("/turnos", async (req, res) => {
  const { fecha, cliente_id } = req.query;
  const cond = fecha ? "WHERE DATE(t.inicio)=?" :
               cliente_id ? "WHERE t.cliente_id=?" : "";
  const val = fecha ? [fecha] : cliente_id ? [cliente_id] : [];
  const q = `
    SELECT t.*, c.nombre AS cliente_nombre, s.nombre AS servicio_nombre
    FROM turnos t
    JOIN clientes c ON c.id=t.cliente_id
    JOIN servicios s ON s.id=t.servicio_id
    ${cond}
    ORDER BY t.inicio ${fecha ? "ASC" : "DESC"}`;
  const [r] = await pool.query(q, val);
  res.json(r);
});

app.post("/turnos", async (req, res) => {
  const { cliente_id, servicio_id, inicio } = req.body;
  const [[s]] = await pool.query("SELECT duracion_minutos FROM servicios WHERE id=?", [servicio_id]);
  if (!s) return res.status(400).json({ error: "Servicio no encontrado" });
  const [v] = await pool.query(
    "SELECT COUNT(*) AS n FROM turnos WHERE estado='programado' AND inicio<DATE_ADD(?,INTERVAL ? MINUTE) AND fin>?",
    [inicio, s.duracion_minutos, inicio]
  );
  if (v[0].n) return res.status(409).json({ error: "Horario ocupado" });
  const [r] = await pool.query(
    "INSERT INTO turnos (cliente_id,servicio_id,inicio,fin,estado) VALUES (?,?,?,DATE_ADD(?,INTERVAL ? MINUTE),'programado')",
    [cliente_id, servicio_id, inicio, inicio, s.duracion_minutos]
  );
  const [[nuevo]] = await pool.query(
    `SELECT t.*,c.nombre AS cliente_nombre,s.nombre AS servicio_nombre
     FROM turnos t JOIN clientes c ON c.id=t.cliente_id JOIN servicios s ON s.id=t.servicio_id
     WHERE t.id=?`, [r.insertId]
  );
  res.status(201).json(nuevo);
});

app.patch("/turnos/:id/estado", async (req, res) => {
  const { estado } = req.body;
  const { id } = req.params;
  await pool.query("UPDATE turnos SET estado=? WHERE id=?", [estado, id]);
  const [[t]] = await pool.query("SELECT * FROM turnos WHERE id=?", [id]);
  res.json(t);
});

app.delete("/turnos/:id", async (req, res) => {
  const [r] = await pool.query("DELETE FROM turnos WHERE id=?", [req.params.id]);
  res.json(r.affectedRows ? { ok: true } : { error: "Turno no encontrado" });
});







// ---------- DISPONIBILIDAD ----------
app.get("/disponibilidad", async (req, res) => {
  const inicio = req.query.inicio || req.query.start_time;
  const fin = req.query.fin || req.query.end_time;
  if (!inicio || !fin) return res.status(400).json({ error: "Faltan parámetros" });
  const [[r]] = await pool.query(
    "SELECT COUNT(*) AS n FROM turnos WHERE estado='programado' AND inicio<? AND fin>?",
    [fin, inicio]
  );
  res.json({ disponible: r.n === 0 });
});





// ---------- LISTEN DEL SERVER ----------
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log("Servidor API en puerto " + PORT));
