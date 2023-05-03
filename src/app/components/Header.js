import React from "react";
import "../styles/Header.css";

function Header(props) {
  return (
    <div className="contenedor-header">
      <h1>{props.text}</h1>
    </div>
  );
}

export default Header;
