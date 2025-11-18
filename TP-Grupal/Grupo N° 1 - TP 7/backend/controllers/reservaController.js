
import { getAllReservas, createReserva, updateReserva, deleteReserva } from '../models/reservaModel.js';

export const fetchReservas = async (req, res) => {
  try {
    const reservas = await getAllReservas();
    res.json(reservas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addReserva = async (req, res) => {
  try {
    const id = await createReserva(req.body);
    res.status(201).json({ message: 'Reserva creada', id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editReserva = async (req, res) => {
  try {
    await updateReserva(req.params.id, req.body);
    res.json({ message: 'Reserva actualizada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeReserva = async (req, res) => {
  try {
    await deleteReserva(req.params.id);
    res.json({ message: 'Reserva eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

