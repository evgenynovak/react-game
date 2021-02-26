import React from 'react';
import styled from 'styled-components';
import Board from './Board';

const InfoScreenBlock = styled.div`
  display: flex;
  flex-flow: column;
  width: 700px;
  height: 500px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background: ${props => props.background};
`
const InfoScreenH1 = styled.h1`
  font-size: 4rem;
  padding: 1rem;
`
const InfoScreenP = styled.p`
  font-size: 2rem;
`

function InfoScreen({statusGame, board , onClickAtCell}) {

  const backgroundColor = (statusGame) => {
    switch(statusGame) {
      case "Run": return "#FFEF9F"
      break;
      case "Stop": return "#90F1EF"
      break;
      case "Win": return "#C1FBA4"
      break;
      case "Lost": return "#FFD6E0"
      break;
      default: return ""
    }
  }

  switch (statusGame) {
    case "Run":
      return <Board board={board} onClickAtCell={onClickAtCell} />

    case "Stop":
      return <InfoScreenBlock background={backgroundColor(statusGame)}>
        <InfoScreenH1>Memory Game</InfoScreenH1>
        <InfoScreenP>Нажмите для старта!</InfoScreenP>
      </InfoScreenBlock>

    case "Win":
      return <InfoScreenBlock background={backgroundColor(statusGame)}>
          <InfoScreenH1>Победа!</InfoScreenH1>
          <InfoScreenP>Нажмите для старта!</InfoScreenP>
      </InfoScreenBlock>

    case "Lost":
      return <InfoScreenBlock background={backgroundColor(statusGame)}>
         <InfoScreenH1>Поражение!</InfoScreenH1>
         <InfoScreenP>Нажмите для старта!</InfoScreenP>
      </InfoScreenBlock>

  }
}

export default InfoScreen;