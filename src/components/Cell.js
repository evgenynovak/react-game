import React from 'react';
import styled from 'styled-components';


const CellBlock = styled.div`
  display: flex;
  min-height: 100px;
  align-items: center;
  justify-content: center;
  font-size: 5rem;
  background: ${props => props.background};
  cursor: ${props => props.cursor }

`

function Cell({cell, onClick}) {
  let {symbol, status} = cell;

  const backgroundColor = (status) => {
    switch(status) {
      case "Open": return "#FFEF9F"
      break;
      case "Closed": return "#90F1EF"
      break;
      case "Done": return "#C1FBA4"
      break;
      case "Failed": return "#FFD6E0"
      break;
      default: return ""
    }
  }

  return (
    <CellBlock background={backgroundColor(status)} cursor={status === "Closed" ? "pointer" : ""}>
        {status == "Closed" ? "" : symbol}
    </CellBlock>
  );
}

export default Cell;






