import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`

  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  html{
    font-size: 0.625em;
  }
  body {
    background: ${({ theme }) => theme.colors.darkColor};
    color: lightBlue;
    font-family: 'Poppins', sans-serif;
    font-size: 1.6rem;
    
  }

`

export default GlobalStyles