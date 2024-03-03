import styled from 'styled-components'
import { colors } from '../../../styles'

export const ButtonContainer = styled.button`
  background-color: ${colors.blue};
  color: ${colors.white};
  font-size: 18px;
  font-weight: bold;
  padding: 10px 24px;
  border: none;
  border-radius: 8px;

  &:hover {
    background-color: ${colors.blueVariant};
    transform: scale(1.05);
  }
`
