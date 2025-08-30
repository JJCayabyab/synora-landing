import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/LandingPage/Hero'
import Features from '../sections/LandingPage/Features'

const LandingPage = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Features darkMode={darkMode} />
    </>
  )
}

export default LandingPage