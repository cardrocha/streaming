import styled from 'styled-components'
import { colors } from '../../../styles'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  gap: 40px;
  margin: 0 auto;
  margin-top: 80px;
  padding-left: 40px;
  a {
    color: ${colors.white};
    font-size: 14px;
    text-decoration: none;
  }
`

export const TextFooter = styled.p`
  color: ${colors.white};
  font-size: 14px;
  text-align: center;
  padding-top: 32px;
`

export const ContainerSocial = styled.div`
  display: flex;
  justify-content: center;
  gap: 52px;
  background-color: ${colors.black};
  padding: 20px;
  margin-top: 40px;
`
