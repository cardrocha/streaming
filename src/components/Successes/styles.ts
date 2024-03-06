import styled from 'styled-components'
import { colors } from '../../../styles'

export const SectionContainer = styled.section`
  margin-top: 60px;
`

export const Container = styled.div`
  display: flex;
  align-items: center;
  background-color: ${colors.black};
  justify-content: space-between;
  padding: 20px 100px;

  img {
    width: 600px;
    border-radius: 20px;
    padding: 40px;
  }

  div {
    p {
      font-size: 28px;
      font-weight: bold;
      color: ${colors.white};
    }

    h2 {
      font-size: 72px;
      font-weight: 300;
      color: ${colors.white};
      white-space: nowrap;
    }
  }
`
