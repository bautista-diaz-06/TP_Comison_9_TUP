import { useState } from 'react';
import Tarjeta from '../components/Tarjeta';
import InputPersonalizado from '../components/InputPersonalizado';
import BotonPersonalizado from '../components/BotonPersonalizado';

export default function Pacientes() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');

  // Datos simulados
  const pacientes = [
    { nombre: 'Ana Pérez', email: 'ana@mail.com' },
    { nombre: 'Juan Gómez', email: 'juan@mail.com' },
  ];

  const handleAgregar = (e) => {
    e.preventDefault();
    alert(`Paciente agregado: ${nombre} (${email})`);
    setNombre('');
    setEmail('');
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Pacientes</h2>

      {/* Formulario visual */}
      <form onSubmit={handleAgregar} className="mb-6 bg-white p-4 rounded shadow w-96">
        <InputPersonalizado label="Nombre" value={nombre} onChange={(e) => setNombre(e.target.value)} />
        <InputPersonalizado label="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <BotonPersonalizado>Agregar Paciente</BotonPersonalizado>
      </form>

      {/* Tarjetas de pacientes */}
      <div>
        {pacientes.map((p, i) => (
          <Tarjeta key={i} titulo={p.nombre} contenido={`Email: ${p.email}`} />
        ))}
      </div>
    </div>
  );
}
