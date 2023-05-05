import React from 'react';
import './styles/Boton.css';
import PropTypes from 'prop-types';

const Boton = ({ text }) => {
  return (
    <div className="contenedor-boton">
      <button className="boton">{text}</button>
    </div>
  );
};

Boton.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Boton;
