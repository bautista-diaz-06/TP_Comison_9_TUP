const BASE_URL = "http://localhost:3001/artistas";

export const getArtistas = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Error al obtener artistas");
  return await res.json();
};

export const createArtista = async (artista) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(artista),
  });
  if (!res.ok) throw new Error("Error al crear artista");
  return await res.json();
};

export const updateArtista = async (id, artista) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(artista),
  });
  if (!res.ok) throw new Error("Error al actualizar artista");
  return await res.json();
};

export const deleteArtista = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, { method: "DELETE" });
  if (!res.ok) throw new Error("Error al eliminar artista");
  return true;
};

