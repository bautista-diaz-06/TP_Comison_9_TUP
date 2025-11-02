const BASE_URL = "http://localhost:3001/asistentes";

// Obtener todos los asistentes
export const getAsistentes = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Error al obtener asistentes");
  return await res.json();
};

// Crear un nuevo asistente
export const createAsistente = async (asistente) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(asistente),
  });
  if (!res.ok) throw new Error("Error al crear asistente");
  return await res.json();
};

// Eliminar un asistente
export const deleteAsistente = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Error al eliminar asistente");
  return true;
};

// Opcional: actualizar asistente
export const updateAsistente = async (id, asistente) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(asistente),
  });
  if (!res.ok) throw new Error("Error al actualizar asistente");
  return await res.json();
};
