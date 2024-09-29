import { useNavigate } from 'react-router-dom'
import React, { useEffect } from 'react'
import '../css/user.css'
const User = () => {

    const navigate = useNavigate()
    const user = JSON.parse(localStorage.getItem('user'))


    useEffect(() => {
        if (!user) {
            navigate('/login')
        }
    }, [user, navigate])

    if (!user) {
        return null
    }


    return (
        <div>

            <div className="principal card">
                <h3>Bienvenido {user.nombre1} {user.apellido1}!</h3>
                <img src="/public/foto.png" alt="imagen" />
            </div>


            <div className="target1">
                <h4>Tus datos personales:</h4>
                <div className="row">
                    <div className="col">
                        <div className="targe card">
                            <div className="card-body">
                                <h6>Tipo de identificacion: {user.tipoIdentificacion.nombre}</h6>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="targe card">
                            <div className="card-body">
                                <h6>Numero identificacion: {user.numeroIdentificacion}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="targe card">
                            <div className="card-body">
                                <h6>Nombre completo: {user.nombre1} {user.nombre2} {user.apellido1} {user.apellido2} </h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="targe card">
                            <div className="card-body">
                                <h6>Fecha de nacimiento: {user.fechaNacimiento}</h6>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="target2">
                <div className="row">
                    <div className="col">
                        <div className="targe card">
                            <div className="card-body">
                                <h6>Sexo: {user.sexoBiologico.nombre}</h6>

                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="targe card">
                            <div className="card-body">
                                <h6>Direccion: {user.direccion}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="targe card">
                            <div className="card-body">
                                <h6>Telefono: {user.telefonoMovil}</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="targe card">
                            <div className="card-body">
                                <h6>Correo: {user.email}</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    )
}
export default User




