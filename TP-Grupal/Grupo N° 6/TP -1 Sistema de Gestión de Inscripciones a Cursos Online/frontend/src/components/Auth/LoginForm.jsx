import { useState } from "react";

const LoginForm = () => {
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  // 🔹 futuro fetch simulado
  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/data/alumnos.json");
      const alumnos = await res.json();

      const user = alumnos.find(
        (a) => a.correo === Email && a.password === Pass
      );

      if (user) {
        alert(`Bienvenido ${user.nombre}!`);
      } else {
        alert("Credenciales incorrectas.");
      }
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} className="formauth">
      <img src="/4900-lucoa.png" alt="Academia Logo" />
      <h1>Iniciar Sesión</h1>

      <div className="input-container">
        <input
          type="email"
          id="Email"
          name="Email"
          placeholder="Correo Electrónico"
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
          placeholder="Contraseña"
          value={Pass}
          onChange={(e) => setPass(e.target.value)}
          required
        />
        <label htmlFor="Pass">Contraseña</label>
      </div>

      <button type="submit" disabled={isLoading}>
        {isLoading ? "Cargando..." : "Ingresar"}
      </button>
    </form>
  );
};

export default LoginForm;
