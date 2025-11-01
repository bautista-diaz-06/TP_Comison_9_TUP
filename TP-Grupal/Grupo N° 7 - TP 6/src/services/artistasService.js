const BASE_URL = "http://localhost:3001/artistas";

export const getArtistas = async () => {
  const res = await fetch(BASE_URL);
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
