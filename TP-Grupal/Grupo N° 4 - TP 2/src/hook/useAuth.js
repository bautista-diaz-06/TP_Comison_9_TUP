import { login } from "../services/authService";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HOME } from "../router/HomePage.routes";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (credentials) => {
    try {
      const usuarios = await login();

      const userData = usuarios.find(
        (u) =>
          u.usuario === credentials.usuario &&
          u.password === credentials.password
      );

      if (!userData) throw new Error("Credenciales inválidas");

      // Guardar usuario en estado y localStorage
      setUser(userData);
      localStorage.setItem("usuario", JSON.stringify(userData));
      localStorage.setItem("logueado", JSON.stringify(true));

      navigate(HOME);
    } catch (err) {
      setError(err.message);
    }
  };

  return { user, error, handleLogin };
};
