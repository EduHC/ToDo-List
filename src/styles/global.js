import { createGlobalStyle } from 'styled-components';

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
  background-color: #E7E9EA;
  -webkit-font-smoothing: antialiased !important;

  ::-webkit-scrollbar {
    width: 10px;
    border-radius: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background: #504547;
    border-radius: 10px;
  }

  }

  button {
    cursor: pointer;
  }
`;
