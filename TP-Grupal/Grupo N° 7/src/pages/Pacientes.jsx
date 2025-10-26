import { useState } from 'react';
import Tarjeta from '../components/Tarjeta';
import '../Styles/Pacientes.css';

export default function Pacientes() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  const pacientes = [
    { nombre: 'Ana Pérez', email: 'ana@mail.com' },
    { nombre: 'Juan Gómez', email: 'juan@mail.com' },
  ];

  const handleAgregar = (e) => {
    e.preventDefault();
    alert(`Paciente agregado: ${nombre} (${email})`);
    setNombre('');
    setEmail('');
  };

  return (
    <div className="pacientes-container">
      <h2>Pacientes</h2>

      <form onSubmit={handleAgregar} className="pacientes-form">
        <label>Nombre</label>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
        />

        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">Agregar Paciente</button>
      </form>

      <div className="pacientes-tarjetas">
        {pacientes.map((p, i) => (
          <Tarjeta
            key={i}
            titulo={p.nombre}
            contenido={`Email: ${p.email}`}
          />
        ))}
      </div>
    </div>
  );
}
