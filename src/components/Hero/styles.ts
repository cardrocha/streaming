import styled from 'styled-components'
import { ButtonContainer } from '../Button/styles'
import { colors } from '../../../styles'

export const SectionHero = styled.section`
  height: 660px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  border: 4px solid ${colors.black};
  border-radius: 10% 10% 50% 48% / 0% 0% 31% 34%;

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  z-index: 0;

  &::after {
    border-radius: 10% 10% 50% 48% / 0% 0% 31% 34%;
    position: absolute;
    background: ${colors.blueVariant};
    background: linear-gradient(
      177deg,
      ${colors.gradientBlue} 0%,
      ${colors.gradientBlack} 50%,
      ${colors.gradientBlack} 100%
    );
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.66;
    z-index: -1;
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  padding-top: 120px;
`

export const Text = styled.p`
  font-size: 40px;
  color: ${colors.white};
  z-index: 1;

  &:first-child {
    font-weight: bold;
  }
`

export const TextTitle = styled.h1`
  font-size: 92px;
  font-weight: bold;
  color: ${colors.white};
  z-index: 1;
`

export const TextVariant = styled(Text)`
  font-size: 28px;
  font-weight: normal;
  z-index: 1;
  margin-top: 24px;

  span {
    font-weight: bold;
    z-index: 1;
  }
`

export const ButtonVariant = styled(ButtonContainer)`
  padding: 14px 24px;
  z-index: 1;
`
