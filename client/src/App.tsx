import React from 'react'
import './Global.css'
import Home from './Components/Home/Home'
import LogoDisplay from './Components/LogoDisplay/LogoDisplay'
import Presence from './Components/Presence/Presence'
import CEOMessage from './Components/About/CEOMessage'
function App() {
  return (
    <div>

      <Home />
      <Presence/>
      <LogoDisplay />
      <CEOMessage/>
    </div>
  )
}

export default App
