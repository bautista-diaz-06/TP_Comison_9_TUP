
import express from 'express';
import cors from 'cors';
import socioRoutes from './routes/sociosRoutes.js';
import reservaRoutes from './routes/reservasRoutes.js';
import userRoutes from './routes/authRoutes.js';
import actividadRoutes from './routes/actividadesRoutes.js';

const app = express();

app.use((req, res, next) => {
  console.log("🔥 Petición recibida:", req.method, req.url);
  next();
});

app.use(cors({
  origin: 'http://localhost:5173', // ⚡ frontend
  methods: ['GET','POST','PUT','DELETE'],
}));

app.use(express.json());

app.use('/api/socios', socioRoutes);
app.use('/api/reservas', reservaRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/actividades', actividadRoutes);
console.log("Rutas montadas:");
console.log("AUTH:", "/api/auth");


app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));
