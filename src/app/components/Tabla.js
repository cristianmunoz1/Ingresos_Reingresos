import React from 'react';
import './styles/Tabla.css';
import ModalIngresoPuntaje from './Modal';
import { useState, useEffect } from 'react';


const Tabla = () => {

  const [ users, setUsers ] = useState([])
  const [ search, setSearch ] = useState("")

  const URL = "https://jsonplaceholder.typicode.com/users";

  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();

    setUsers(data)
  }


  useEffect(()=> {
    showData();
  }, [])
  

  const searcher = (e) => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  let results = []
  if(!search){
    results = users;
  }else{
    results = users.filter((dato) => 
    dato.name.toLowerCase().includes(search.toLocaleLowerCase()))
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
            <tr>
              <td><ModalIngresoPuntaje text={users.id} name = {users.name}></ModalIngresoPuntaje></td>
              <td>{users.name}</td>
              <td>{users.address.zipcode}</td>
              <td>{users.address.street}</td>
              <td>{users.address.city}</td>
              <td>{users.email}</td>
            </tr>
          )) }
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Tabla;
