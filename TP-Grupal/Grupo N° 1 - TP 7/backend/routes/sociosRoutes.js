
import express from 'express';
import { fetchSocios, addSocio, editSocio, removeSocio } from '../controllers/socioController.js';

const router = express.Router();

router.get('/socios', fetchSocios);
router.post('/socios', addSocio);
router.put('/socios/:id', editSocio);
router.delete('/socios/:id', removeSocio);

export default router;
