import { Link } from 'react-router-dom';
import '../App.css';
import Boton from '../components/Boton';
import Header from '../components/Header';

function RegistroIngreso() {
  return (
    <div className="RegistroIngreso">
      <Header text="Registro para ingreso UdeA"/>
      <div className='contenedor-botones'>
        <Link to='formulario'>
          <Boton text="Ingreso"/>
        </Link>
        <div className='contenedor-texto'>
            <p>Solo válido para ingresos por primera vez a la Universidad de Antioquia o proviene de transferencia</p>
        </div>
      </div>
      <div className='contenedor-botones-footer'>
        <Boton text="Volver a pantalla principal" />
        <Boton text="Atrás" />
      </div>
      
    </div>
  );
}

export default RegistroIngreso;
