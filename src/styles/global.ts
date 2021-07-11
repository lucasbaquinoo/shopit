import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  :root {
    --pale-spring-bud: #CCD5AE;
    --light-goldenrod-yellow: #E9EDC9;
    --cornsilk: #FEFAE0;
    --papaya-whip: #FAEDCD;
    --fawn: #D4A373;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
`