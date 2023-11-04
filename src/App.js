import './App.css';
import Boton from './components/boton';
import BotonClear from './components/btnClear';
import Pantalla from './components/pantalla';
import loguito from './images/f_logo.png'
import { useState } from 'react';
import { evaluate } from 'mathjs';
function App() {
  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const limpiarInput = () => {
    setInput('');
  };

  const calculoResultado = () => {
    if(input) {
      setInput(evaluate(input));
    }else{
      alert('Por favor ingrese valores para realizar los calculos');
    }
  };

  return (
    <div className="App">
      <div className='logo-contenedor'>
        <img className='logo'
        src={loguito}
        alt='Logo de app'></img>
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla 
          input={input} 
        />
        <div className='fila'>
          <Boton manejarBoton = {agregarInput}>1</Boton>
          <Boton manejarBoton = {agregarInput}>2</Boton>
          <Boton manejarBoton = {agregarInput}>3</Boton>
          <Boton manejarBoton = {agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarBoton = {agregarInput}>4</Boton>
          <Boton manejarBoton = {agregarInput}>5</Boton>
          <Boton manejarBoton = {agregarInput}>6</Boton>
          <Boton manejarBoton = {agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarBoton = {agregarInput}>7</Boton>
          <Boton manejarBoton = {agregarInput}>8</Boton>
          <Boton manejarBoton = {agregarInput}>9</Boton>
          <Boton manejarBoton = {agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarBoton = {calculoResultado}>=</Boton>
          <Boton manejarBoton = {agregarInput}>0</Boton>
          <Boton manejarBoton = {agregarInput}>.</Boton>
          <Boton manejarBoton = {agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarBoton= {limpiarInput}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
