import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const text = 'Hello World'

const elem = (
  <div>
    <h2 className='text' >Текст: {text}</h2>
    <input type = "text" name='textPole'/>
    <label htmlFor="textPole">tyt text</label>
    <button tabIndex={0} >Click</button>
  </div>
);  //вариант с JSX





const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  elem
);

