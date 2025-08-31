import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../sections/LandingPage/Hero'
import Features from '../sections/LandingPage/Features'
import Statistics from '../sections/LandingPage/Statistics'
const LandingPage = ({ darkMode, setDarkMode }) => {
  return (
    <>
      <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <Hero />
      <Statistics/>
      <Features darkMode={darkMode} />
    </>
  )
}

export default LandingPage