import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar Bootstrap

const Orden = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    useEffect(() => {
        axios.get(`http://localhost:8082/api/orden-resultados/${id}`)
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [id]);

    useEffect(() => {
        if (!user) {
            navigate('/login');
        }
    }, [user, navigate]);

    if (!user) {
        return null;
    }

    return (
        <div className="container mt-5">
            <div className="card shadow-sm p-4">
                <h5 className="card-title">Orden {data.id}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{data.fecha}</h6>
                <p className="card-text">
                    <strong>Código EPS:</strong> {data.orden?.historia?.eps?.codigo}<br />
                    <strong>Razón Social:</strong> {data.orden?.historia?.eps?.razonSocial}
                </p>
            </div>
        </div>
    );
}

export default Orden;
