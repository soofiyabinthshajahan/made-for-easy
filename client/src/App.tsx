import React from 'react'
import './Global.css'
import Home from './Components/Home/Home'
import LogoDisplay from './Components/LogoDisplay/LogoDisplay'
import Presence from './Components/Presence/Presence'
function App() {
  return (
    <div>

      <Home />
      <Presence/>
      <LogoDisplay />
    </div>
  )
}

export default App
