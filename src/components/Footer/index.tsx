import * as S from './styles'
import facebook from '../../assets/logo-facebook.svg'
import instagram from '../../assets/logo-instagram.svg'
import twitter from '../../assets/logo-twitter.svg'
import youtube from '../../assets/logo-youtube.svg'

const Footer = () => {
  return (
    <footer>
      <S.Container>
        <a href="#">AGORA NO STREAMING</a>
        <a href="#">FILMES</a>
        <a href="#">SÉRIES</a>
        <a href="#">EPISÓDIOS GRÁTIS</a>
        <a href="#">ESPORTES</a>
        <a href="#">CRIANÇAS E FAMÍLIA</a>
        <a href="#">AJUDA</a>
        <a href="#">Política de Privacidade</a>
        <a href="#">Modo Infantil</a>
        <a href="#">Termos De Uso</a>
        <a href="#">Gerenciar Preferências De Cookies</a>
        <a href="#">Comunicados Para A Imprensa</a>
      </S.Container>
      <S.TextFooter>
        ©2024 Entretenimento Infinito, LLC. Todos os direitos reservados.
        Streaming é usado sob licença.
      </S.TextFooter>
      <S.ContainerSocial>
        <a href="#">
          <img src={facebook} alt="facebook" />
        </a>
        <a href="#">
          <img src={instagram} alt="instagram" />
        </a>
        <a href="#">
          <img src={twitter} alt="twitter" />
        </a>
        <a href="#">
          <img src={youtube} alt="youtube" />
        </a>
      </S.ContainerSocial>
    </footer>
  )
}

export default Footer
