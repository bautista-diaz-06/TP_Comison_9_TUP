// src/pages/FormularioRegistro.jsx
import { useState } from "react";
import { useUser } from "../hooks/useUser";

const FormularioRegistro = () => {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
const { register } = useUser();

const handleSubmit = async (e) => {
  e.preventDefault();
  const success = await register({ nombre, password });
  if (!success) {
    alert("Hubo un error al registrar el usuario");
    setPassword("");
  } else {
    alert("Usuario registrado correctamente. Ahora podés iniciar sesión.");
    setNombre("");
    setPassword("");
  }
};


  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="container-form">
        <h3>Registro</h3>
        <div>
          <h5>Nombre completo</h5>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Ingresa tu nombre completo..."
            required
          />
        </div>
        <div>
          <h5>Contraseña</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Ingresa tu contraseña..."
            required
          />
        </div>
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
};

export default FormularioRegistro;
