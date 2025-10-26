import { useEffect, useState } from "react";
import Clientes from "./components/Clientes.jsx";
import Servicios from "./components/Servicios.jsx";
import FormTurno from "./components/FormTurno.jsx";
import TurnosHoy from "./components/TurnosHoy.jsx";
import HistorialCliente from "./components/HistorialCliente.jsx";

export default function App() {
  const [clienteSeleccionado, setClienteSeleccionado] = useState(null);
  const [recargar, setRecargar] = useState(0);
  useEffect(() => {}, [recargar]);
  return (
    <div
      style={{
        maxWidth: 980,
        margin: "20px auto",
        fontFamily: "Inter,system-ui,Arial",
      }}
    >
      <h1>Sistema de Gestión de Turnos</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <Clientes onSelect={setClienteSeleccionado} />
        <Servicios />
      </div>
      <div style={{ marginTop: 20 }}>
        <FormTurno
          clienteSeleccionado={clienteSeleccionado}
          onAgendar={() => setRecargar((x) => x + 1)}
        />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
          marginTop: 20,
        }}
      >
        <TurnosHoy key={"t" + recargar} />
        <HistorialCliente
          cliente={clienteSeleccionado}
          key={clienteSeleccionado ? clienteSeleccionado.id : "none" + recargar}
        />
      </div>
    </div>
  );
}
