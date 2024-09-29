import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../css/index.css';

const Navbar = () => {
    const navigate = useNavigate();

    const cerrarSesion = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <div className='w-100 container-fluid bg-primary d-flex align-items-center py-2'>
            <div className='me-auto d-flex align-items-center'>
 
            </div>
            <div className='d-flex align-items-center ms-auto'>
                <button onClick={cerrarSesion} className="btn btn-light"> 
                    Cerrar Sesión
                </button>
            </div>
        </div>
    );
}

export default Navbar;
