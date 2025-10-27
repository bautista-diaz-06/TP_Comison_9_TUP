import Header from "../components/Header"; 
import DashboardCard from "./DashboardCard";

const DashboardPrincipal = () => {

    //estos datos del dashboard son simulados y estaticos
  const datos = [
    { title: "Usuarios", value: 120, color: "primary" },
    { title: "Ventas", value: 350, color: "success" },
    { title: "Ingresos", value: "$3.250.000", color: "warning" },
    { title: "Eventos", value: 15, color: "danger" },
  ];

  return (
    <div>
      <Header />
      <div className="dashboard-container">
        {datos.map((dato, index) => (
          <DashboardCard
            key={index}
            title={dato.title}
            value={dato.value}
            color={dato.color}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardPrincipal;
