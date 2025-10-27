import { useState } from 'react';

function Register() {
  const [usuario, setUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [contraseña, setContraseña] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const register = {
      usuario,
      email,
      contraseña,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('register', JSON.stringify(register));
    alert('Te has registrado correctamente');
    console.log('Registro guardado:', register);
  };

  return (
    <div className="container mt-4 pt-3">
      <div className="row justify-content-center">
        <div className="col-md-6 col-lg-4">
          <div className="card shadow-sm">
            <div className="card-body">
              <h2 className="card-title text-center mb-4">Register</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="form-label">Usuario:</label>
                  <input 
                    type="text" 
                    className="form-control"
                    value={usuario}
                    onChange={(e) => setUsuario(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Email:</label>
                  <input 
                    type="email" 
                    className="form-control"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">Contraseña:</label>
                  <input 
                    type="password" 
                    className="form-control"
                    value={contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                    required
                  />
                </div>
                <button type="submit" className="btn btn-primary w-100">Registrarse</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;