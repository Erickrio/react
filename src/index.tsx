import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import http from './utils/http'

//API DO FETCH
//fetch('https://jsonplaceholder.typicode.com/posts')

// http.get('/posts')
// http.get('/posts/1')
// http.get('https://viacep.com.br/ws/200000/json/')

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
