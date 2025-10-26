import { useState } from "react";

const RegisterForm = () => {
  const [Nombre, setNombre] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Dni, setDni] = useState("");
  const [Pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 🔹 simula registro en JSON local (más adelante se reemplaza con API)
  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const nuevoAlumno = {
        id: Date.now(),
        nombre: Nombre,
        correo: Correo,
        dni: Dni,
        password: Pass,
      };

      // 📦 En modo frontend-only, podrías usar localStorage
      const existing = JSON.parse(localStorage.getItem("alumnos") || "[]");
      existing.push(nuevoAlumno);
      localStorage.setItem("alumnos", JSON.stringify(existing));

      alert("Registro completado correctamente 🎉");
      setNombre("");
      setCorreo("");
      setDni("");
      setPass("");
    } catch (err) {
      console.error("Error al registrar:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleRegister} className="formauth">
      <img src="/4900-lucoa.png" alt="Academia Logo" />
      <h1>Registrarse</h1>

      <div className="input-container">
        <input
          type="text"
          id="Nombre"
          name="Nombre"
          placeholder="Nombre Completo"
          value={Nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
        <label htmlFor="Nombre">Nombre Completo</label>
      </div>

      <div className="input-container">
        <input
          type="email"
          id="Correo"
          name="Correo"
          placeholder="Correo Electrónico"
          value={Correo}
          onChange={(e) => setCorreo(e.target.value)}
          required
        />
        <label htmlFor="Correo">Correo Electrónico</label>
      </div>

      <div className="input-container">
        <input
          type="text"
          id="Dni"
          name="Dni"
          placeholder="DNI"
          value={Dni}
          onChange={(e) => setDni(e.target.value)}
          required
        />
        <label htmlFor="Dni">DNI</label>
      </div>

      <div className="input-container">
        <input
          type="password"
          id="Pass"
          name="Pass"
          placeholder="Contraseña"
          value={Pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <label htmlFor="Pass">Contraseña</label>
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Registrando..." : "Crear Cuenta"}
      </button>
    </form>
  );
};

export default RegisterForm;
