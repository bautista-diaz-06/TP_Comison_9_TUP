// src/pages/FormularioLogin.jsx
import { useState } from "react";
import { useUser } from "../hooks/useUser";
import { Link } from "react-router-dom";

const FormularioLogin = () => {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useUser(); // <-- tu hook actualizado con navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login({ nombre, password });
    if (!success) {
      alert("Nombre o contraseña incorrectos");
      setPassword("");
    }
    // si es exitoso, el navigate del hook redirige automáticamente
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="container-form">
        <h3>Login</h3>

        <div>
          <h5>Nombre completo</h5>
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
            placeholder="Ingresa tu nombre completo..."
          />
        </div>

        <div>
          <h5>Contraseña</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Ingresa tu contraseña..."
          />
        </div>

        <button type="submit">Ingresar</button>

        <p style={{ marginTop: "10px", textAlign: "center" }}>
          ¿No tenés cuenta? <Link to="/registro">Registrate aquí</Link>
        </p>
      </form>
    </div>
  );
};

export default FormularioLogin;
