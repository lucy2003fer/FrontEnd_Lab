import { Link } from 'react-router-dom';
import "bootstrap/dist/js/bootstrap.bundle";
import "../css/sidebar.css";

export default function Sidebar() {
    return (
        <div className='d-flex'>
            <div id='sidebar' className='sidebar shadow min-vh-100 collapse collapse-horizontal show'>
                <div className='sidebarin'>
                    <div>
                        
                        <div className='my-3 d-flex justify-content-start ms-4'>
                            <Link to="/home">
                                <button className='btn btn-primary'>Home</button>
                            </Link>
                        </div>

             
                        <div className='my-3 d-flex justify-content-start ms-4'>
                            <Link to="/info">
                                <button className='btn btn-primary'>Perfil de usuario</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>


            <div>
                <button data-bs-target="#sidebar" data-bs-toggle="collapse" className='btn btn-light shadow'>Menú</button>
            </div>
        </div>
    );
}
