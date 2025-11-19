
import { getAllSocios, createSocio, updateSocio, deleteSocio } from '../models/socioModel.js';

export const fetchSocios = async (req, res) => {
  try {
    const socios = await getAllSocios();
    res.json(socios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addSocio = async (req, res) => {
  console.log("Body recibido en POST /socios:", req.body);  // <--- Ver qué llega
  try {
    const id = await createSocio(req.body);
    res.status(201).json({ message: 'Socio creado', id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const editSocio = async (req, res) => {
  try {
    await updateSocio(req.params.id, req.body);
    res.json({ message: 'Socio actualizado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeSocio = async (req, res) => {
  try {
    await deleteSocio(req.params.id);
    res.json({ message: 'Socio eliminado' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
