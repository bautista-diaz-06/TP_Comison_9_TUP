import { useState } from 'react';
import InputPersonalizado from '../components/InputPersonalizado';
import BotonPersonalizado from '../components/BotonPersonalizado';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const [usuario, setUsuario] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulación de login visual
    alert(`Usuario: ${usuario}\nContraseña: ${password}`);
    navigate('/dashboard'); // redirige al dashboard
  }

  return (
    <div className="flex justify-center items-center h-screen bg-pink-50">
      <form 
        onSubmit={handleSubmit} 
        className="bg-white p-6 rounded shadow w-80"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar Sesión</h2>

        <InputPersonalizado 
          label="Usuario" 
          value={usuario} 
          onChange={(e) => setUsuario(e.target.value)} 
        />
        <InputPersonalizado 
          label="Contraseña" 
          type="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
        />

        <BotonPersonalizado>Ingresar</BotonPersonalizado>
      </form>
    </div>
  );
}
