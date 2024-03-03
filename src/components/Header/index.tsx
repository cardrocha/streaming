import Button from '../Button'
import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      <S.Menu>
        <h1>Streaming</h1>
        <S.ItemLink>
          <S.ButtonLink type="button" title="clique e logue com sua conta">
            Entrar
          </S.ButtonLink>
          <Button type="button" title="clique e assine">
            Assine Agora
          </Button>
        </S.ItemLink>
      </S.Menu>
    </S.Header>
  )
}

export default Header
