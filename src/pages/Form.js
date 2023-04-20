import '../App.css';
import Boton from '../components/Boton';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { departamentos, municipios } from '../utils/data';
import { useState } from 'react';

function Form() {
  const [departamento, setDepartamento] = useState('');
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
              <select required value={departamento} onChange={(e) => {
                setDepartamento(e.target.value);
                console.log(departamento)
              }}>
                <option value="depto" disabled selected>Departamento</option>
                {
                  departamentos.map(( departamento ) => {
                    return (
                      <option value={departamento}>{departamento}</option>
                    )
                  })
                }
              </select>
              
              <select required >
                <option value="cedulaCiudadania" disabled selected>Municipio</option>
                { departamento == '' ? null : (
                  municipios[{departamento}].map( (municipio) => {

                    return(
                      <option value={municipio}>{municipio}</option>
                    )
                  })
                )
                  
                }
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
          <hr />
          <div className='fila'>
            <div className='ingreso-especial'>
              <label>
                ¿Presenta alguna discapacidad?
                <input type='checkbox'></input>
              </label>
              <label>
                Discapacidad
                <br />
              <select required>
                <option value="Antioquia" disabled selected>Seleccione </option>
                <option value="tarjetaIdentidad">Fisica</option>
                <option value="pasaporte">Intelectual</option>
                <option value="cedulaExtranjeria">Visual</option>
                <option value="cedulaExtranjeria">Sordoceguera</option>
              </select>
            </label>
            </div>
            <label >
              *Adjuntar acta de bachiller <br/>
              <input type='file' id='Archivo' />

            </label>
          </div>
        </div>
        
        <hr/>
        <div className='informacion-academica'>
          <h1>Información academica de Inscripción</h1>
          <div className='fila'>
          <label>Ingreso comun</label>  
          <label>
              PROGRAMA:
              <select required>
                <option value="cedulaCiudadania">Cédula de ciudadanía</option>
                <option value="tarjetaIdentidad">Tarjeta de identidad</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="cedulaExtranjeria">Cédula de extranjería</option>
              </select>
            </label>
            <label>
              SEDE:
              <select required>
                <option value="cedulaCiudadania">Cédula de ciudadanía</option>
                <option value="tarjetaIdentidad">Tarjeta de identidad</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="cedulaExtranjeria">Cédula de extranjería</option>
              </select>
            </label>
            <label>
              MODALIDAD:
              <select required>
                <option disabled selected>Seleccion modalidad</option>
                <option value="presencial">Presencial</option>
                <option value="virtual">Virtual</option>
                <option value="regionalizado">Regionalizado</option>
              </select>
            </label>
          </div>
          <hr/>
          <div className='fila'>
            <label>Ingreso por transferencia</label>  

            <label>
              UNIVERSIDAD DE ORIGEN:
              <select required>
                <option value="cedulaCiudadania">Cédula de ciudadanía</option>
                <option value="tarjetaIdentidad">Tarjeta de identidad</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="cedulaExtranjeria">Cédula de extranjería</option>
              </select>
            </label>
            <label>
              PROGRAMA:
              <select required>
                <option value="cedulaCiudadania">Cédula de ciudadanía</option>
                <option value="tarjetaIdentidad">Tarjeta de identidad</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="cedulaExtranjeria">Cédula de extranjería</option>
              </select>
            </label>
            <label>
              MODALIDAD:
              <select required>
                <option disabled selected>Seleccion modalidad</option>
                <option value="presencial">Presencial</option>
                <option value="virtual">Virtual</option>
                <option value="regionalizado">Regionalizado</option>
              </select>
            </label>
          </div>
        </div>
      </form>
      <div className='contenedor-botones-footer'>
       <Link to='/'>
        <Boton text="Volver a pantalla principal" />
       </Link> 
        <Link to= '/registro' >
         <Boton text="Atrás" />
        </Link>
        
        <Boton text="Enviar Ingreso"/>
      </div>
    </div>
  );
}

export default Form;
