import { StyledGlobal } from '../styles'
import Header from './components/Header'
import Hero from './components/Hero'
import Plans from './components/Plans'
import Successes from './components/Successes'
import Varieties from './components/Varieties'

function App() {
  return (
    <div className="App">
      <StyledGlobal />
      <Header />
      <Hero />
      <Varieties />
      <Plans />
      <Successes />
    </div>
  )
}

export default App
