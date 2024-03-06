import { createGlobalStyle } from 'styled-components'

export const colors = {
  black: '#222',
  blackOpacity: 'rgba(0, 0, 0, 0.8)',
  white: '#fff',
  blue: '#002be7',
  blueVariant: '#001c9a',
  blueSecondary: '#000066',
  blueLight: '#00F0FF',
  gray: '#415a77',
  gradientGray: 'rgba(255, 255, 255, 0.15)',
  gradientBlue: 'rgba(0, 28, 154, 1)',
  gradientBlack: 'rgba(0, 0, 0, 1)',
  transparent: 'transparent'
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
