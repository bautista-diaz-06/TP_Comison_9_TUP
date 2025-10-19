import React from 'react'

function Proyectos() {
  const proyectos = [
    { id: 1, nombre: 'Sistema de Farmacia', descripcion: 'Carrito de compras y gestión de stock', link: '#' },
    { id: 2, nombre: 'Portfolio Personal', descripcion: 'Portfolio en React con Bootstrap', link: '#' }
  ]

  return (
    <section id="proyectos" className="card p-3 mb-4">
      <h3>Proyectos Realizados</h3>
      {proyectos.map(p => (
        <div key={p.id} className="border-start border-primary ps-3 mb-3">
          <h5>{p.nombre}</h5>
          <p>{p.descripcion}</p>
          <a href={p.link} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Ver proyecto</a>
        </div>
      ))}
    </section>
  )
}

export default Proyectos
