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
import { height } from '@mui/system';

library.add(fas, faTwitter, faFontAwesome);

const ListadoAd = () => {
  return (
    <React.Fragment>
      <div className="listado-admisiones">
        <div className="contenedor-tabla">
          <Tabla></Tabla>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ListadoAd;
