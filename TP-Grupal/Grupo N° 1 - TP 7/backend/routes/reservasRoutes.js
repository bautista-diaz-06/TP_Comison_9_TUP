
import express from 'express';
import { fetchReservas, addReserva, editReserva, removeReserva } from '../controllers/reservaController.js';

const router = express.Router();

router.get('/', fetchReservas);
router.post('/', addReserva);
router.put('/:id', editReserva);
router.delete('/:id', removeReserva);

export default router;
