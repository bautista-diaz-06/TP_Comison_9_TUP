
import express from 'express';
import { loginUser } from '../controllers/authController.js';

const router = express.Router();

router.get('/users', loginUser);

export default router;
