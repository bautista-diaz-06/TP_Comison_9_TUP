// Simulación de turnos
let turnos = [];

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const fetchTurnos = async () => {
  await delay(200);
  return turnos;
};

export const agregarTurno = async (turno) => {
  await delay(200);
  const nuevo = { ...turno, id: Date.now() };
  turnos.push(nuevo);
  return nuevo;
};

export const actualizarTurno = async (id, datos) => {
  await delay(200);
  turnos = turnos.map(t => t.id === id ? { ...t, ...datos } : t);
  return turnos.find(t => t.id === id);
};

export const eliminarTurno = async (id) => {
  await delay(200);
  turnos = turnos.filter(t => t.id !== id);
  return true;
};
