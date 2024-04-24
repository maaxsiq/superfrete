import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *::-webkit-scrollbar {
    width: 12px;

  }

  *::-webkit-scrollbar-track {
    background: transparent;
    margin-top: 16px;
    margin-bottom: 16px;
  }

  *::-webkit-scrollbar-thumb {
    background-color: #CCCCCC;
    border-radius: 999px;
    border: 6px solid rgba(0,0,0,0);

  }

  body,html {
    font-family: 'Poppins';
    height: 100%;
    width: 100%;
  }
`;

export default GlobalStyle;
