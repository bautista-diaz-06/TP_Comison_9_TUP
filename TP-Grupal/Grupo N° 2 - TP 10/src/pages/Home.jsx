
// import React, { useState } from "react";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import Clientes from "../components/Clientes";
// import Servicios from "../components/Servicios";
// import FormTurno from "../components/FormTurno";
// import TurnosHoy from "../components/TurnosHoy";
// import HistorialCliente from "../components/HistorialCliente";

// import { useFetch } from "../hooks/useFetch";
// import { fetchClientes } from "../services/clientesService";
// import { fetchServicios } from "../services/serviciosService";
// import { fetchTurnos, agregarTurno as agregarTurnoService } from "../services/turnosService";

// import "../styles/Home.css";

// export default function Home() {
//   // Estado para seleccionar cliente y recargar turnos
//   const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

//   // Traemos datos simulados con useFetch
//   const { data: clientes, reload: reloadClientes } = useFetch(fetchClientes);
//   const { data: servicios, reload: reloadServicios } = useFetch(fetchServicios);
//   const { data: turnos, reload: reloadTurnos } = useFetch(fetchTurnos);

//   // Función para agregar turnos
//   const agregarTurno = async (nuevoTurno) => {
//     await agregarTurnoService(nuevoTurno);
//     reloadTurnos();
//   };

//   return (
//     <div className="home-container">
//       <Navbar />

//       <section id="clientes" className="section-container">
//         <Clientes 
//           clientes={clientes} 
//           setClientes={reloadClientes} 
//           onSelect={setClienteSeleccionado} 
//         />
//       </section>

//       <section id="servicios" className="section-container">
//         <Servicios 
//           servicios={servicios} 
//           setServicios={reloadServicios} 
//         />
//       </section>

//       <section id="turnos" className="section-container">
//         <FormTurno
//           clientes={clientes}
//           servicios={servicios}
//           agregarTurno={agregarTurno}
//           clienteSeleccionado={clienteSeleccionado}
//           setClienteSeleccionado={setClienteSeleccionado}
//         />
//       </section>

//       <section id="turnos-hoy" className="section-container">
//         <TurnosHoy turnos={turnos} />
//       </section>

//       <section id="historial" className="section-container">
//         <HistorialCliente
//           turnos={turnos}
//           clienteSeleccionado={clienteSeleccionado}
//         />
//       </section>

//       <Footer />
//     </div>
//   );
// }




import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Clientes from "../components/Clientes";
import Servicios from "../components/Servicios";
import FormTurno from "../components/FormTurno";
import TurnosHoy from "../components/TurnosHoy";
import HistorialCliente from "../components/HistorialCliente";
import "../styles/Home.css";

export default function Home() {
  // CLIENTES
  const [clientes, setClientes] = useState(() => {
    const saved = localStorage.getItem("clientes");
    return saved ? JSON.parse(saved) : [];
  });

  // SERVICIOS
  const [servicios, setServicios] = useState(() => {
    const saved = localStorage.getItem("servicios");
    return saved
      ? JSON.parse(saved)
      : [
          { id: 1, nombre: "Corte", duracion_minutos: 20 },
          { id: 2, nombre: "Nutricion", duracion_minutos: 45 },
          { id: 3, nombre: "Mechitas", duracion_minutos: 240 },
        ];
  });

  // TURNOS
  const [turnos, setTurnos] = useState(() => {
    const saved = localStorage.getItem("turnos");
    return saved ? JSON.parse(saved) : [];
  });

  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);

  // Funciones para agregar datos y guardar en localStorage
  const agregarCliente = (nuevoCliente) => {
    const updated = [...clientes, nuevoCliente];
    setClientes(updated);
    localStorage.setItem("clientes", JSON.stringify(updated));
  };

  const agregarServicio = (nuevoServicio) => {
    const updated = [...servicios, nuevoServicio];
    setServicios(updated);
    localStorage.setItem("servicios", JSON.stringify(updated));
  };

  const agregarTurno = (nuevoTurno) => {
    const updated = [...turnos, { ...nuevoTurno, id: Date.now() }];
    setTurnos(updated);
    localStorage.setItem("turnos", JSON.stringify(updated));
  };

  return (
    <div className="home-container">
      <Navbar />

      <section id="clientes" className="section-container">
        <Clientes
          clientes={clientes}
          setClientes={setClientes}
          agregarCliente={agregarCliente} // pasamos la función
          onSelect={setClienteSeleccionado}
        />
      </section>

      <section id="servicios" className="section-container">
        <Servicios servicios={servicios} setServicios={setServicios} agregarServicio={agregarServicio} />
      </section>

      <section id="turnos" className="section-container">
        <FormTurno
          clientes={clientes}
          servicios={servicios}
          agregarTurno={agregarTurno}
          clienteSeleccionado={clienteSeleccionado}
          setClienteSeleccionado={setClienteSeleccionado}
        />
      </section>

      <section id="turnos-hoy" className="section-container">
        <TurnosHoy turnos={turnos} />
      </section>

      <section id="historial" className="section-container">
        <HistorialCliente turnos={turnos} clienteSeleccionado={clienteSeleccionado} />
      </section>

      <Footer />
    </div>
  );
}
