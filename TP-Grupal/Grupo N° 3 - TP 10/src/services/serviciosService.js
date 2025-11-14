// Simulación de servicios
let servicios = [
  { id: 1, nombre: "Corte", duracion_minutos: 60, precio: 70000 },
  { id: 2, nombre: "Nutricion", duracion_minutos: 45, precio: 9000 },
  { id: 3, nombre: "Mechitas", duracion_minutos: 240, precio: 30000 },
];

const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const fetchServicios = async () => {
  await delay(200);
  return servicios;
};

export const agregarServicio = async (servicio) => {
  await delay(200);
  const nuevo = { ...servicio, id: Date.now() };
  servicios.push(nuevo);
  return nuevo;
};

export const actualizarServicio = async (id, datos) => {
  await delay(200);
  servicios = servicios.map(s => s.id === id ? { ...s, ...datos } : s);
  return servicios.find(s => s.id === id);
};

export const eliminarServicio = async (id) => {
  await delay(200);
  servicios = servicios.filter(s => s.id !== id);
  return true;
};
