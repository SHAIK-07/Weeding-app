import React from 'react'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import Featured from './components/Featured'
import Events from './components/Events'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="wedding-app">
      <Hero />
      <Intro />
      <Timeline />
      <Gallery />
      <Featured />
      <Events />
      <Footer />
    </div>
  )
}

export default App
