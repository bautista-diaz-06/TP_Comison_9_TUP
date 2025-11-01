const BASE_URL = "http://localhost:3001/asistentes";

export const getAsistentes = async () => {
  const res = await fetch(BASE_URL);
  return await res.json();
};

export const createAsistente = async (asistente) => {
  const res = await fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(asistente),
  });
  if (!res.ok) throw new Error("Error al crear asistente");
  return await res.json();
};
