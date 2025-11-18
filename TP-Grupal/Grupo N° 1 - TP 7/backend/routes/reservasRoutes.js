
import express from 'express';
import { fetchReservas, addReserva, editReserva, removeReserva } from '../controllers/reservaController.js';

const router = express.Router();

router.get('/reservas', fetchReservas);
router.post('/reservas', addReserva);
router.put('/reservas/:id', editReserva);
router.delete('/reservas/:id', removeReserva);

export default router;
