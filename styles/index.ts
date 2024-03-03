import { createGlobalStyle } from 'styled-components'

export const colors = {
  black: '#222',
  white: '#fff',
  blue: '#1B9CFC'
}

export const StyledGlobal = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif;
  list-style: none;
}
`
