import { useState } from 'react';
import Tarjeta from '../components/Tarjeta';
import '../Styles/Medicos.css';

export default function Medicos() {
  const [nombre, setNombre] = useState('');
  const [especialidad, setEspecialidad] = useState('');

  const medicos = [
    { nombre: 'Dr. Martínez', especialidad: 'Cardiología' },
    { nombre: 'Dra. López', especialidad: 'Pediatría' },
  ];

  const handleAgregar = (e) => {
    e.preventDefault();
    alert(`Médico agregado: ${nombre} (${especialidad})`);
    setNombre('');
    setEspecialidad('');
  };

  return (
    <div className="medicos-container">
      <h2>Médicos</h2>

      <form onSubmit={handleAgregar} className="medicos-form">
        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label>Especialidad</label>
        <input
          type="text"
          value={especialidad}
          onChange={(e) => setEspecialidad(e.target.value)}
        />

        <button type="submit">Agregar Médico</button>
      </form>

      <div className="medicos-tarjetas">
        {medicos.map((m, i) => (
          <Tarjeta
            key={i}
            titulo={m.nombre}
            contenido={`Especialidad: ${m.especialidad}`}
          />
        ))}
      </div>
    </div>
  );
}
