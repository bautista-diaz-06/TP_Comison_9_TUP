
import express from 'express';
import { fetchSocios, addSocio, editSocio, removeSocio } from '../controllers/socioController.js';

const router = express.Router();

router.get('/', fetchSocios);
router.post('/', addSocio);
router.put('/:id', editSocio);
router.delete('/:id', removeSocio);

export default router;
