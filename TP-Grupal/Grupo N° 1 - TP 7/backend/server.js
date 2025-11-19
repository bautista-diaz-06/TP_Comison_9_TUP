
import express from 'express';
import cors from 'cors';
import socioRoutes from './routes/sociosRoutes.js';
import reservaRoutes from './routes/reservasRoutes.js';
import userRoutes from './routes/authRoutes.js';
import actividadRoutes from './routes/actividadesRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/socios', socioRoutes);
app.use('/api/reservas', reservaRoutes);
app.use('/api/auth', userRoutes);
app.use('/api/actividades', actividadRoutes);




app.listen(3000, () => console.log('Servidor corriendo en http://localhost:3000'));

app.use(cors({
  origin: 'http://localhost:5173', // URL del front
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
}));
