import { Link } from 'react-router-dom';
import '../App.css';
import Boton from '../components/Boton';
import Header from '../components/Header';
import Tabla from '../components/Tabla';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';


library.add(fas, faTwitter, faFontAwesome);


function ListadoAd(){
  return(
    <div className='listado-admisiones'>
      <Header text="Admisiones ingresos comunes" />
      <div className='contenedor-botones-listado'>
        <Link to='/'>
          <Boton text="Atrás" />
        </Link>
      </div>
      <div className='contenedor-busqueda'>
      <FontAwesomeIcon icon="fa-solid fa-arrow-down-wide-short" className='icon'/>
      <FontAwesomeIcon icon="fa-solid fa-filter" className='icon'/>
      <input type='text' placeholder='Número de identificación'></input>
      <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className='icon'/>
      </div>
      <div className='contenedor-tabla'>
        <Tabla></Tabla>
      </div>      
    </div>
  );
};

export default ListadoAd;