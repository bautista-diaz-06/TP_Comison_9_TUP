// src/hooks/useUser.js
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getUsers, createUser } from "../services/usersService";

export const useUser = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Mantener usuario logueado al recargar la página
  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  // Función de login
  const login = async ({ nombre, password }) => {
    try {
      const users = await getUsers();
      const loggedUser = users.find(
        (u) => u.nombre === nombre && u.password === password
      );

      console.log("Usuario encontrado en login:", loggedUser); // DEBUG

      if (loggedUser) {
        localStorage.setItem("user", JSON.stringify(loggedUser));
        setUser(loggedUser);
        navigate("/dashboard"); // Redirige al dashboard
        return true;
      } else {
        alert("Nombre o contraseña incorrectos");
        return false;
      }
    } catch (error) {
      console.error("Error en login:", error);
      return false;
    }
  };

  // Función de registro
  const register = async ({ nombre, password }) => {
    try {
      const newUser = await createUser({ nombre, password });
      localStorage.setItem("user", JSON.stringify(newUser));
      setUser(newUser);
      navigate("/dashboard"); // Redirige al dashboard después del registro
      return true;
    } catch (error) {
      console.error("Error en registro:", error);
      return false;
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/");
  };

  return { user, login, register, logout };
};
