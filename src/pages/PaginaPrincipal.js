import '../App.css';
import Boton from '../components/Boton';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function PaginaPrincipal() {
  return (
    <div className="PaginaPrincipal">
      <Header text="Página para ingresos UdeA"/>
      <div className='contenedor-botones'>
        <Link to='registro'>
            <Boton text="Estudiantes/Aspirantes"/>
        </Link>
        <Boton text="Admisiones"/>
      </div>
    </div>
  );
}

export default PaginaPrincipal;
