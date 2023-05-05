import React from 'react';
import './styles/Header.css';
import PropTypes from 'prop-types';

const Header = ({ text }) => {
  return (
    <div className="contenedor-header">
      <h1>{text}</h1>
    </div>
  );
};

Header.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Header;
