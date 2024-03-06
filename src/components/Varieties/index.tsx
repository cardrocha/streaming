import * as S from './styles'
import child from '../../assets/infantil.jpeg'
import reality from '../../assets/reality.jpeg'
import novela from '../../assets/novela.jpeg'
import action from '../../assets/action.jpeg'
import hero from '../../assets/heroi.jpeg'
import anime from '../../assets/anime.jpeg'

const Varieties = () => {
  return (
    <section>
      <S.Paragraph>
        Muito mais a ver. Conheça nossa plataforma, opções pra familia toda.
        <br />
        Escolha seus favoritos e as aproveite melhores estreias, só aqui.
      </S.Paragraph>
      <S.ContainerList>
        <S.ContanierItem>
          <img src={child} alt="banner familia" />
          <S.TextItem>CRIANÇAS E FAMÍLIA</S.TextItem>
        </S.ContanierItem>
        <S.ContanierItem>
          <img src={reality} alt="banner reality" />
          <S.TextItem>REALITY</S.TextItem>
        </S.ContanierItem>
        <S.ContanierItem>
          <img src={novela} alt="banner novela" />
          <S.TextItem>NOVELA</S.TextItem>
        </S.ContanierItem>
        <S.ContanierItem>
          <img src={action} alt="banner filme" />
          <S.TextItem>FILME</S.TextItem>
        </S.ContanierItem>
        <S.ContanierItem>
          <img src={hero} alt="banner aventura" />
          <S.TextItem>AVENTURA</S.TextItem>
        </S.ContanierItem>
        <S.ContanierItem>
          <img src={anime} alt="" />
          <S.TextItem>ANIME</S.TextItem>
        </S.ContanierItem>
      </S.ContainerList>
    </section>
  )
}

export default Varieties
