import { useState } from "react";
import "../Styles/Login.css";
import { useAuth } from "../hook/useAuth";
import { Link } from "react-router-dom";

export default function Login() {
  const [usuario, setUsuario] = useState("");
  const [password, setPassword] = useState("");
  const { handleLogin, error } = useAuth();

  const handleSubmit = async (e) => {
    await handleLogin({ usuario, password });
  };



  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Iniciar Sesión</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <label>Usuario</label>
        <input
          type="text"
          value={usuario}
          maxLength={15}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          maxLength={20}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Ingresar</button>

        <p style={{ marginTop: "1rem" }}>
          ¿No tenés cuenta?{" "}
          <Link to="/registro" style={{ color: "#721f4d", fontWeight: 600 }}>
            Registrate aquí
          </Link>
        </p>
      </form>
    </div>
  );
}
