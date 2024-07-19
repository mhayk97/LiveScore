// styles/GlobalStyle.js
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Barlow', sans-serif;
    background-color: #333;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 600;
  }

  a {
    text-decoration: none; /* Remove underline */
    color: inherit; /* Use the current text color */
    cursor: pointer; /* Make it look like a link */
    
  
  }
`;

export default GlobalStyle;
