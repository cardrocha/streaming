import styled from 'styled-components'
import { colors } from '../../../styles'
import { ButtonContainer } from '../Button/styles'

export const Header = styled.header`
  padding: 8px 16px;
  background-color: ${colors.black};
  color: ${colors.white};
`

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ItemLink = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 4px;
`

export const ButtonLink = styled(ButtonContainer)`
  background-color: transparent;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background-color: ${colors.gray};
  }
`
