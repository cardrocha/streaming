import styled from 'styled-components'
import { colors } from '../../../styles'

type TabButtonProps = {
  isActive?: boolean
}

export const TitleSection = styled.h2`
  font-size: 36px;
  font-weight: 400;
  text-align: center;
  color: ${colors.white};
  padding-top: 80px;
`
export const ContainerQuestion = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  position: relative;

  img {
    position: absolute;
    top: 16px;
    right: 0;
    cursor: pointer;
  }
`

export const TitleQuestion = styled.h3`
  font-size: 24px;
  font-weight: 100;
  text-align: start;
  color: ${colors.white};
  padding: 20px 24px 20px 0;
`

export const TextParagraph = styled.p<TabButtonProps>`
  max-height: ${(props) => (props.isActive ? '100px' : '0')};
  overflow: hidden;
  font-size: 18px;
  font-weight: 300;
  text-align: start;
  color: ${colors.white};
  padding: ${(props) => (props.isActive ? '20px 10px' : '0')};
  margin: ${(props) => (props.isActive ? '20px 0' : '0')};
  transition: max-height 0.5s ease-out, padding 0.5s ease-out,
    margin 0.5s ease-out;
`
