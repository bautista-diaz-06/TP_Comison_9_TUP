
import express from 'express';
import { fetchActividades, addActividad, editActividad, removeActividad } from '../controllers/actividadesController.js';

const router = express.Router();

router.get('/actividades', fetchActividades);
router.post('/actividades', addActividad);
router.put('/actividades/:id', editActividad);
router.delete('/actividades/:id', removeActividad);

export default router;
