import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
// import './App.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Cards from './components/cards'
import Timeline from './components/timeline'
import Fotter from './components/fotter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
 <Navbar/>
 <Hero />
 <Cards/>
 <Timeline />
 <Fotter />

    </div>
   
    
  )
}

export default App
