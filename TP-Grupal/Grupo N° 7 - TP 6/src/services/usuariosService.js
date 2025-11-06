const BASE_URL = "http://localhost:3001/usuarios";

export const getUsuarios = async () => {
  const res = await fetch(BASE_URL);
  if (!res.ok) throw new Error("Error al obtener usuarios");
  return await res.json();
};
