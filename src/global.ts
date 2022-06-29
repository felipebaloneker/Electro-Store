import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    font-family: sans-serif;
    margin:0;
    padding:0;
  }
  :root {
    --highlight-color: #d10024;
    --searchbackground-color:#15161D;
    --background-color:#15161D;
    --text-color-menu:#000;
    --text-color-dark:#15161D;
    --text-color-gray:#B0B8C7;
    --text-color-light:#fff;
    --card-background:#E4E7ED;
    --card-highlight:#d10024;
  }
`;
export default GlobalStyle;
