import styled from 'styled-components'
import { colors } from '../../../styles'

export const Paragraph = styled.p`
  font-size: 36px;
  text-align: center;
  color: ${colors.white};
  max-width: 1366px;
  margin: 0 auto;
  margin-top: 60px;
`

export const ContainerList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 2px;
  margin-top: 100px;
  border-bottom: 20px solid ${colors.white};
`

export const ContanierItem = styled.li`
  img {
    width: 260px;
    height: 600px;
    object-fit: cover;
  }
`

export const TextItem = styled.p`
  font-size: 18px;
  color: ${colors.white};
  font-weight: bold;
  text-align: center;
  margin: 14px 0;
`
