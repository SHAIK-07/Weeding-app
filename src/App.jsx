import React, { useEffect } from 'react'
import Hero from './components/Hero'
import Intro from './components/Intro'
import Timeline from './components/Timeline'
import Gallery from './components/Gallery'
import Featured from './components/Featured'
import Events from './components/Events'
import Footer from './components/Footer'
import Petals from './components/Petals'
import './App.css'

function App() {
  useEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    if (window.location.hash) {
      window.history.replaceState(null, document.title, window.location.pathname + window.location.search);
    }
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="wedding-app">
      <Petals />
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
