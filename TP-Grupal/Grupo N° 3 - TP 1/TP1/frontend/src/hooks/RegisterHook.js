// src/hooks/useRegister.js
const useRegister = () => {
  const register = (newUser) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    const exists = users.some(
      (u) => u.correo.toLowerCase() === newUser.correo.toLowerCase()
    );
    if (exists) return { ok: false, message: "El correo ya está registrado." };

    const userToSave = {
      ...newUser,
      role: users.length === 0 ? "admin" : "user",
    };

    users.push(userToSave);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("userId", JSON.stringify(newUser.dni));

    return { ok: true, user: userToSave };
  };

  return { register };
};

export default useRegister;
