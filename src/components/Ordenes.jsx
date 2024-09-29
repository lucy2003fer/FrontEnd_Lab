import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const Ordenes = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8082/api/orden-resultados/first")
            .then(response => {
                setData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4" style={{ fontWeight: '300' }}>Órdenes</h2>
            <div className="table-responsive">
                <table className="table table-striped table-hover shadow-sm" style={{ borderRadius: '8px', overflow: 'hidden', backgroundColor: '#fff' }}>
                    <thead style={{ backgroundColor: '#fff' }}>
                        <tr>
                            <th>Fecha de la orden</th>
                            <th>Documento</th>
                            <th>Número de la orden</th>
                            <th>Opciones</th>
                        </tr>
                    </thead>
                    <tbody style={{ backgroundColor: '#fff' }}>
                        {data.map(item => (
                            <tr key={item.id}>
                                <td>{item.fecha}</td>
                                <td>{item.orden.documento.nombre}</td>
                                <td>{item.orden.orden}</td>
                                <td>
                                    <a href={`/orden-resultados/${item.id}`} className="btn btn-primary shadow-sm" style={{ borderRadius: '4px' }}>
                                        Ver Orden
                                    </a>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Ordenes;
