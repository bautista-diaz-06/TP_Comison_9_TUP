
import express from 'express';
import { fetchActividades, addActividad, editActividad, removeActividad } from '../controllers/actividadesController.js';

const router = express.Router();

router.get('/', fetchActividades);
router.post('/', addActividad);
router.put('/:id', editActividad);
router.delete('/:id', removeActividad);

export default router;
