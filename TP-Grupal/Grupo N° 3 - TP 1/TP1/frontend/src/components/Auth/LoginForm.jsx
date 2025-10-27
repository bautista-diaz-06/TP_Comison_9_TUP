import { useState } from "react";
import "../../CSS/AuthLayout.css";
import useLogin from "../../hooks/LoginHook";
const LoginForm = () => {
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const { login } = useLogin();

  const handleLogin = async (e) => {
    e.preventDefault();
    login(Email, Pass);
  };

  return (
    <form onSubmit={handleLogin} className="formauth">
      <img src="/XLogo.png" alt="Academia Logo" />
      <h1>Iniciar Sesión</h1>

      <div className="input-container">
        <input
          type="email"
          id="Email"
          name="Email"
          placeholder=" "
          value={Email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="Email">Correo Electrónico</label>
      </div>

      <div className="input-container">
        <input
          type="password"
          id="Pass"
          name="Pass"
          placeholder=" "
          value={Pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <label htmlFor="Pass">Contraseña</label>
      </div>

      <button type="submit">Ingresar</button>
    </form>
  );
};

export default LoginForm;
