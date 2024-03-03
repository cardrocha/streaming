import styled from 'styled-components'
import { ButtonContainer } from '../Button/styles'
import { colors } from '../../../styles'

export const SectionHero = styled.section`
  height: 480px;
  width: 100%;
  margin: 0 auto;
  text-align: center;
  position: relative;
  border: 4px solid ${colors.black};

  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  z-index: 0;

  &::after {
    position: absolute;
    background-color: ${colors.black};
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
  gap: 28px;
  margin-bottom: 16px;
  padding-top: 80px;
`

export const Text = styled.p`
  font-size: 40px;
  font-weight: bold;
  color: ${colors.white};
  z-index: 1;
`

export const TextTitle = styled.h1`
  font-size: 72px;
  font-weight: bold;
  color: ${colors.white};
  z-index: 1;
`

export const TextVariant = styled(Text)`
  font-size: 32px;
  font-weight: normal;
  z-index: 1;

  span {
    font-weight: bold;
    z-index: 1;
  }
`

export const ButtonVariant = styled(ButtonContainer)`
  padding: 14px 24px;
  z-index: 1;
`
