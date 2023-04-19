import './App.css';
import './styles/Header.css'
import { Routes, Route } from "react-router-dom";
import PaginaPrincipal from './pages/PaginaPrincipal';
import RegistroIngreso from './pages/RegistroIngreso';
import Form  from './pages/Form.js';

function App() {
  return (
    <div>  

        <Routes>
         <Route path='/' element={<PaginaPrincipal />}/>
         <Route path='/registro' element={<RegistroIngreso />}/>
         <Route path='/registro/formulario' element={<Form />}/>
        </Routes>
    </div>
  );
}

export default App;
