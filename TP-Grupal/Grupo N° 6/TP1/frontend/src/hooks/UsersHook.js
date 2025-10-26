// 📁 src/hooks/UsersHook.ts
import { useEffect, useState } from "react";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [refresh, setRefresh] = useState(0);

  // ======================================================
  // 🧩 CARGA INICIAL + REFRESH
  // ======================================================
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("users"));
    if (!stored) {
      const defaultUsers = [
        {
          id: 1,
          nombre: "Admin",
          correo: "admin@a.com",
          dni: "789456123",
          password: "123",
          role: "admin",
        },
        {
          id: 2,
          nombre: "Ana Gómez",
          correo: "ana.gomez@example.com",
          dni: "39222444",
          password: "qwerty123",
          role: "user",
        },
        {
          id: 3,
          nombre: "Carlos López",
          correo: "carlos.lopez@example.com",
          dni: "37888999",
          password: "abc12345",
          role: "user",
        },
        {
          id: 4,
          nombre: "Laura Fernández",
          correo: "laura.fernandez@example.com",
          dni: "41001555",
          password: "mypassword",
          role: "user",
        },
        {
          id: 5,
          nombre: "Pedro Sánchez",
          correo: "pedro.sanchez@example.com",
          dni: "38900222",
          password: "pedritoXD",
          role: "user",
        },
      ];
      localStorage.setItem("users", JSON.stringify(defaultUsers));
      setUsers(defaultUsers);
    } else {
      setUsers(stored);
    }

    // Escuchar cambios (opcional)
    const handleChange = () => setRefresh((r) => r + 1);
    window.addEventListener("usersChanged", handleChange);
    return () => window.removeEventListener("usersChanged", handleChange);
  }, [refresh]);
  return { users };
};
