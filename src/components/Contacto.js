import React from 'react';
import '../css/Contacto.css';
import Imgasesor from '../Imagenes/asesora-call.png';
import Imgcontactenos from '../Imagenes/contactenos.png';

const Contacto = () => {
  return (
    <div className='contenedor-contacto'>
      <h1 className='titulo-contacto'>CONTÁCTENOS</h1>

      <img className='contactenos' src={Imgcontactenos}/>
      <img className='asesor-call' src={Imgasesor}/>         

      <div className="v-line"></div>

      <form className='fomulario-contacto' action='https://formsubmit.co/a45dffa20809ae3e92bb0f5a31b474f4' method="POST">
      <fieldset>
      <legend>Información personal</legend>
        <label>Nombres y apellidos</label>
        <input className="input-padron" required name='nombre'/>

        <label>Correo electrónico</label> 
        <input className="input-padron" 
        required
        placeholder="email@dominio.com"
        name='correo'/>

        <label>Celular</label> 
        <input className="input-padron" 
        required 
        placeholder="XXX XXXXXXX"
        name='celular'/>

        <label>Mensaje</label> 
        <textarea className="input-padron" required
        name='mensaje'></textarea>
        </fieldset>

        <fieldset>
            <legend>¿En que producto se encuentra interesado?</legend>
            <select name='tipoCredito' required>
                <option>Crédito Libre Inversión</option>
                <option>Crédito de Compra de Cartera</option>
                <option>Crédito de Libranza</option>
                <option>Crédito Hipotecario</option>
                <option>Tarjeta de Crédito</option>
                <option>Crédito Vehicular</option>
            </select>
        </fieldset>

        <fieldset>
            <legend>¿Cómo le gustaría que lo contactemos?</legend>
            <label>
                <input type="radio" className='radio-opciones' id="radio-email" name="contacto"/>
                Email
            </label>
            
            <label>
                <input type="radio" className='radio-opciones' id="radio-celular" name="contacto"/>
                Celular
            </label>
            
            <label>
                <input type="radio" className='radio-opciones' id="radio-whatsapp" name="contacto" checked/>
                WhatsApp
            </label>
            
        </fieldset>

        <fieldset>
            <legend>¿En cuál horario prefiere ser atendido?</legend>
            <label>
                <input type="radio" className='radio-opciones' name="horario"/>
                Mañana
            </label>
            <label>
                <input type="radio" className='radio-opciones' name="horario" checked/>
                Tarde
            </label>
        </fieldset> 
        <fieldset>
          <label className="checkbox"> 
          <input type="checkbox" required checked name='novedades'/>
          Le gustaría recibir novedades de Créditos
          </label>
        </fieldset>

        

        <div className="button-enviar">
            <input type="submit" value="Enviar" className="enviar"/>
        </div>

        <input type="hidden" name="_next" value="https://creditos-baratos.vercel.app//"/>
        <input type="hidden" name="_captcha" value="false"/>

      </form>
    </div>
  )
}

export default Contacto
