import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Boton from '../components/Boton';
import Header from '../components/Header';
import {
  departamentos,
  municipios,
  programas,
  sedes,
  universidades,
} from '../utils/data';

function Form() {
  const [departamentoCedula, setDepartamentoCedula] = useState('depto');
  const [departamentoNacimiento, setDepartamentoNacimiento] = useState('depto');
  const [departamentoResidencia, setDepartamentoResidencia] = useState('depto');

  const [tipoIngreso, setTipoIngreso] = useState('comun');

  return (
    <div className="Form">
      <Header text="Ingresos UdeA" />
      <form className="formulario" method="POST">
        <div className="informacion-basica">
          <h1>Información básica</h1>
          <hr></hr>
          <div className="fila">
            <label>
              * Tipo de identificación:
              <select required>
                <option value="cedulaCiudadania">Cédula de ciudadanía</option>
                <option value="tarjetaIdentidad">Tarjeta de identidad</option>
                <option value="pasaporte">Pasaporte</option>
                <option value="cedulaExtranjeria">Cédula de extranjería</option>
              </select>
            </label>
            <label>
              * Número de identificación:
              <input type="number" required></input>
            </label>
            <label>
              * Fecha de expedición <br /> del documento:
              <input type="date" required></input>
            </label>
            <label>
              * Lugar de expedición de documento:
              <br />
              <div className="localidad">
                <select
                  required
                  value={departamentoCedula}
                  onChange={(event) =>
                    setDepartamentoCedula(event.target.value)
                  }
                >
                  <option value="depto" disabled selected>
                    Departamento
                  </option>
                  {departamentos.map((option, index) => {
                    return (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
                <select required>
                  <option value="municipio" disabled selected>
                    Municipio
                  </option>
                  {departamentoCedula === 'depto'
                    ? null
                    : municipios[departamentoCedula].map((municipio, index) => {
                        return (
                          <option key={index} value={municipio}>
                            {municipio}
                          </option>
                        );
                      })}
                </select>
              </div>
            </label>
          </div>
          <hr></hr>
          <div className="fila">
            <label>
              * Primer nombre:
              <br />
              <input type="text" required></input>
            </label>
            <label>
              Segundo nombre:
              <br />
              <input type="text"></input>
            </label>
            <label>
              * Primer apellido:
              <br />
              <input type="text" required></input>
            </label>
            <label>
              Segundo apellido:
              <br />
              <input type="text"></input>
            </label>
          </div>
          <hr></hr>
          <div className="fila">
            <label>
              * Fecha de nacimiento:
              <br />
              <input type="date" required></input>
            </label>
            <label>
              * Lugar de nacimiento:
              <br />
              <div className="localidad">
                <select
                  required
                  value={departamentoNacimiento}
                  onChange={(event) =>
                    setDepartamentoNacimiento(event.target.value)
                  }
                >
                  <option value="depto" disabled selected>
                    Departamento
                  </option>
                  {departamentos.map((option, index) => {
                    return (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
                <select required>
                  <option value="municipio" disabled selected>
                    Municipio
                  </option>
                  {departamentoNacimiento === 'depto'
                    ? null
                    : municipios[departamentoNacimiento].map(
                        (municipio, index) => {
                          return (
                            <option key={index} value={municipio}>
                              {municipio}
                            </option>
                          );
                        }
                      )}
                </select>
              </div>
            </label>

            <label>
              * Lugar de residencia:
              <br />
              <div className="localidad">
                <select
                  required
                  value={departamentoResidencia}
                  onChange={(event) =>
                    setDepartamentoResidencia(event.target.value)
                  }
                >
                  <option value="depto" disabled selected>
                    Departamento
                  </option>
                  {departamentos.map((option, index) => {
                    return (
                      <option key={index} value={option.value}>
                        {option.label}
                      </option>
                    );
                  })}
                </select>
                <select required>
                  <option value="municipio" disabled selected>
                    Municipio
                  </option>
                  {departamentoResidencia === 'depto'
                    ? null
                    : municipios[departamentoResidencia].map(
                        (municipio, index) => {
                          return (
                            <option key={index} value={municipio}>
                              {municipio}
                            </option>
                          );
                        }
                      )}
                </select>
              </div>
            </label>
          </div>
          <hr />
          <div className="fila">
            <label>
              * Género:
              <br />
              <select required>
                <option value="Antioquia" disabled selected>
                  Seleccione su género
                </option>
                <option value="tarjetaIdentidad">Masculino</option>
                <option value="pasaporte">Femenino</option>
                <option value="cedulaExtranjeria">No binario</option>
              </select>
            </label>
            <div className="ingreso-especial">
              <label className="radios">
                ¿Ingreso especial?
                <input type="checkbox"></input>
              </label>
              <label>
                Causa de ingreso especial:
                <br />
                <select>
                  <option value="Antioquia" disabled selected>
                    Seleccione
                  </option>
                  <option value="tarjetaIdentidad">Andrés Bello</option>
                  <option value="pasaporte">
                    Indígenas, negras y raizales
                  </option>
                  <option value="cedulaExtranjeria">Ley 1084 de 2006</option>
                  <option value="cedulaExtranjeria">Deportistas</option>
                </select>
              </label>
            </div>
            <label>
              * Email:
              <br />
              <input type="email" required></input>
            </label>
            <label>
              * Número telefónico:
              <br />
              <input type="number" required placeholder="+57"></input>
            </label>
          </div>
          <hr />
          <div className="fila1">
            <div className="discapacidad">
              <label className="radios">
                ¿Presenta alguna discapacidad?
                <input type="checkbox"></input>
              </label>
              <label>
                Discapacidad
                <br />
                <select>
                  <option value="Antioquia" disabled selected>
                    Seleccione{' '}
                  </option>
                  <option value="tarjetaIdentidad">Fisica</option>
                  <option value="pasaporte">Intelectual</option>
                  <option value="cedulaExtranjeria">Visual</option>
                  <option value="cedulaExtranjeria">Sordoceguera</option>
                </select>
              </label>
            </div>
            <div className="discapacidad">
              <label>
                * Adjuntar acta de bachiller <br />
                <input type="file" id="Archivo" required />
              </label>
            </div>
          </div>
          <hr />
          <div className="informacion-academica">
            <h1>Información academica de Inscripción</h1>
            <fieldset>
              <div className="radio-buttons">
                <label>Tipo de Ingreso:</label>{' '}
                <label className="radios">
                  <input
                    type="radio"
                    name="ingreso"
                    value="comun"
                    defaultChecked={true}
                    onChange={(event) => setTipoIngreso(event.target.value)}
                  />
                  Común
                </label>
                <label className="radios">
                  <input
                    type="radio"
                    name="ingreso"
                    onChange={(event) => setTipoIngreso(event.target.value)}
                  />
                  Transferencia
                </label>
              </div>
            </fieldset>

            {tipoIngreso === 'comun' ? (
              <div className="fila-tipoingreso">
                <label>Ingreso común</label>
                <label>
                  * PROGRAMA:
                  <select required>
                    <option value="cedulaCiudadania" disabled selected>
                      Programa
                    </option>
                    {programas.map((programa, index) => (
                      <option key={index} value={programa.id}>
                        {programa.nombre}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  SEDE:
                  <select required>
                    <option value="cedulaCiudadania" disabled selected>
                      Sedes
                    </option>
                    {sedes.map((sede, index) => (
                      <option key={index} value={sede.id}>
                        {sede.nombre}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  MODALIDAD:
                  <select required>
                    <option disabled selected>
                      Seleccion modalidad
                    </option>
                    <option value="presencial">Presencial</option>
                    <option value="virtual">Virtual</option>
                    <option value="regionalizado">Regionalizado</option>
                  </select>
                </label>
              </div>
            ) : (
              <div className="fila-tipoingreso ">
                <label>Ingreso por transferencia</label>

                <label>
                  UNIVERSIDAD DE ORIGEN:
                  <select required>
                    <option value="cedulaCiudadania" disabled selected>
                      Universidad
                    </option>
                    {universidades.map((universidad, index) => (
                      <option key={index} value={universidad.id}>
                        {universidad.nombre}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  PROGRAMA:
                  <select required>
                    <option value="cedulaCiudadania" disabled selected>
                      Programa
                    </option>
                    {programas.map((programa, index) => (
                      <option key={index} value={programa.id}>
                        {programa.nombre}
                      </option>
                    ))}
                  </select>
                </label>
                <label>
                  MODALIDAD:
                  <select required>
                    <option disabled selected>
                      Selección modalidad
                    </option>
                    <option value="presencial">Presencial</option>
                    <option value="virtual">Virtual</option>
                    <option value="regionalizado">Regionalizado</option>
                  </select>
                </label>
              </div>
            )}

            <hr />
          </div>
        </div>
      </form>
      <div className="contenedor-botones-footer">
        <Link to="/">
          <Boton text="Volver a pantalla principal" />
        </Link>
        <Link to="/registro">
          <Boton text="Atrás" />
        </Link>

        <Boton text="Enviar Ingreso" />
      </div>
    </div>
  );
}

export default Form;
