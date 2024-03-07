import styled from 'styled-components'
import { breakpoints, colors } from '../../../styles'

export const SectionContainer = styled.section`
  margin-top: 60px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.black};
  justify-content: space-between;
  padding: 20px 100px;

  @media (max-width: ${breakpoints.desktop}) {
    flex-direction: column;
  }

  @media (max-width: ${breakpoints.tablet}) {
    text-align: center;
    padding: 20px;
  }

  img {
    max-width: 600px;
    width: 100%;
    border-radius: 20px;
    padding: 40px;
  }

  div {
    p {
      font-size: 28px;
      font-weight: bold;
      color: ${colors.white};

      @media (max-width: ${breakpoints.pc}) {
        font-size: 20px;
      }

      @media (max-width: ${breakpoints.desktop}) {
        font-size: 20px;
      }
    }

    h2 {
      font-size: 72px;
      font-weight: 300;
      color: ${colors.white};
      white-space: nowrap;

      @media (max-width: ${breakpoints.pc}) {
        font-size: 52px;
        white-space: wrap;
      }

      @media (max-width: ${breakpoints.desktop}) {
        font-size: 52px;
      }

      @media (max-width: ${breakpoints.mobile}) {
        font-size: 36px;
        white-space: wrap;
      }
    }
  }
`
