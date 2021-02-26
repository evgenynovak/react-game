import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled , {createGlobalStyle} from 'styled-components';

const Global = createGlobalStyle`
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box; 
    font-family: sans-serif;
    font-size: 16px;
}
`

ReactDOM.render(
    <>
      <Global />
      <App />
    </>,
  document.getElementById('root')
);


