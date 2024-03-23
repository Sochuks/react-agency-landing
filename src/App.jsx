import { useState } from 'react'

import Nav_bar from './Components/Navbar'
import  Hero from './Components/Hero'
import  Services from './Components/Services'
import  About from './Components/About'

function App() {

  return (
    <>
      <Nav_bar />
      
      <Hero />

      <Services />

      <About />
    </>
  )
}

export default App
