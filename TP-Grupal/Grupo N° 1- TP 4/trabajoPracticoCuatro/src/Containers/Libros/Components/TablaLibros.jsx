import { Link } from "react-router-dom";
import "../../../Styles/TablaLibrosStyles.css";

const TablaLibros = () => {
    const libros = [
        { id: 1, titulo: "Cien años de soledad", autor: "Gabriel García Márquez", año: 1967 },
        { id: 2, titulo: "El principito", autor: "Antoine de Saint-Exupéry", año: 1943 },
        { id: 3, titulo: "1984", autor: "George Orwell", año: 1949 },
        { id: 4, titulo: "Don Quijote de la Mancha", autor: "Miguel de Cervantes", año: 1605 },
    ];

    return (
        <div className="tablaContainer">
            <h2>Libros</h2>
            <Link to="/registrarLibro" className="botonRegistrarLibro">
                Nuevo libro
            </Link>
            <table className="librosTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Título</th>
                        <th>Autor</th>
                        <th>Año</th>
                    </tr>
                </thead>
                <tbody>
                    {libros.map((libro) => (
                        <tr key={libro.id}>
                            <td>{libro.id}</td>
                            <td>{libro.titulo}</td>
                            <td>{libro.autor}</td>
                            <td>{libro.año}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TablaLibros;
