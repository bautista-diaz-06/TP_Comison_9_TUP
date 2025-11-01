import React, { useEffect, useState } from "react";

export default function Analytics() {
  const [cargando, setCargando] = useState(true);
  const [estadisticas, setEstadisticas] = useState({
    donantes: 0,
    fondos: 0,
    proyectos: 0,
    voluntarios: 0,
    donacionesMensuales: [],
  });

  useEffect(() => {
    const id = setTimeout(() => {
      const datos = {
        donantes: 125,
        fondos: 38250,
        proyectos: 12,
        voluntarios: 87,
        donacionesMensuales: [
          3000, 4200, 3800, 4500, 5200, 4800, 5100, 6000, 5500, 4900, 5300,
          6200,
        ],
      };
      setEstadisticas(datos);
      setCargando(false);
    }, 700);

    return () => clearTimeout(id);
  }, []);

  if (cargando)
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );

  const { donantes, fondos, proyectos, voluntarios, donacionesMensuales } = estadisticas;

  return (
    <section className="py-4">
      <div className="row g-3">
        <div className="col-6 col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h6 className="text-muted">Donantes</h6>
              <h3>{donantes.toLocaleString()}</h3>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h6 className="text-muted">Fondos recaudados</h6>
              <h3>${fondos.toLocaleString()}</h3>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h6 className="text-muted">Proyectos activos</h6>
              <h3>{proyectos}</h3>
            </div>
          </div>
        </div>

        <div className="col-6 col-md-3">
          <div className="card shadow-sm">
            <div className="card-body text-center">
              <h6 className="text-muted">Voluntarios</h6>
              <h3>{voluntarios}</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="card shadow-sm mt-4">
        <div className="card-body">
          <h5 className="card-title">Donaciones mensuales</h5>
          <div
            className="d-flex align-items-end gap-2 mt-3"
            style={{ height: 120 }}
          >
              {donacionesMensuales.map((v, i) => {
                const max = Math.max(...donacionesMensuales);
                const pct = Math.round((v / max) * 100);
                return (
                  <div key={i} className="text-center d-flex flex-column" style={{ flex: 1, height: '100%' }}>
                    <div style={{ flex: 1, display: 'flex', alignItems: 'flex-end', justifyContent: 'center' }}>
                      <div style={{ height: `${pct}%`, width: '60%', background: '#0d6efd', borderRadius: 6, transition: 'height 400ms' }} title={`$${v}`} />
                    </div>
                    <small className="d-block mt-2 text-muted">M{i + 1}</small>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}
