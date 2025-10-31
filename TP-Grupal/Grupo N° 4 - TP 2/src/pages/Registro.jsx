import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Styles/Login.css';

export default function Registro() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegistro = (e) => {
    e.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    if (usuarios.find(u => u.usuario === usuario)) {
      return alert('El usuario ya existe');
    }

    usuarios.push({ usuario, password });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    alert('Usuario registrado correctamente');
    navigate('/login');
  };

  return (
    <div className="login-container">
      <form onSubmit={handleRegistro} className="login-form">
        <h2>Registrar Usuario</h2>
        <label>Usuario</label>
        <input type="text" value={usuario} onChange={e => setUsuario(e.target.value)} />
        <label>Contraseña</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit">Registrarse</button>
      </form>
    </div>
  );
}
