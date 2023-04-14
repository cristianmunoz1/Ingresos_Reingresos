import React from "react";
import '../styles/Boton.css'

function Boton(props){
  return (
    <div className="contenedor-boton">

      <button className="boton">
        {props.text}
      </button>

    </div>
  );
}

export default Boton