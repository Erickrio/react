import React, {useState} from 'react';
import './App.css';
import Header from '../Header';
import Button from '../../shared/Button';
import Container from '../../shared/Container';
import Input from '../../shared/Input/Input';


function TestComponent () {
  return <img width="16" src="https://img.icons8.com/pastel-glyph/2x/search--v2.png" alt="search icon" />
}

function App() {
  const [street, setStreet] = useState('')

  return (
    <div className="App">
      <Header title="AlgaStock" />

      <Container>
        <ul>
          {
            ['Erick','Thais','Bob','Bob'].map((name,index) =>{
              return <li key={index}>
                {name}
              </li>
            })
          }
        </ul>
      </Container>
    </div>
  );
}
//iteração de arrays utilizando map - interação de lista de dados
export default App;