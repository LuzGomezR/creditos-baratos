import React, {useEffect, useState} from 'react';
import '../css/DetalleServicios.css';
import { useParams } from 'react-router-dom';


const DetalleServicios = () => {

    const {servID} = useParams();
    const [ListadoServicios, setListadoServicios] = useState([]);


    useEffect(() => {
      fetch('https://64b9c7c779b7c9def6c153cf.mockapi.io/api/servicios')
        .then((Listado) => Listado.json())
        .then((Listado) => {setListadoServicios(Listado) })
    }, [])

    const servinfo = ListadoServicios.find( servic => servic.id === servID )

    if (!servinfo){
        return (
            <div className='error'>
                <h1>No hay productos</h1>
            </div>
        )
    }

        return (
            <div className='container'>
                <div className='contenedor-detalle'> 
                    <img src={servinfo.url} className='imagen-detalle'></img>
                    <h1 className='nombre'>{servinfo.Nombre}</h1>
                    <p className='descripcion'>{servinfo.Descripcion}</p>
                    <h3 className='item'>Tasa: Desde el {servinfo.Tasa}</h3>
                    <h3 className='item'>Plazo: Hasta {servinfo.Plazo}</h3>
                    <h3 className='item'>Estudio: {servinfo.Estudio}</h3>
                </div>
            </div>
        )
}

export default DetalleServicios
