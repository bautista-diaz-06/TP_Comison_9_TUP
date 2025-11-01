const API_URL = "http://localhost:3001/eventos";

export const getEventos = async () => {
  const res = await fetch(API_URL);
  return await res.json();
};

export const createEvento = async (evento) => {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(evento),
  });
  return await res.json();
};
