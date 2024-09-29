import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import ReCAPTCHA from 'react-google-recaptcha'; // Importa el componente de reCAPTCHA
import '../css/login.css';

const Login = () => {
  const navigate = useNavigate();
  const [tipos, setTipos] = useState([]);
  const [documento, setDocumento] = useState('');
  const [numero, setNumero] = useState('');
  const [fecha, setFecha] = useState('');
  const [error, setError] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null); // Estado para el valor del CAPTCHA
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    axios.get('http://localhost:8082/api/lista-opcion/tipo/TipoIdentificacion')
      .then(response => {
        setTipos(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    if (user) {
      navigate('/home');
    }
  }, [user, navigate]);

  const Validar = (e) => {
    e.preventDefault();

    if (!captchaValue) {
      setError('Por favor, completa el CAPTCHA');
      return;
    }

    axios.get(`http://localhost:8082/api/personas/buscar?tipoId=${documento}&numeroId=${numero}&fechaNac=${fecha}`)
      .then(response => {
        if (!response.data) {
          return setError('Datos incorrectos');
        }
        localStorage.setItem('user', JSON.stringify(response.data));
        navigate('/home');
      })
      .catch(error => {
        setError('Asegúrese de llenar los campos');
      });
  };

  return (
    <div className="todo d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="container col-md-6 col-lg-4 shadow p-4 bg-white rounded-40 br-40">
        <form onSubmit={Validar} className="formulario">
          <h1 className="text-center mb-4">Iniciar sesión</h1>
          <p className="text-center text-muted mb-4">Bienvenidos a su laboratorio de confianza, por favor diligencie los datos requeridos</p>

          <div className="mb-3">
            <label htmlFor="tipoIdentificacion" className="form-label">Tipo Identificación</label>
            <select className="form-select" onChange={(e) => { setDocumento(e.target.value); }}>
              <option value="">--- Seleccione ---</option>
              {tipos.map(opcion => (
                <option key={opcion.id} value={opcion.id}>
                  {opcion.abreviacion}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-3">
            <label htmlFor="numeroIdentificacion" className="form-label">Número de identificación</label>
            <input className="form-control" onChange={(e) => { setNumero(e.target.value); }} type="text" placeholder="Ingrese su número de identificación" />
          </div>

          <div className="mb-3">
            <label htmlFor="fechaNacimiento" className="form-label">Fecha de Nacimiento</label>
            <input className="form-control" onChange={(e) => { setFecha(e.target.value); }} type="date" />
          </div>

       
          <ReCAPTCHA
            sitekey="6LeVTU8qAAAAAEToQMT7rKAkMzVJMIz6fK-yhwQi" 
            onChange={setCaptchaValue}
          />

          <button type="submit" className="btn btn-primary w-100">Iniciar sesión</button>

          {error && <div className="alert alert-danger mt-3" role="alert">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default Login;


