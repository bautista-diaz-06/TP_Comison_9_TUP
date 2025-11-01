import logo from '../assets/ong.png';
import {useNavigate} from 'react-router-dom';

function Header() {

const navigate = useNavigate();

    return (
        <>
        <header className="d-flex my-3 align-content-center container-fluid">
    <div className="img-fluid d-flex my-1" style={{height: 35}}>
    <img onClick={() => navigate('/')} role="button" src={logo} alt="Logo" className='img-fluid' />
    </div>
    <h1 onClick={() => navigate('/')} role="button" className='fs-2'>ONG</h1>
    <div className="d-flex gap-3 justify-content-end flex-grow-1 me-3">
    <p onClick={() => navigate('/login')} role="button" className="login fs-5">Login</p>
    <p onClick={() => navigate('/register')} role="button" className="register fs-5">Register</p>
    </div>
    </header>
    </>
);
}

export default Header;