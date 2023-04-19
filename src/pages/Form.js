import '../App.css';
import Boton from '../components/Boton';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

function Form() {
  return (
    <div className="Form">
      <Header text="Ingresos UdeA" />
      <form className='formulario' method='POST'>
        <div className='informacion-basica'>
          <h1>
            Información básica
          </h1>
          <hr></hr>
          <div className='fila'>
            <label>
              Tipo de identificación:
              <select required>
                <option value="cedulaCiudadania">Cédula de ciudadanía</option>
                <option value="tarjetaIdentidad">Tarjeta de identidad</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="cedulaExtranjeria">Cédula de extranjería</option>
              </select>
            </label>
            <label>
              Número de identificación:
              <input type='number'></input>
            </label>
            <label>
              Fecha de expedición del documento:
              <input type='date'></input>
            </label>
            <label>
              Lugar de expedición del documento:
              <br />
              <select required>
                <option value="Antioquia" disabled selected>Departamento</option>
                <option value="tarjetaIdentidad">Tarjeta de identidad</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="cedulaExtranjeria">Cédula de extranjería</option>
              </select>
              
              <select required>
                <option value="cedulaCiudadania" disabled selected>Municipio</option>
                <option value="tarjetaIdentidad">Tarjeta de identidad</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="cedulaExtranjeria">Cédula de extranjería</option>
              </select>
            </label>
          </div>
          <hr></hr>
          <div className='fila'>
          <label>
              * Primer nombre:
              <br />
              <input type='text'></input>
            </label>
            <label>
              Segundo nombre:
              <br />
              <input type='text'></input>
            </label>
            <label>
              * Primer apellido:
              <br/>
              <input type='text'></input>
            </label>
            <label>
              Segundo apellido:
              <br />
              <input type='text'></input>
            </label>
          </div>
          <hr></hr>
          <div className='fila'>
            <label>
              Fecha de nacimiento:
              <br/>
              <input type='date'></input>
            </label>
            <label>
              Lugar de nacimiento:
              <br />
              <select required>
                <option value="Antioquia" disabled selected>Departamento</option>
                <option value="tarjetaIdentidad">Tarjeta de identidad</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="cedulaExtranjeria">Cédula de extranjería</option>
              </select>
              
              <select required>
                <option value="cedulaCiudadania" disabled selected>Municipio</option>
                <option value="tarjetaIdentidad">Tarjeta de identidad</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="cedulaExtranjeria">Cédula de extranjería</option>
              </select>
            </label>

            <label>
              Lugar de expedición del documento:
              <br />
              <select required>
                <option value="Antioquia" disabled selected>Departamento</option>
                <option value="tarjetaIdentidad">Tarjeta de identidad</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="cedulaExtranjeria">Cédula de extranjería</option>
              </select>
              
              <select required>
                <option value="cedulaCiudadania" disabled selected>Municipio</option>
                <option value="tarjetaIdentidad">Tarjeta de identidad</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="cedulaExtranjeria">Cédula de extranjería</option>
              </select>
            </label>
          </div>
          <hr />
          <div className='fila'>
          <label>
              * Género:
              <br />
              <select required>
                <option value="Antioquia" disabled selected>Seleccione su género</option>
                <option value="tarjetaIdentidad">Masculino</option>
                <option value="pasaporte">Femenino</option>
                <option value="cedulaExtranjeria">No binario</option>
              </select>
            </label>
            <div className='ingreso-especial'>
              <label>
                ¿Ingreso especial?
                <input type='checkbox'></input>
              </label>
              <label>
                * Causa de ingreso especial:
                <br />
              <select required>
                <option value="Antioquia" disabled selected>Seleccione su género</option>
                <option value="tarjetaIdentidad">Andrés Bello</option>
                <option value="pasaporte">Indígenas, negras y raizales</option>
                <option value="cedulaExtranjeria">Ley 1084 de 2006</option>
                <option value="cedulaExtranjeria">Deportistas</option>
              </select>
            </label>
            </div>
            <label>
              * Email:
              <br />
              <input type='email'></input>
            </label>
            <label>
              Número telefónico:
              <br />
              <input type='number' placeholder='+57'></input>
            </label>
          </div>
        </div>
        <hr>
        </hr>
        <div className='informacion-academica'>

        </div>
      </form>
    </div>
  );
}

export default Form;
