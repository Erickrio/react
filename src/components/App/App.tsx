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
        <Button />
      </div>

    </div>
  );
}

export default App;
