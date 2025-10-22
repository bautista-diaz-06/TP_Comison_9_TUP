import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import "./AuthLayout.css";

const AuthLayout = () => {
  const [formMode, setFormMode] = useState("login");

  return (
    <div className="auth-container">
      {/* Navbar superior */}
      <nav className="auth-navbar">
        <ul>
          <li
            className={formMode === "login" ? "active" : ""}
            onClick={() => setFormMode("login")}
          >
            <span>Iniciar Sesión</span>
          </li>
          <li
            className={formMode === "register" ? "active" : ""}
            onClick={() => setFormMode("register")}
          >
            <span>Registrarse</span>
          </li>
        </ul>
      </nav>

      {/* Cuerpo del formulario */}
      <main className="auth-body">
        {formMode === "login" && <LoginForm />}
        {formMode === "register" && <RegisterForm />}
      </main>
    </div>
  );
};

export default AuthLayout;
