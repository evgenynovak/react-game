import React from 'react';
import styled from 'styled-components';
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
let cellDone = {symbol: "C", status: "Done"};
let cellFailed = {symbol: "D", status: "Failed"};
//

function App() {
  return (
    <AppWrapper>
      <Cell cell={cellOpen}/>
      <Cell cell={cellClosed}/>
      <Cell cell={cellDone}/>
      <Cell cell={cellFailed}/>
    </AppWrapper>
  )
}

export default App;