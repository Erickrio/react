import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header';
import Button from '../Button';
//import TestComponent from './components/TestComponent/TestComponent'

function TestComponent () {
  return <img width="16" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Search_Icon.svg/1024px-Search_Icon.svg.png"  alt="serch icon"/>
}

function App() {
  return (
    <div className="App">
      <Header title="AlgaStock" />
      
      <div className="Container">
        <Button  
        onClick={()=>window.alert('Uiiii ui ')}
        appendIcon={<TestComponent />}
        >
       alert

       </Button>
       
      </div>

    </div>
  );
}
// imagem ou string - stark - props.children o captura
export default App;
