import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles'

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1000px;
  gap: 10px;
  margin: 0 auto;
  margin-top: 80px;
  padding-left: 40px;
  a {
    color: ${colors.white};
    font-size: 14px;
    text-decoration: none;
    background-color: ${colors.transparent};
    padding: 10px 16px;
    border-radius: 10px 10px 10px 10px;

    &:hover {
      background-color: ${colors.gray};
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    justify-content: center;
    width: 700px;
    padding-left: 0;
  }

  @media (max-width: ${breakpoints.mobile}) {
    width: 350px;
    padding-left: 0;
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
