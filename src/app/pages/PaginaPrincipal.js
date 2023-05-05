import { Link } from 'react-router-dom';
import Boton from '../components/Boton';
import Header from '../components/Header';
import React from 'react';

const PaginaPrincipal = () => {
  return (
    <React.Fragment>
      <div className="PaginaPrincipal">
        <Header text="Página para ingresos UdeA" />
        <div className="contenedor-botones">
          <Link to="registro">
            <Boton text="Estudiantes/Aspirantes" />
          </Link>
          <Link to="/admisiones">
            <Boton text="Admisiones" />
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
};

export default PaginaPrincipal;
