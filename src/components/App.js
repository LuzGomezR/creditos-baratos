import '../css/App.css';
import {Route, Routes } from "react-router-dom";
import Menu from "./Menu";
import Home from "./Home";
import Servicios from './Servicios';
import Contacto from './Contacto';
import Piepagina from './Piepagina';
import Login from './Login';
import DetalleServicios from './DetalleServicios';


function App() {
  return (
    <div>
        
        <Routes>
          <Route path="/" element={<Menu />}> 
            <Route path="/" element={<Home />}> </Route>
            <Route path="/Servicios" element={<Servicios />}> </Route>
            <Route path="/Contacto" element={<Contacto />}> </Route>
            <Route path="/Login" element={<Login />}> </Route>
            <Route path="/Servicios/:servID" element={<DetalleServicios />}></Route>
          </Route>
        </Routes>

        <Routes>
          <Route path="/" element={<Piepagina/>}>
            <Route path="/" element={<Home />}> </Route>
            <Route path="/Servicios" element={<Servicios />}> </Route>
            <Route path="/Contacto" element={<Contacto />}> </Route>
            <Route path="/Login" element={<Login />}> </Route>
            <Route path="/Servicios/:servID" element={<DetalleServicios />}></Route>
          </Route>
        </Routes>

    </div>
  );
}

export default App;
