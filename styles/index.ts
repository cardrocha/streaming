import { createGlobalStyle } from 'styled-components'

export const colors = {
  black: '#222',
  white: '#fff',
  blue: '#002be7',
  blueVariant: '#001c9a',
  gray: '#415a77'
}

export const StyledGlobal = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  list-style: none;
}

body {
  background-color: ${colors.blueVariant};
}
`
