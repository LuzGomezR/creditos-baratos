import React from 'react'
import Facebook from '../Imagenes/facebook.ico';
import Instagram from '../Imagenes/instagram.ico';
import Twitter from '../Imagenes/twitter.ico';



const Piepagina = () => {

  return (
    <div>

      <div className='contenedor-footer'>
        <div className="contenido-pie-pagina">
          <h2 className='titulo-pie-pagina'>¿TIENES DUDAS?</h2>
          <h3 className="contactos">Teléfono de contacto</h3>
          <h3 className="contactos">316 4067533</h3>
          <h3 className="contactos">320 8341461</h3>
        </div>

        <div className="contenido-pie-pagina">
          <h2 className='titulo-pie-pagina'>SÍGUENOS</h2>
          <img className='redes'src={Facebook} />
          <img className='redes'src={Instagram} />
          <img className='redes'src={Twitter} />
        </div>

        <div className="contenido-pie-pagina">
        <h2 className='titulo-pie-pagina'>VISITANOS</h2>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.8540624037278!2d-74.06960728523804!3d4.620112696643715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9985b835d603%3A0x6a107836ca6652f5!2zQ2wuIDMzICM2Yi0yNCwgU2FudGEgRsOpLCBCb2dvdMOh!5e0!3m2!1ses!2sco!4v1688698932553!5m2!1ses!2sco"></iframe>
        </div>

        <div className='copyright'>
          <p> &#169; Copyright Créditos Baratos - 2023</p>
          <div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Piepagina
