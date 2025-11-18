
import { getAllActividades, createActividad, updateActividad, deleteActividad } from '../models/actividadModel.js';

export const fetchActividades = async (req, res) => {
  try {
    const actividades = await getAllActividades();
    res.json(actividades);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addActividad = async (req, res) => {
  try {
    const id = await createActividad(req.body);
    res.status(201).json({ message: 'Actividad creada', id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editActividad = async (req, res) => {
  try {
    await updateActividad(req.params.id, req.body);
    res.json({ message: 'Actividad actualizada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeActividad = async (req, res) => {
  try {
    await deleteActividad(req.params.id);
    res.json({ message: 'Actividad eliminada' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
