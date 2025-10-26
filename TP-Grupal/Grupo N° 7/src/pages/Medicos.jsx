import { useState } from 'react';
import Tarjeta from '../components/Tarjeta';
import InputPersonalizado from '../components/InputPersonalizado';
import BotonPersonalizado from '../components/BotonPersonalizado';

export default function Medicos() {
  const [nombre, setNombre] = useState('');
  const [especialidad, setEspecialidad] = useState('');

  // Datos simulados
  const medicos = [
    { nombre: 'Dr. Martínez', especialidad: 'Cardiología' },
    { nombre: 'Dra. López', especialidad: 'Pediatría' },
  ];

  const handleAgregar = (e) => {
    e.preventDefault();
    alert(`Médico agregado: ${nombre} (${especialidad})`);
    setNombre('');
    setEspecialidad('');
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Médicos</h2>

      {/* Formulario visual */}
      <form onSubmit={handleAgregar} className="mb-6 bg-white p-4 rounded shadow w-96">
        <InputPersonalizado label="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <InputPersonalizado label="Especialidad" value={especialidad} onChange={(e) => setEspecialidad(e.target.value)} />
        <BotonPersonalizado>Agregar Médico</BotonPersonalizado>
      </form>

      {/* Tarjetas de médicos */}
      <div>
        {medicos.map((m, i) => (
          <Tarjeta key={i} titulo={m.nombre} contenido={`Especialidad: ${m.especialidad}`} />
        ))}
      </div>
    </div>
  );
}
