import React from 'react';
import styled from 'styled-components';
import Board from './components/Board';
import Cell from './components/Cell';

const AppWrapper = styled.div`
width: 100%;
min-height: 100vh;
padding: 2rem;
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