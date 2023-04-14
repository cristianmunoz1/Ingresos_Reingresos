import './App.css';
import Boton from './components/Boton';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header text="Página para ingresos UdeA"/>
      <div className='contenedor-botones'>
        <Boton text="Estudiantes/Aspirantes"/>
        <Boton text="Admisiones"/>
      </div>
      
    </div>
  );
}

export default App;
