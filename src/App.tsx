import StickyBadge from './components/StickyBadge'
import SpotlightBadge from './components/SpotlightBadge'
import GradientBadge from './components/GradientBadge'
import StickyButton from './components/StickyButton'
import SpotlightButton from './components/SpotlightButton'
import GradientButton from './components/GradientButton'
import StickyCard from './components/StickyCard'
import SpotlightCard from './components/SpotlightCard'
import GradientCard from './components/GradientCard'
import StickyCallToAction from './components/StickyCallToAction'
import SpotlightCallToAction from './components/SpotlightCallToAction'
import GradientCallToAction from './components/GradientCallToAction'

function App() {
  return (
    <main>
      <h2>Buttons</h2>
      <StickyButton>Sticky Button Ejemplo</StickyButton>
      <SpotlightButton>Spotlight Button Ejemplo</SpotlightButton>
      <SpotlightButton primary>
        Primary Spotlight Button Ejemplo
      </SpotlightButton>
      <GradientButton>Gradient Button Ejemplo</GradientButton>
      <GradientButton primary>Primary Gradient Button Ejemplo</GradientButton>

      <h2>Badges</h2>
      <StickyBadge>Sticky Badge Ejemplo</StickyBadge>
      <SpotlightBadge>Spotlight Badge Ejemplo</SpotlightBadge>
      <SpotlightBadge primary>Primary Spotlight Badge Ejemplo</SpotlightBadge>
      <GradientBadge>Gradient Badge Ejemplo</GradientBadge>
      <GradientBadge primary>Primary Gradient Badge Ejemplo</GradientBadge>

      <h2>Cards</h2>
      <StickyCard>Sticky Card Ejemplo</StickyCard>
      <SpotlightCard>Spotlight Card Ejemplo</SpotlightCard>
      <SpotlightCard primary>Primary Spotlight Card Ejemplo</SpotlightCard>
      <GradientCard>Gradient Card Ejemplo</GradientCard>
      <GradientCard primary>Primary Gradient Card Ejemplo</GradientCard>

      <h2>Call To Actions</h2>
      <StickyCallToAction>Sticky Call To Action Ejemplo</StickyCallToAction>
      <SpotlightCallToAction>
        Spotlight Call To Action Ejemplo
      </SpotlightCallToAction>
      <SpotlightCallToAction primary>
        Primary Spotlight Call To Action Ejemplo
      </SpotlightCallToAction>
      <GradientCallToAction>
        Gradient Call To Action Ejemplo
      </GradientCallToAction>
      <GradientCallToAction primary>
        Primary Gradient Call To Action Ejemplo
      </GradientCallToAction>
    </main>
  )
}

export default App
