// backend/controllers/actividadesController.js
import {
  getAllActividades,
  createActividad,
  updateActividad,
  deleteActividad,
} from "../models/actividadModel.js";

// GET /api/actividades
export const fetchActividades = async (req, res) => {
  try {
    const actividades = await getAllActividades();
    res.json(actividades);
  } catch (error) {
    console.error("Error al obtener actividades:", error);
    res.status(500).json({ error: "Error al obtener actividades" });
  }
};

// POST /api/actividades
export const addActividad = async (req, res) => {
  try {
    const actividad = await createActividad(req.body);
    res.status(201).json(actividad); // devolvemos la actividad creada
  } catch (error) {
    console.error("Error al crear actividad:", error);
    res.status(500).json({ error: "Error al crear actividad" });
  }
};

// PUT /api/actividades/:id
export const editActividad = async (req, res) => {
  try {
    const id = req.params.id;
    const actividad = await updateActividad(id, req.body);
    res.json(actividad); // devolvemos la actividad actualizada
  } catch (error) {
    console.error("Error al actualizar actividad:", error);
    res.status(500).json({ error: "Error al actualizar actividad" });
  }
};

// DELETE /api/actividades/:id
export const removeActividad = async (req, res) => {
  try {
    const id = req.params.id;
    await deleteActividad(id);
    res.json({ message: "Actividad eliminada" });
  } catch (error) {
    console.error("Error al eliminar actividad:", error);
    res.status(500).json({ error: "Error al eliminar actividad" });
  }
};
