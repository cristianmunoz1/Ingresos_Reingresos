import { library } from '@fortawesome/fontawesome-svg-core';
import { faFontAwesome, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Boton from '../components/Boton';
import Header from '../components/Header';
import Tabla from '../components/Tabla';
import React from 'react';

library.add(fas, faTwitter, faFontAwesome);

const ListadoAd = () => {
  return (
    <React.Fragment>
      <div className="listado-admisiones">
        <Header text="Admisiones ingresos comunes" />
        <div className="contenedor-botones-listado">
          <Link to="/">
            <Boton text="Atrás" />
          </Link>
        </div>
        <div className="contenedor-busqueda">
          <Button variant="light">
            <FontAwesomeIcon icon="fa-solid fa-arrow-down-wide-short" />
          </Button>
          <Button variant="light">
            <FontAwesomeIcon icon="fa-solid fa-filter" />
          </Button>
          <input type="text" placeholder="Número de identificación"></input>
          <Button variant="light">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </Button>
        </div>
        <div className="contenedor-tabla">
          <Tabla></Tabla>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListadoAd;
