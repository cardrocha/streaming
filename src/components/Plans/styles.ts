import styled from 'styled-components'
import { colors } from '../../../styles'
import { ButtonContainer } from '../Button/styles'

type TabButtonProps = {
  isActive: boolean
}

export const SectionPlans = styled.section`
  position: relative;
`

export const Title = styled.h2`
  font-size: 36px;
  text-align: center;
  color: ${colors.white};
  margin-top: 120px;
`
export const ContainerPlans = styled.div`
  position: absolute;
  top: 90px;
  left: 600px;
  display: inline-flex;
  background-color: ${colors.gradientGray};
  border: 1px solid ${colors.gradientGray};
  border-radius: 68px 68px 68px 68px;
  padding: 4px;
`

export const ButtonPlans = styled(ButtonContainer)<TabButtonProps>`
  background-color: ${(props) =>
    props.isActive ? colors.white : colors.transparent};
  color: ${(props) => (props.isActive ? colors.black : colors.white)};
  padding: 8px 42px;
  border-radius: 68px 68px 68px 68px;
  cursor: pointer;

  &:hover {
    background-color: ${(props) =>
      props.isActive ? colors.white : colors.gray};
    transform: scale(1);
    transition: all 0.9s;
  }
`
export const ContainerCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-top: 100px;
`

export const CardItem = styled.div`
  width: 380px;
  height: 380px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${colors.white};
  color: ${colors.black};
  padding: 16px 24px;
  border-radius: 8px;
`

export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const TitleCard = styled.h3`
  font-size: 28px;
  color: ${colors.blueSecondary};
  font-weight: 700;
  margin-bottom: 8px;
`

export const TextDesconty = styled.p`
  font-size: 12px;
  font-weight: bold;
  text-align: center;
  margin-left: 180px;
  margin-top: 20px;
  color: ${colors.blueLight};
`

export const TextCard = styled.p`
  font-size: 14px;
  color: ${colors.blueSecondary};
  font-weight: normal;

  span {
    font-weight: bold;
  }
`
export const ContainerPrices = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
`
export const TextCardVariant = styled.p`
  font-size: 36px;
  color: ${colors.blueSecondary};
  font-weight: bold;

  span {
    font-size: 20px;
    font-weight: bold;
    color: ${colors.gray};
  }
`
export const TextOBS = styled.p`
  font-size: 12px;
  text-align: start;
  color: ${colors.white};
  width: 600px;
  height: 52px;
  margin: 0 auto;
  margin-top: 20px;

  a {
    color: ${colors.gray};
  }
`

export const ButtonPlan = styled(ButtonContainer)`
  font-size: 16px;
  width: 65%;
  margin: 0 auto;
  margin-top: 24px;
  padding: 14px 24px;
`
