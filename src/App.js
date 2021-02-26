import React from 'react';
import styled from 'styled-components';
import Board from './components/Board';
import Cell from './components/Cell';

const AppWrapper = styled.div`
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background: #ffffff;
`

//helpData
let cellOpen = {symbol: "A", status: "Open"};
let cellClosed = {symbol: "B", status: "Closed"};
let cellClosed2 = {symbol: "C", status: "Closed"};
let cellClosed3 = {symbol: "B", status: "Closed"};
let cellDone = {symbol: "C", status: "Done"};
let cellFailed = {symbol: "D", status: "Failed"};

let board = [cellOpen, cellClosed, cellClosed2, cellClosed3, cellDone, cellFailed];
//

function App() {
  return (
    <AppWrapper>
      <Board board={board} onClickAtCell={() => null}/>
    </AppWrapper>
  );
}

export default App;