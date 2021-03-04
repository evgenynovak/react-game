import React, { useState , useEffect } from 'react';
import styled from 'styled-components';
import Board from './components/Board';
import Cell from './components/Cell';
import InfoScreen from './components/InfoScreen';

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
`

const FooterBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`
const LogoBlock = styled.a`
  width: 80px;
  height: 30px; 
  background: url('https://rs.school/images/rs_school_js.svg') no-repeat;
`
const GitBlock = styled.a`
   

`

let boardData = [
  {symbol: "A", status: "Closed"}, 
  {symbol: "F", status: "Closed"}, 
  {symbol: "A", status: "Closed"}, 
  {symbol: "B", status: "Closed"}, 
  {symbol: "C", status: "Closed"}, 
  {symbol: "D", status: "Closed"},
  {symbol: "D", status: "Closed"}, 
  {symbol: "E", status: "Closed"}, 
  {symbol: "F", status: "Closed"}, 
  {symbol: "B", status: "Closed"}, 
  {symbol: "E", status: "Closed"}, 
  {symbol: "C", status: "Closed"}
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

  useEffect(() => {
    if ((statusGame == "Run") && ((board.filter(cell => cell.status == "Open")).length == 2)) {
      let dataCell = board.filter(cell => cell.status == "Open");
      if (dataCell[0].symbol == dataCell[1].symbol) {
        setState(
          {
            ...state,
            board: board.map( (cell) => cell.status == "Open" ? {
              ...cell,
              status: "Done"
            } : cell),
          });
      } else {
        setTimeout( () => {
          setState(
            {
              ...state,
              board: board.map( (cell) => cell.status == "Open" ? {
                ...cell,
                status: "Closed"
              } : cell),
            });
        },500)
      };
    };
  },[state]);

  useEffect(() => {
    if (statusGame == "Run") {
      if ((board.filter(cell => cell.status == "Done").length == board.length)){
        setState(
          {
            ...state,
            statusGame: "Win",
          }); 
      }
    };
  },[state]);

  let handleStartGameClick = () => {
    if (statusGame != "Run") {
      setState(startGame);
    };
  };

  let handleClickAtCell = (i) => {
    if ((statusGame = "Run") && (CellLessTwo) && (board[i].status != "Done")) {
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

  return (
    <AppWrapper onClick={handleStartGameClick}>
      <InfoScreen statusGame={statusGame} board={board} onClickAtCell={handleClickAtCell} />
      <FooterBlock>
        <LogoBlock href={'https://rs.school/react/'}/>
        <GitBlock href={'https://github.com/evgenynovak'}> github.com/evgenynovak </GitBlock>
      </FooterBlock>
    </AppWrapper>
  );
}

export default App;