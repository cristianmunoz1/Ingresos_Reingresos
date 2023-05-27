import React from 'react';
import './styles/Tabla.css';
import ModalIngresoPuntaje from './Modal';
import { useState } from 'react';
import applicants from '../shared/data/applicants';


const Tabla = () => {
  
  const [ search, setSearch ] = useState('');
  

  const searcher = (e) => {
    setSearch(e.target.value);
  };

  let results = [];
  if(!search){
    results = applicants;
  }else{
    results = applicants.filter((dato) => 
    dato.id.toString().toLowerCase().includes(search.toLocaleLowerCase()));
  }

  return (
  <div className='contenedor-general'>
    <div className='contenedor-input'>
      <input value={search} onChange={searcher} type="text" placeholder='Número de identificación' className='form-control' />
    </div>
    
    <div className="contenedor-tabla">
      
      <table className="bordered">
        <thead>
          <tr>
            <th>Identificación</th>
            <th>Nombre</th>
            <th>Código de programa</th>
            <th>Programa</th>
            <th>Sede</th>
            <th>Modalidad</th>
          </tr>
        </thead>
        <tbody>
          { results.map((users) => (
            <tr key={users.id
            }>
              <td><ModalIngresoPuntaje text={users.id} name = {users.name}></ModalIngresoPuntaje></td>
              <td>{users.name}</td>
              <td>{users.programa.idPrograma}</td>
              <td>{users.programa.programName}</td>
              <td>{users.sede}</td>
              <td>{users.modalidad}</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Tabla;
