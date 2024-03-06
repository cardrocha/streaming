import { StyledGlobal } from '../styles'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Plans from './components/Plans'
import Questions from './components/Questions'
import Successes from './components/Successes'
import Varieties from './components/Varieties'
import Question from './models/questions'

const questionsList: Question[] = [
  {
    id: 1,
    title: 'Como eu faço para assinar?',
    answer:
      'O Streaming está disponível para assinatura aqui na streaming.com e também através dos nossos provedores de assinatura na região. Se você tem conta em um provedor autorizado por assinatura e/ou serviço de internet, você terá acesso à Streaming sem custo adicional. Você pode entrar em contato com sua operadora local para obter mais detalhes.'
  },
  {
    id: 2,
    title: 'Onde o Streaming está disponível?',
    answer:
      'Nossa plataforma aprimorada está disponível para Anguila, Antígua e Barbuda, Argentina, Aruba, Bahamas, Barbados, Belize, Bolívia, Brasil, Chile, Colômbia, Costa Rica, Curaçao, Dominica, Equador, El Salvador, Granada, Guatemala, Guiana, Haiti, Honduras, Ilhas Virgens Britânicas, Ilhas Cayman, Jamaica, México, Montserrat, Nicarágua, Panamá, Paraguai, Peru, República Dominicana, Saint Kitts e Nevis, Santa Lúcia, São Vicente e Granadinas, Suriname, Trinidad e Tobago, Turks e Caicos, Uruguai, Venezuela e Estados Unidos.'
  },
  {
    id: 3,
    title: 'Quanto custa Streaming?',
    answer:
      'Novos usuários podem escolher entre três planos, dependendo de suas preferências: - Plano Básico com Anúncios: A assinatura mensal custa R$29,90 e a anual custa R$226,80. - Plano Standard: A assinatura mensal custa R$39,90 e a anual custa R$358,80. - Plano Platinum: A assinatura mensal custa R$55,90 e a anual custa R$ 478,80.'
  },
  {
    id: 4,
    title: 'Em quais dispositivos Streaming está disponível?',
    answer:
      'Amazon Fire, Chromecast, Fire TV, Chrome OS, Mac OS, Windows PC, PS4, PS5, Xbox One, Xbox Series X|S, Amazon Fire Tablet, Android Phone & Tablet, iPhone & iPad'
  }
]

function App() {
  return (
    <div className="App">
      <StyledGlobal />
      <Header />
      <Hero />
      <Varieties />
      <Plans />
      <Successes />
      <Questions question={questionsList} />
      <Footer />
    </div>
  )
}

export default App
