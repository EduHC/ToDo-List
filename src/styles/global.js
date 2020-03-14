import { createGlobalStyle } from 'styled-components';
import image from '../images/fundo2.jpg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    min-height: 100%;
  }

  body {
  background-image: url(${image});
  background-repeat: no-repeat;
  background-size: 100%;
  background-position: center;
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased !important;
  }


  button {
    cursor: pointer;
  }
`;
