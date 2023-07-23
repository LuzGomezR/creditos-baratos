import '../css/Login.css';
import React, { useState } from 'react';
import {useNavigate} from 'react-router-dom';
import Imglogin from '../Imagenes/logeo.png';
import Imgfondo from '../Imagenes/fondo.png';

const Login = () => {

  
  const navigate = useNavigate ();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {

    event.preventDefault();

    fetch('https://64b9c7c779b7c9def6c153cf.mockapi.io/api/usuarios',{
      method: 'POST',
      headers: {'Content-type': 'aplication/json'},
      body: JSON.stringify({username,password})
    })
      .then(response => {
        if(response.ok){
          navigate('/Servicios');
        }else{
          console.log("No hubo conexión");
        }
    })
  }
  
  return (
    <div className='contenedor'>
      <img className='fondo'
      src={Imgfondo}
      />
      <div className='card'>
        <img className='logeo'
          src={Imglogin}
        />
        <h2 className='bienvenido'>Bienvenido</h2>
        <div className='formulario-login'>
          <form onSubmit={handleSubmit}>
            <label className="label-login">Usuario</label>
            <input 
            className='input-login'
            type="text" 
            require="true"
            placeholder='ejemplo@mail.com'
            onChange={(event) => setUsername(event.target.value)}
            />
          
            <label className="label-login">Contraseña</label>
            <input 
            className='input-login'
            type="password" 
            require="true"
            placeholder='*******'
            onChange={(event) => setPassword(event.target.value)}
            />

            <div className='button'>
              <button type="submit" className='button-ingresar'>INGRESAR</button>
            </div>
            <a href="" className='olvido-contraseña'>Olvido su contraseña</a>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
