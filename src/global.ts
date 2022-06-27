import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    font-family: monospace;
    margin:0;
    padding:0;
  }
  :root {
    --highlight-color: #d10024;
    --searchbackground-color:#15161D;
    --text-color-menu:#000;
    --text-color-light:#fff;
    --card-background:#E4E7ED;
    --card-highlight:#d10024;
  }
`;
export default GlobalStyle;
