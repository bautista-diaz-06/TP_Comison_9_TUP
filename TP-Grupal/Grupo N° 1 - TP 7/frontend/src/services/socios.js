import { get, post, put, del } from './api';

const base = '/socios';
export const fetchSocios = () => get(base);
export const createSocio = async (data) => {
  const res = await post(base, data); // hace el POST al backend
  return res.id; // extrae solo el ID del socio creado
};

export const updateSocio = (id, data) => put(`${base}/${id}`, data);
export const deleteSocio = (id) => del(`${base}/${id}`)
