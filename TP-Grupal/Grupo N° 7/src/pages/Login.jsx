import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../Styles/Login.css';

export default function Login({ setLogueado }) {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

    const usuarioEncontrado = usuarios.find(
      (u) => u.usuario === usuario && u.password === password
    );

    if (usuarioEncontrado) {
      localStorage.setItem('usuarioActual', JSON.stringify(usuario));
      localStorage.setItem('logueado', true);
      setLogueado(true);
      navigate('/dashboard');
    } else {
      alert('Usuario o contraseña incorrectos');
    }
  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Iniciar Sesión</h2>

        <label>Usuario</label>
        <input
          type="text"
          value={usuario}
          onChange={(e) => setUsuario(e.target.value)}
        />

        <label>Contraseña</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="submit">Ingresar</button>

        <p style={{ marginTop: '1rem' }}>
          ¿No tenés cuenta?{' '}
          <Link to="/registro" style={{ color: '#721f4d', fontWeight: 600 }}>
            Registrate aquí
          </Link>
        </p>
      </form>
    </div>
  );
}
