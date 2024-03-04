import { StyledGlobal } from '../styles'
import Header from './components/Header'
import Hero from './components/Hero'
import Plans from './components/Plans'
import Varieties from './components/Varieties'

function App() {
  return (
    <div className="App">
      <StyledGlobal />
      <Header />
      <Hero />
      <Varieties />
      <Plans />
    </div>
  )
}

export default App
