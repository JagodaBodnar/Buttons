import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,*::before,*::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: 'Catamaran', 'Helvetica', 'Arial', 'sans-serif';
    transition: all 0.25s linear;
  }
`;

export default GlobalStyle;
