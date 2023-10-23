import './App.css';
import Board from './components/Board';
import React,{useState} from 'react';

function App() {

  const[step, setStep]=useState('');

  return (
    <div className="App">
      <h1>Tic-Tac-Toe application</h1>
      <Board/>
    </div>
  );
}

export default App;
