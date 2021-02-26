import React from 'react';
import styled from 'styled-components';
import Cell from './Cell';

const BoardBlock = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  width: 700px;
  height: 700px;
  gap: 3px;
`

function Board ({board, onClickAtCell}) {
  return (
    <BoardBlock>
      {board.map( (cell, i) =>
        <Cell key={i} cell={cell} onClick={ () => onClickAtCell(i)} />
      )}
    </BoardBlock>
  );
}

export default Board;