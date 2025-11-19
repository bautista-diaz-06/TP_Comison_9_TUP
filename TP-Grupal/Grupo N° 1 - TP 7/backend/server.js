import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import socioRoutes from "./routes/sociosRoutes.js";
import reservaRoutes from "./routes/reservasRoutes.js";
import userRoutes from "./routes/authRoutes.js";
import actividadRoutes from "./routes/actividadesRoutes.js";
import { ensureDefaultAdmin } from "./utils/ensureAdmin.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  console.log("🔥 Petición recibida:", req.method, req.url);
  next();
});

app.use(
  cors({
    origin: "http://localhost:5173", // ⚡ frontend
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

app.use(express.json());

app.use("/api/socios", socioRoutes);
app.use("/api/reservas", reservaRoutes);
app.use("/api/auth", userRoutes);
app.use("/api/actividades", actividadRoutes);
console.log("Rutas montadas:");
console.log("AUTH:", "/api/auth");

app.get("/", (req, res) => {
  res.json({
    message: "API Grupo 1 TP7 funcionando",
    endpoints: {
      socios: "/api/socios",
      reservas: "/api/reservas",
      auth: "/api/auth",
      actividades: "/api/actividades",
    },
  });
});

const startServer = async () => {
  try {
    await ensureDefaultAdmin();
    app.listen(PORT, () =>
      console.log(`Servidor corriendo en http://localhost:${PORT}`)
    );
  } catch (error) {
    console.error("No se pudo iniciar el servidor:", error.message);
    process.exit(1);
  }
};

startServer();
