import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation.jsx'
import Hero from './components/Hero'
import About from './components/About'
import Creations from './components/Creations'
import Footer from './components/Footer'

function App() {

  return (
    <div className="App">
        <div className="wrapper">
            <div className="landing-page sm:bg-[url('../images/mobile/image-hero.jpg')] lg:bg-[url('../images/desktop/image-hero.jpg')]">
                <Navigation />
                <Hero />
            </div>
            <About />
            <Creations />
            <Footer />
        </div>
    </div>
  )
}

export default App;
