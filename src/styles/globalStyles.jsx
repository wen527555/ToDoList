import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    html,body {
    background-color: #ECECEC; 
    color: #000000;
    font-family: Inter
  }
   ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
  }

  button {
    border: none;
    background: none;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
  }

`;

export default GlobalStyle;
