import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    font-family: monospace;
  }
  :root {
    --highlight-color: #d10024;
    --searchbackground-color:#15161D;
    --text-color-menu:#000;
    --text-color-light:#fff;
  }
`;
export default GlobalStyle;
