import { useState } from 'react';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const registerData = {
      username,
      email,
      password,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem('registerData', JSON.stringify(registerData));
    alert('Te has registrado correctamente');
    console.log('Registro guardado:', registerData);
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
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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