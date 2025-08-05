import React from 'react'
import './Global.css'
import Home from './Components/Home/Home'
import LogoDisplay from './Components/LogoDisplay/LogoDisplay'
import Presence from './Components/Presence/Presence'
import CEOMessage from './Components/About/CEOMessage'
import FeaturesSection from './Components/Features/FeatureDisplay'
function App() {
  return (
    <div>

      <Home />
      <Presence/>
      <LogoDisplay />
      <CEOMessage/>
      <FeaturesSection/>
    </div>
  )
}

export default App
