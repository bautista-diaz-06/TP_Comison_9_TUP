import { useState } from 'react';

function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

const handleSubmit = (e) => {
    e.preventDefault();
    const loginData = {
        email,
        password,
        timestamp: new Date().toISOString()
    };
    localStorage.setItem('loginData', JSON.stringify(loginData));
    alert('Te has logueado correctamente');
    console.log('Login guardado:', loginData);
};

return (
    <div className="container mt-5 pt-4">
        <div className="row justify-content-center">
            <div className="col-md-6 col-lg-4">
                <div className="card shadow-sm">
                    <div className="card-body">
                        <h2 className="card-title text-center mb-4">Login</h2>
                        <form onSubmit={handleSubmit}>
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
                                <button type="submit" className="btn btn-primary w-100">Iniciar Sesion</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default Login;