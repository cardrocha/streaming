import arrowUp from '../../assets/seta-up.svg'
import arrowDown from '../../assets/seta-down.svg'
import * as S from './styles'
import { useState } from 'react'
import Question from '../../models/questions'

type Props = {
  question: Question[]
}

const Questions = ({ question }: Props) => {
  const [arrown, setArrown] = useState<number | null>(null)

  const handleQuestionClick = (questionId: number) => {
    if (arrown === questionId) {
      setArrown(null)
    } else {
      setArrown(questionId)
    }
  }

  return (
    <section>
      <S.TitleSection>Perguntas Frequentes</S.TitleSection>
      {question.map((question) => (
        <S.ContainerQuestion key={question.id}>
          <S.TitleQuestion>{question.title}</S.TitleQuestion>
          <img
            onClick={() => handleQuestionClick(question.id)}
            src={arrown === question.id ? arrowUp : arrowDown}
            alt="icone de seta"
          />
          <hr />
          <S.TextParagraph isActive={arrown === question.id}>
            {question.answer}
          </S.TextParagraph>
        </S.ContainerQuestion>
      ))}
      {/* <S.ContainerQuestion>
        <S.TitleQuestion>Onde Streaming está disponível?</S.TitleQuestion>
        <S.TextParagraph isActive={!arrown}>
          Nossa plataforma aprimorada está disponível para Anguila, Antígua e
          Barbuda, Argentina, Aruba, Bahamas, Barbados, Belize, Bolívia, Brasil,
          Chile, Colômbia, Costa Rica, Curaçao, Dominica, Equador, El Salvador,
          Granada, Guatemala, Guiana, Haiti, Honduras, Ilhas Virgens Britânicas,
          Ilhas Cayman, Jamaica, México, Montserrat, Nicarágua, Panamá,
          Paraguai, Peru, República Dominicana, Saint Kitts e Nevis, Santa
          Lúcia, São Vicente e Granadinas, Suriname, Trinidad e Tobago, Turks e
          Caicos, Uruguai, Venezuela e Estados Unidos.
        </S.TextParagraph>
      </S.ContainerQuestion> */}
    </section>
  )
}

export default Questions
