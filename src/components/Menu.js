import React from 'react';
import { Outlet } from "react-router-dom";
import {Link} from "react-router-dom";

const Menu = () => {
  return (
    <div className='contenedor-menu'>
        <nav>
            <h1 className='logo'>Creditosbaratos.com</h1>
            <ul>
                <li>
                    <Link to="/">Inicio</Link> 
                </li>
                <li>
                    <Link to="/Servicios">Servicios</Link> 
                </li>
                <li>
                    <Link to="/Contacto">Contacto</Link> 
                </li>     
                <li>
                    <Link to="/Login">Ingresar</Link> 
                </li>       
            </ul>
        </nav> 
        <Outlet/>
    </div>
  )
}

export default Menu;
