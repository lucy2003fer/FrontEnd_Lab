
import { useNavigate } from 'react-router-dom'

const Cerrar = () => {
    const navigate = useNavigate()
    
    const cerrarSesion = () => {
        localStorage.removeItem('user')
        navigate('/')
    }

    return (
        <button onClick={cerrarSesion}> Cerrar Sesion</button>
    )
}

export default Cerrar
