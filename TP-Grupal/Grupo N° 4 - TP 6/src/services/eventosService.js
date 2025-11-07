const BASE_URL = "http://localhost:3001/eventos";

// Obtener todos los eventos
export const getEventos = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Error al obtener eventos");
  return await res.json();
};

// Crear un evento
export const createEvento = async (evento) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(evento),
  });
  if (!res.ok) throw new Error("Error al crear evento");
  return await res.json();
};

// Actualizar evento
export const updateEvento = async (id, evento) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(evento),
  });
  if (!res.ok) throw new Error("Error al actualizar evento");
  return await res.json();
};

// Eliminar evento
export const deleteEvento = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Error al eliminar evento");
  return true;
};
