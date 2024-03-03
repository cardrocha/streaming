import * as S from './styles'
import hero from '../../assets/hero.png'

const Hero = () => {
  return (
    <S.SectionHero style={{ backgroundImage: `url(${hero})` }}>
      <S.Container>
        <S.Text>Chegou!</S.Text>
        <div>
          <S.TextTitle>Streaming</S.TextTitle>
          <S.Text>Muito mais filmes e series</S.Text>
        </div>
        <S.TextVariant>
          Planos a partir de <span>18,90 / mês</span>
        </S.TextVariant>
      </S.Container>
      <S.ButtonVariant type={'button'} title={'clique e assine'}>
        Assine Agora
      </S.ButtonVariant>
    </S.SectionHero>
  )
}

export default Hero
