import React from 'react'

function Certificados() {
  const certificados = [
    { id: 1, titulo: 'C# Nivel 1 ', entidad: 'Maxi Programna', año: '2023' },
    { id: 2, titulo: 'Curso de Manejo de datos en C# con Linq', entidad: 'Platzi', año: '2023' },
    { id: 3, titulo: 'Curso de Fundamentos de .Net', entidad: 'Platzi', año: '2022'}

  ]

  return (
    <section id="certificados" className="card p-3 mb-4">
      <h3>Certificados</h3>
      <ul>
        {certificados.map(c => (
          <li key={c.id}>{c.titulo} — {c.entidad} ({c.año})</li>
        ))}
      </ul>
    </section>
  )
}

export default Certificados
