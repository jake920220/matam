import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
  @import url(https://spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
  
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
  
  #headerWrap, #footerWrap {
    position: fixed;
    z-index: 20;
  }
  
  #footerWrap {
    
  }
`;

export default GlobalStyle;
