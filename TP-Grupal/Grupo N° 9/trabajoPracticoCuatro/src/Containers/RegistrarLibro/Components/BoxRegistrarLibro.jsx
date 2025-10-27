import "../../../Styles/RegistrarLibroStyles.css" 
const BoxRegistrarLibro = () => {
    return(
                <div className="registroContainer">
            <h2>Registro de Libros</h2>

            <form className="registroForm">
                <input
                    type="text"
                    name="titulo"
                    placeholder="Titulo"
                    className="registroInput"
                />

                <input
                    type="text"
                    name="autor"
                    placeholder="Autor"
                    className="registroInput"
                />

                <input
                    type="text"
                    name="editorial"
                    placeholder="Editorial"
                    className="registroInput"
                />

               
            <input
                type="text"
                name="descripcion"
                placeholder="Descripcion"
                className="registroInput"
            />
            
            <input
                type="number"
                name="Cantidad"
                placeholder="Cantidad"
                className="registroInput"
            />

                <button type="submit" className="registroButton">
                    Registrar
                </button>
            </form>
        </div>
    )
}

export default BoxRegistrarLibro;