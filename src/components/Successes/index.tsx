import space from '../../assets/espacial.jpeg'
import reality from '../../assets/reality.jpeg'
import favority from '../../assets/fiction.jpeg'
import family from '../../assets/heroi.jpeg'
import movie from '../../assets/action.jpeg'
import * as S from './styles'

const Successes = () => {
  return (
    <S.SectionContainer className="container">
      <S.Container>
        <div>
          <p>MUITO MAIS</p>
          <h2>Sucessos</h2>
        </div>
        <img src={movie} alt="banner animação" />
      </S.Container>
      <S.Container>
        <div>
          <p>MUITO MAIS</p>
          <h2>Realidade</h2>
        </div>
        <img src={reality} alt="Banner reality" />
      </S.Container>
      <S.Container>
        <div>
          <p>MUITO MAIS</p>
          <h2>Dos seus Favoritos</h2>
        </div>
        <img src={favority} alt="Banner favoritos" />
      </S.Container>
      <S.Container>
        <div>
          <p>MUITO MAIS</p>
          <h2>Diversão em Família</h2>
        </div>
        <img src={family} alt="Banner família" />
      </S.Container>
      <S.Container>
        <div>
          <p>MUITO MAIS</p>
          <h2>Do Cinema pra Steaming</h2>
        </div>
        <img src={space} alt="Banner cinema" />
      </S.Container>
    </S.SectionContainer>
  )
}

export default Successes
