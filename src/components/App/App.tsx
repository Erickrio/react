import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header';
import Button from '../Button';
//import TestComponent from './components/TestComponent/TestComponent'

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      
      <div className="Container">
        <Button  
        onClick={()=>window.alert('Windowns alert personalizado')}
        >
        Stark  
        <img src="https://rollingstone.uol.com.br/media/_versions/tony-stark-iron-man-danslott-reprod-marvel-comics_widelg.jpg" alt="stark"/>

       </Button>
       
      </div>

    </div>
  );
}
// imagem ou string - stark - props.children o captura
export default App;
