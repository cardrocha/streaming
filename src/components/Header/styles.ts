import styled from 'styled-components'
import { colors } from '../../../styles'

export const Header = styled.header`
  padding: 20px;
  background-color: ${colors.black};
  color: ${colors.white};
`

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
`

export const ItemLink = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  gap: 16px;
`

export const Item = styled.li`
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`

export const ItemVariant = styled(Item)`
  background-color: ${colors.blue};
  padding: 8px 16px;
  border-radius: 8px;

  &:hover {
    filter: brightness(0.9);
  }
`
