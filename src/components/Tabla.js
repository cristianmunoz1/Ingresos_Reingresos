import React from "react";
import '../styles/Tabla.css';
import ModalIngresoPuntaje from "./Modal";

function Tabla(props){
  return(
    
    <div className="contenedor-tabla">
      <table>
        <thead>
            <tr>
                <th>Identificación</th>
                <th>Nombre</th>
                <th>Codigo de programa</th>
                <th>Programa</th>
                <th>Sede</th>
                <th>Modalidad</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><ModalIngresoPuntaje text='1111111' name='Pepito Perez'></ModalIngresoPuntaje></td>
                <td>Pepito Pérez</td>
                <td>505</td>
                <td>Medicina</td>
                <td>Medellin</td>
                <td>Presencial</td>
            </tr>
            <tr>
                <td><ModalIngresoPuntaje text='2222222' name="María Álvarez"></ModalIngresoPuntaje></td>
                <td>María Álvarez</td>
                <td>404</td>
                <td>Ing. de sistemas</td>
                <td>Oriente</td>
                <td>Virtual</td>
            </tr>
        </tbody>
      </table>
    </div>
        
  );
}

export default Tabla