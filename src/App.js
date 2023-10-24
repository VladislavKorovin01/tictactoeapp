import './App.css';
import Board from './components/Board';
import React,{useEffect, useState} from 'react';

function App() {

  const[values,setValues] = useState([['','',''],['','',''],['','','']]);
  const[player, setPlayer] = useState('Player1');

  // useEffect(()=>{DefWinner()},[values])
  
  // myArr[0][0] = 999;
  // console.log(myArr);
function addValueSquare(value,r,c){
  // console.log(value);
  // console.log("row: " + r + " column: " + c);
  const myArr = values.slice();
  myArr[r][c]=value
  setValues(myArr);
  // console.log(values);
  // setPlayer(player==='Player1' ? 'Player2' : 'Player1');
  DefWinner();
}

function DefWinner(){
  const winnerArray = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];

  // console.log("winnerArray " + winnerArray.length);

  for(let i=0; i<winnerArray.length-1;i++){
    const[a,b,c] = winnerArray[i];
    // console.log(values[a], values[b], values[c]);

    if(values[a] && values[a]===values[b] && values[a]===values[c]){
      alert('Выиграл игрок - ' + values[a]);
      // console.log("a: " + a + " b: " + b + " c: " + c);
    }
  }

}
  return (
    <div className="App">
      <h1>Tic-Tac-Toe application</h1>
      <div>Ходит:  {player}</div>
      <Board addValue={addValueSquare}/> 
      {/* {myArr.map((item)=><div>{item}</div>)} */}
    </div>
  );
}

export default App;
