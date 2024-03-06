import { useState } from 'react'
import * as S from './styles'

const Plans = () => {
  const [plans, setPlans] = useState(false)

  return (
    <S.SectionPlans>
      <S.Title>ESCOLHA O MELHOR PLANO PARA VOCÊ</S.Title>
      <S.TextDesconty>ECONOMIZE ATÉ 36%</S.TextDesconty>
      <S.ContainerPlans>
        <S.ButtonPlans
          isActive={!plans}
          onClick={() => setPlans(false)}
          title="clique aqui"
          type="button"
        >
          MENSAL
        </S.ButtonPlans>
        <S.ButtonPlans
          isActive={plans}
          onClick={() => setPlans(true)}
          title="clique aqui"
          type="button"
        >
          ANUAL PARCELADO
        </S.ButtonPlans>
      </S.ContainerPlans>
      {!plans ? (
        <S.ContainerCard>
          <S.CardItem>
            <S.ContainerDescription>
              <S.TitleCard>Básico com Anúncios</S.TitleCard>
              <hr />
              <S.TextCard>
                <span>2 dispositivos</span> ao mesmo tempo
              </S.TextCard>
              <S.TextCard>
                Resolução <span>Full HD</span>
              </S.TextCard>
            </S.ContainerDescription>

            <S.ContainerPrices>
              <S.TextCardVariant>
                R$29,90<span>/mês</span>
              </S.TextCardVariant>
              <S.ButtonPlan type="button" title="clique aqui">
                ESCOLHA SEU PLANO
              </S.ButtonPlan>
            </S.ContainerPrices>
          </S.CardItem>
          <S.CardItem>
            <S.ContainerDescription>
              <S.TitleCard>Standard</S.TitleCard>
              <hr />
              <S.TextCard>
                <span>2 dispositivos</span> ao mesmo tempo
              </S.TextCard>
              <S.TextCard>
                Resolução <span>Full HD</span>
              </S.TextCard>
              <S.TextCard>
                <span>30 downloads</span> para curtir off-line
              </S.TextCard>
            </S.ContainerDescription>

            <S.ContainerPrices>
              <S.TextCardVariant>
                R$39,90<span>/mês</span>
              </S.TextCardVariant>
              <S.ButtonPlan type="button" title="clique aqui">
                ESCOLHA SEU PLANO
              </S.ButtonPlan>
            </S.ContainerPrices>
          </S.CardItem>
          <S.CardItem>
            <S.ContainerDescription>
              <S.TitleCard>Platinum</S.TitleCard>
              <hr />
              <S.TextCard>
                <span>4 dispositivos</span> ao mesmo tempo
              </S.TextCard>
              <S.TextCard>
                Resolução <span>Full HD e 4K Ultra HD</span>
              </S.TextCard>
              <S.TextCard>
                <span>100 downloads</span> para curtir off-line
              </S.TextCard>
            </S.ContainerDescription>

            <S.ContainerPrices>
              <S.TextCardVariant>
                R$55,90<span>/mês</span>
              </S.TextCardVariant>
              <S.ButtonPlan type="button" title="clique aqui">
                ESCOLHA SEU PLANO
              </S.ButtonPlan>
            </S.ContainerPrices>
          </S.CardItem>
        </S.ContainerCard>
      ) : (
        <S.ContainerCard>
          <S.CardItem>
            <S.ContainerDescription>
              <S.TitleCard>Básico com Anúncios</S.TitleCard>
              <hr />
              <S.TextCard>
                <span>2 dispositivos</span> ao mesmo tempo
              </S.TextCard>
              <S.TextCard>
                Resolução <span>Full HD</span>
              </S.TextCard>
            </S.ContainerDescription>

            <S.ContainerPrices>
              <S.TextCardVariant>
                12x R$18,90<span>/mês</span>
              </S.TextCardVariant>
              <S.TextCard>
                <span>Preço total anual R$226,80</span>
              </S.TextCard>
              <S.ButtonPlan type="button" title="clique aqui">
                ESCOLHA SEU PLANO
              </S.ButtonPlan>
            </S.ContainerPrices>
          </S.CardItem>
          <S.CardItem>
            <S.ContainerDescription>
              <S.TitleCard>Standard</S.TitleCard>
              <hr />
              <S.TextCard>
                <span>2 dispositivos</span> ao mesmo tempo
              </S.TextCard>
              <S.TextCard>
                Resolução <span>Full HD</span>
              </S.TextCard>
              <S.TextCard>
                <span>30 downloads</span> para curtir off-line
              </S.TextCard>
            </S.ContainerDescription>

            <S.ContainerPrices>
              <S.TextCardVariant>
                12x R$29,90<span>/mês</span>
              </S.TextCardVariant>
              <S.TextCard>
                <span>Preço total anual R$358,80</span>
              </S.TextCard>
              <S.ButtonPlan type="button" title="clique aqui">
                ESCOLHA SEU PLANO
              </S.ButtonPlan>
            </S.ContainerPrices>
          </S.CardItem>
          <S.CardItem>
            <S.ContainerDescription>
              <S.TitleCard>Platinum</S.TitleCard>
              <hr />
              <S.TextCard>
                <span>4 dispositivos</span> ao mesmo tempo
              </S.TextCard>
              <S.TextCard>
                Resolução <span>Full HD e 4K Ultra HD</span>
              </S.TextCard>
              <S.TextCard>
                <span>100 downloads</span> para curtir off-line
              </S.TextCard>
            </S.ContainerDescription>

            <S.ContainerPrices>
              <S.TextCardVariant>
                12x R$39,90<span>/mês</span>
              </S.TextCardVariant>
              <S.TextCard className="marginBottom">
                <span>Preço total anual R$478,80</span>
              </S.TextCard>
              <S.ButtonPlan type="button" title="clique aqui">
                ESCOLHA SEU PLANO
              </S.ButtonPlan>
            </S.ContainerPrices>
          </S.CardItem>
        </S.ContainerCard>
      )}
      <S.TextOBS>
        *Full HD, 4K Ultra HD e Dolby Atmos não estão disponíveis em todo o
        conteúdo de cada plano. O conteúdo ao vivo nos planos Standard e
        Platinum pode conter anúncios.Downloads podem ter restrições em algumas
        categorias de conteúdo. Saiba mais em:{' '}
        <a href="#">help.streaming.com/plans</a>
      </S.TextOBS>
    </S.SectionPlans>
  )
}

export default Plans
