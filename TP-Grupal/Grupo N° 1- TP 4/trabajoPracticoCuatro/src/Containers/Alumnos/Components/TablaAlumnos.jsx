import { Link } from "react-router-dom";
import { useAlumnos } from "../../../hooks/useAlumnos";
import "../../../Styles/TablaAlumnosStyles.css"

const TablaAlumnos = () => {
    // const alumnos = [
    //     { id: 1, nombre: "Juan Algarrobo", DNI: "52.678.901", edad: 13,  fecha: "12/03/2025" },
    //     { id: 2, nombre: "Leon Keneddy", DNI: "50.678.901", edad: 15,  fecha: "25/07/2025" },
    //     { id: 3, nombre: "Pedro Linares", DNI: "48.638.921", edad: 18, fecha: "01/01/2025" },
    //     { id: 4, nombre: "Jose Ambrosio", DNI: "49.233.521", edad: 17, fecha: "31/10/2025" },
    // ];

    const { alumnos,
        fetchAlumnosPorId,
        registroAlumno,
        modificarAlumno,
        eliminacionAlumno } = useAlumnos()

    return (
        <div className="tablaContainer">
            <h2>Alumnos</h2>
            <Link to="/registrarAlumno" className="botonRegistrarAlumno">
                Nuevo alumno
            </Link>
            <table className="alumnosTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre y Apellido</th>
                        <th>DNI</th>
                        <th>Edad</th>
                        <th>Fecha</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {alumnos.map((alumno) => (
                        <tr key={alumno.id}>
                            <td>{alumno.id}</td>
                            <td>{alumno.nombre}</td>
                            <td>{alumno.dni}</td>
                            <td>{alumno.edad}</td>
                            <td>{alumno.fecha}</td>
                            <td>
                                <button onClick={modificarAlumno(alumno.id)}>Editar</button>
                                <button>Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </div>
    );
};


export default TablaAlumnos;