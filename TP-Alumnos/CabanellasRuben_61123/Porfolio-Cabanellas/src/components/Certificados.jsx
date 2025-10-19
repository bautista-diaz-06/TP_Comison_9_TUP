import React from 'react'

function Certificados() {
  const certificados = [
    { id: 1, titulo: 'React Avanzado', entidad: 'Platzi', año: '2023' }
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
