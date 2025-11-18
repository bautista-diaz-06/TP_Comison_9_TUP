
import express from 'express';
import cors from 'cors';
import socioRoutes from './routes/sociosRoutes.js';
import reservaRoutes from './routes/reservasRoutes.js';
import userRoutes from './routes/authRoutes.js';
import actividadRoutes from './routes/actividadesRoutes.js';

const app = express();
app.use(cors());
app.use(express.json());

app.use('/', socioRoutes);
app.use('/', reservaRoutes);
app.use('/', userRoutes);
app.use('/', actividadRoutes);

app.listen(3001, () => console.log('Servidor corriendo en http://localhost:3001'));
