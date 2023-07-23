import React, {useEffect, useState} from 'react'
import '../css/Servicios.css';
import { Link } from 'react-router-dom';

const Servicios = () => {

  const [servicios, setServicios] = useState([]);

  useEffect(() => {
    fetch('https://64b9c7c779b7c9def6c153cf.mockapi.io/api/servicios')
    .then((Listado) => Listado.json())
    .then((Listado) => {setServicios(Listado)})
  }, [])


  return (
    <div className='contenedor-servicios'>

        <div className='tarjeta-servicios'>
          {servicios.map( serv => (
            <div key={serv.id} className='servicio'>
              <img src={serv.url} className='imagen-servicio'/>
              <h3 className='nombre-servicio'><Link to ={`/Servicios/${serv.id}`}>{serv.Nombre}</Link> </h3>
            </div>
          ))}
        </div>
    </div>
  )
}

export default Servicios
