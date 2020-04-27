import React from 'react';
import TextEditor from './TextEditor';
import './App.css';

function App() {
  return (
    <div className="App">
        <h1>Editor de texto</h1>
        <p> Esse é o editor de texto do José, feito usando React js e a biblioteca Draft js</p>
        <TextEditor/>
    </div>
  );
}

export default App;
