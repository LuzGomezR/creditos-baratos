import '../css/Home.css';
import React from 'react'
import Banner from '../Imagenes/asesoria.png';
import Avvillas from '../Imagenes/villas.png';
import Popular from '../Imagenes/popular.png';
import Union from '../Imagenes/union.jpg';
import Bancow from '../Imagenes/bancow.png';
import Pichincha from '../Imagenes/pichincha.jpeg';
import Juriscoop from '../Imagenes/juriscoop.png';
import Sudameris from '../Imagenes/sudameris.png';
import Fianti from '../Imagenes/fianti.jpeg';

const Home = () => {
  return (

    <div>

      <img className="banner" src={Banner}/>

      <div className='contenedor-aliados'>
        <h3 className='introduccion-titulo'>SOMOS EXPERTOS EN ASESORIA FINANCIERA</h3>
        <p className='introduccion-text'>Somos <b><i>Consultores Financieros</i></b> especializados en mejorar tu vida créditicia. 
        <br></br>Solicita tu préstamo en alguna de nuestras líneas de crédito y con alguno de nuestros <b>aliados financieros:</b></p> 
        <ul class="aliados">
          <li>
            <img className='imagenes-aliados' src={Avvillas}/>
          </li>
          <li>
            <img className='imagenes-aliados' src={Popular}/>
          </li>
          <li>
            <img className='imagenes-aliados' src={Union}/>
          </li>
          <li>
            <img className='imagenes-aliados' src={Bancow}/>
          </li>
          <li>
            <img className='imagenes-aliados' src={Pichincha}/>
          </li>
          <li>
            <img className='imagenes-aliados' src={Juriscoop}/>
          </li>
          <li>
            <img className='imagenes-aliados' src={Sudameris}/>
          </li>
          <li>
            <img className='imagenes-aliados' src={Fianti}/>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Home
