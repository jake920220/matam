import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  * {
    font-family: 'Spoqa Han Sans Neo', 'sans-serif' !important;
  }
  
  html, body, #root, #contentWrap {
    height: 100%;
  }
  
  body {
    min-width: 320px !important;
  }
  
  #root {
    position: relative;
  }
  
  button {
    cursor: pointer;
    background: none;
    border: 0;
    outline: 0;
    padding: 0;
  }
  
  a {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyle;
