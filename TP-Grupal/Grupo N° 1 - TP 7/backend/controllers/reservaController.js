// backend/controllers/reservaController.js
import {
  getAllReservas,
  createReserva,
  updateReserva,
  deleteReserva,
} from "../models/reservaModel.js";

export const fetchReservas = async (req, res) => {
  try {
    const reservas = await getAllReservas();
    res.json(reservas);
  } catch (error) {
    console.error("Error al obtener reservas:", error);
    res.status(500).json({ error: error.message });
  }
};

export const addReserva = async (req, res) => {
  try {
    const reserva = await createReserva(req.body);
    res.status(201).json(reserva); // devolvemos la reserva creada
  } catch (error) {
    console.error("Error al crear reserva:", error);
    res.status(500).json({ error: error.message });
  }
};

export const editReserva = async (req, res) => {
  try {
    const id = req.params.id;
    const reserva = await updateReserva(id, req.body);
    res.json(reserva); // devolvemos la reserva actualizada
  } catch (error) {
    console.error("Error al actualizar reserva:", error);
    res.status(500).json({ error: error.message });
  }
};

export const removeReserva = async (req, res) => {
  try {
    await deleteReserva(req.params.id);
    res.json({ message: "Reserva eliminada" });
  } catch (error) {
    console.error("Error al eliminar reserva:", error);
    res.status(500).json({ error: error.message });
  }
};
