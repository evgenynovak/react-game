import React, { useState } from 'react';
import styled from 'styled-components';
import Board from './components/Board';
import Cell from './components/Cell';
import InfoScreen from './components/InfoScreen'

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #ffffff;
`
let boardData = [
  {symbol: "A", status: "Closed"}, 
  {symbol: "B", status: "Closed"}, 
  {symbol: "C", status: "Closed"}, 
  {symbol: "B", status: "Closed"}, 
  {symbol: "C", status: "Closed"}, 
  {symbol: "D", status: "Closed"}
];
//

let startGame = () => ({
  board: boardData,
  statusGame: "Run",
});

function App() {
  let [state, setState] = useState({
    ...startGame(),
    statusGame: "Stop", 
  });

  let {board, statusGame} = state;

  let handleStartGameClick = () => {
    console.log("GameClick: "+ JSON.stringify(state))
    if (statusGame != "Run") {
      setState(startGame);
    };
  };

  let handleClickAtCell = (i) => {
    if ((statusGame = "Run") && (CellLessTwo) && (board[i].status != "Done")) {
      console.log("board "+board[i].status);
      setState(
        {
          ...state,
          board: board.map( (cell,index) => index == i ? {
            ...cell,
            status: "Open"
          } : cell),
        });
    };   
  };

  let CellLessTwo = (board.filter(cell => cell.status == "Open")).length < 2 ;

  //help
  console.log(statusGame);
  console.log("return "+JSON.stringify(state));

  return (
    <AppWrapper onClick={handleStartGameClick}>
      <InfoScreen statusGame={statusGame} board={board} onClickAtCell={handleClickAtCell} />
    </AppWrapper>
  );
}

export default App;