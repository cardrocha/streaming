import * as S from './styles'

const Header = () => {
  return (
    <S.Header>
      <S.Menu>
        <h1>Streaming</h1>
        <S.ItemLink>
          <S.Item>Entrar</S.Item>
          <S.ItemVariant>Assine Agora</S.ItemVariant>
        </S.ItemLink>
      </S.Menu>
    </S.Header>
  )
}

export default Header
