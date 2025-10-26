// src/hooks/useLogin.js
import { useAuthStore } from "../store/AuthStore";
import { usePageStore } from "../store/PageStore";

const useLogin = () => {
  const { setUser } = useAuthStore();
  const { setPage } = usePageStore();

  const login = (correo, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const user = users.find(
      (u) =>
        u.correo.toLowerCase() === correo.toLowerCase() &&
        u.password === password
    );

    if (!user) return { ok: false, message: "Credenciales incorrectas." };

    setUser(user);

    switch (user.role) {
      case "admin":
        setPage("adminhome");
        break;
      case "user":
      default:
        setPage("studenthome");
        break;
    }

    return { ok: true, user };
  };

  return { login };
};

export default useLogin;
