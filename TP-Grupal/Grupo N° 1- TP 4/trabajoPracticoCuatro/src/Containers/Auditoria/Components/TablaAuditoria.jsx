import "../../../Styles/TablaAuditoriaStyles.css";

const TablaAuditoria = () => {
    const auditorias = [
        { 
            id: 1, 
            usuario: "Elias Asfoura", 
            accion: "Registro de nuevo alumno", 
            fecha: "12/03/2025", 
            hora: "10:35" 
        },
        { 
            id: 2, 
            usuario: "Lucía Ramírez", 
            accion: "Eliminación de libro", 
            fecha: "18/04/2025", 
            hora: "14:22" 
        },
        { 
            id: 3, 
            usuario: "Carlos Pérez", 
            accion: "Modificación de datos del alumno", 
            fecha: "07/05/2025", 
            hora: "09:10" 
        },
        { 
            id: 4, 
            usuario: "María Gómez", 
            accion: "Inicio de sesión en el sistema", 
            fecha: "25/06/2025", 
            hora: "08:45" 
        },
    ];

    return (
        <div className="tablaContainer">
            <h2>Auditoría</h2>
            <table className="auditoriaTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Usuario</th>
                        <th>Acción</th>
                        <th>Fecha</th>
                        <th>Hora</th>
                    </tr>
                </thead>
                <tbody>
                    {auditorias.map((registro) => (
                        <tr key={registro.id}>
                            <td>{registro.id}</td>
                            <td>{registro.usuario}</td>
                            <td>{registro.accion}</td>
                            <td>{registro.fecha}</td>
                            <td>{registro.hora}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaAuditoria;
